"use client";

import { useRef, useState } from "react";
import toast from "react-hot-toast";
import ButtonSubmit from "./ButtonSubmit";

export default function ModalSendTransaction() {
  const ref = useRef<HTMLDialogElement>(null);
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(0);

  const submit = async (form: FormData) => {
    if (process.env.NODE_ENV === "development") {
      ref.current?.close()
      toast.success("Prepaid created successfully!")
      return null;
    }
   
  };

  return (
    <>
      <button className="btn" onClick={() => ref?.current?.showModal()}>
      Send USDC
      </button>
      <dialog ref={ref} className="modal">
        <div className="modal-box">
          <form action={submit}>
            <div className="form-control">
              <label htmlFor="email">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                className="input input-bordered"
              />
            </div>

            <div className="form-control mt-2">
              <label htmlFor="number">Amount:</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                required
                className="input input-bordered"
              />
            </div>
            <div className="divider">OR</div>
            <p className="link-hover text-center link">Scan with camera</p>
            <div className="form-control mt-4">
              <ButtonSubmit>Send</ButtonSubmit>
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
