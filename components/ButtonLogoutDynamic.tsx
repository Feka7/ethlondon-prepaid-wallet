"use client";
import { useDynamicContext } from "@/lib/dynamic"

export default function ButtonLogoutDynamic() {
    const { handleLogOut, isAuthenticated } = useDynamicContext()
    if(!isAuthenticated) return <div className="skeleton w-20 h-10"></div>
    return <button onClick={handleLogOut} className="btn hover:bg-[#951515] hover:text-white bg-[#951515] text-white">Logout</button>
}