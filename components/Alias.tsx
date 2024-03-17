"use client";

import { useDynamicContext } from "@/lib/dynamic"

export default function Alias() {

    const { user } = useDynamicContext()

    return (
        <div>{user?.alias}</div>
    )
   
}