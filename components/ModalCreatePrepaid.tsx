"use client";

import { useRef, useState } from "react";
import ButtonSubmit from "./ButtonSubmit";
import { createPrepaidWallet } from "@/actions/createPrepaidWallet";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { useAccount } from "wagmi";

export default function ModalCreatePrepaid() {
  const ref = useRef<HTMLDialogElement>(null);
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const { primaryWallet } = useDynamicContext()
  const { address, isConnected, chain } = useAccount();

  const submit =async (form: FormData) => {
    if (!primaryWallet) return null;
    const signer = await primaryWallet.connector.getSigner();
    
    await createPrepaidWallet(form)
  };

  return (
    <>
      <button className="btn" onClick={() => ref?.current?.showModal()}>
        {address}
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
                onChange={(e) => setNumber(e.target.value)}
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
