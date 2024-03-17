"use client";

import { useAccount } from "wagmi";

export default function Address() {

    const { address } = useAccount()

    return (
        <div>{address}</div>
    )
   
}