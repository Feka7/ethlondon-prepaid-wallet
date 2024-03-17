"use client";

import { tokenMessanger } from "@/abis/TokenMessanger";
import {
  useWriteTokenMessangerDepositForBurn,
  useWriteUsdcApprove,
} from "@/abis/generated";
import { fundPrepaidWallet } from "@/actions/fundPrepaidWallet";
import { publicClient } from "@/lib/publicClient";
import { useRef, useState } from "react";
import { decodeAbiParameters, encodeAbiParameters, keccak256 } from "viem";
import { useAccount } from "wagmi";
import ButtonSubmit from "./ButtonSubmit";
import { createPrepaidWallet } from "@/actions/createPrepaidWallet";
import toast from "react-hot-toast";

export default function ModalCreatePrepaid() {
  const ref = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const { address } = useAccount();
  const writeUsdcApprove = useWriteUsdcApprove();
  const depositForBurn = useWriteTokenMessangerDepositForBurn();

  const submit = async (form: FormData) => {
    if (process.env.NODE_ENV === "development") {
      ref.current?.close()
      toast.success("Prepaid created successfully!")
      return null;
    }
    const amount = number * 10 ** 6;
    await writeUsdcApprove.writeContractAsync({
      args: ["0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5", BigInt(amount)],
    });

    const newAddress = await createPrepaidWallet()

    await depositForBurn.writeContractAsync({
      args: [
        BigInt(amount),
        7,
        encodeAbiParameters([{ type: "address" }], [newAddress.address]),
        "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
      ],
    });

    const logs = await publicClient.getContractEvents({
      address: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
      abi: tokenMessanger,
      eventName: "DepositForBurn",
      args: {
        depositor: address,
      },
    });

    logs[0].data;

    const messageBytes = decodeAbiParameters([{ type: "bytes" }], logs[0].data);

    const messageHash = keccak256(messageBytes[0]);
    let copyMessageBytes = messageBytes[0];
    form.append("messageBytes", copyMessageBytes);
    form.append("messageHash", messageHash);

    await fundPrepaidWallet(form);
  };

  return (
    <>
      <button className="btn" onClick={() => ref?.current?.showModal()}>
      Create prepaid card
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <form action={submit}>
            <div className="form-control">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-2">
              <label htmlFor="number">Number:</label>
              <input
                type="number"
                id="number"
                name="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-4">
              <ButtonSubmit>Create</ButtonSubmit>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
