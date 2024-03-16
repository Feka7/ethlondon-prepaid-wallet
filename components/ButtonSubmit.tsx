"use client";

import { ReactNode } from 'react';
import { useFormStatus } from 'react-dom'
export default function ButtonSubmit( { children }: { children: ReactNode}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className='btn'
    >
      {pending ? <span className="loading"></span> : children}
    </button>
  );
}