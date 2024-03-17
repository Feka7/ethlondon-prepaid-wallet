
import Address from "@/components/Address";
import ButtonLogoutDynamic from "@/components/ButtonLogoutDynamic";
import ModalCreatePrepaid from "@/components/ModalCreatePrepaid";
import Image from "next/image";

import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import ModalSendTransaction from "@/components/ModalSendTransaction";
export default async function Page({ params }: { params: { wallet: string } }) {
 
  const wallet = await prisma.prepaid.findUnique({
    where: {
        id: params.wallet
    }
  });
  if(!wallet) {
    notFound()
  }
  
  return (
    <main className="px-8 md:px-24 py-12">
      <div className="flex w-full items-center">
        <div className="flex-grow items-center justify-items-center">
          <Image src="/Logo.png" alt="Logo" width={80} height={80} />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-auto mt-24">
        <div className="card border-[#4C0066] border-4 text-center text-black">
          <div className="flex flex-col place-content-center mt-6">
            <div className="mx-auto">
              <Image src="/avatar-pur.png" alt="Logo" width={120} height={120} />
            </div>
            <div className="mt-4 font-bold text-3xl">{wallet?.email}</div>
            <div className="mt-4">
              {wallet.address}
            </div>
            <div className="mt-6">Mint date: 16-03-2024</div>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2 rounded-md shadow-md bg-[url('/bg-card-pur.png')] bg-no-repeat bg-cover flex flex-col">
          <div className="px-8 mt-20 text-4xl font-semibold text-white">
            Prepaid wallet balance:
          </div>
          <div className="flex-grow px-8 text-6xl mt-6 text-white">100$ USDC</div>
          <div className="px-8 pt-20 pb-10">
            <ModalSendTransaction />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-4xl font-bold">Wallet transactions</div>
      </div>
      <div className="divider h-1 bg-[#9C00D3] divider-vertical max-w-4xl"></div>
      <div className="overflow-x-auto mt-8">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <span className="font-bold text-xl">20-03-2024</span>
                <br></br>
                <span className="text-gray-400">date</span>
              </th>
              <td><span className="font-bold text-xl">0x7335f8648bf761c7796E275DA797B68AFcd1dB41</span>
                <br></br>
                <span className="text-gray-400">receiver</span></td>
              <td><span className="font-bold text-xl">50$ USDC</span>
                <br></br>
                <span className="text-gray-400">amount</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
