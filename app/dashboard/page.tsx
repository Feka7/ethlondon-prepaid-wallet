import Address from "@/components/Address";
import Alias from "@/components/Alias";
import ButtonLogoutDynamic from "@/components/ButtonLogoutDynamic";
import ModalCreatePrepaid from "@/components/ModalCreatePrepaid";
import prisma from "@/lib/prisma";
import Image from "next/image";

export default async function Page() {

  const prepaid = await prisma.prepaid.findMany()

  const prepaid_balance = prepaid.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.balance);
  }, 0);

  const max_balance = 2000;
  const new_balance = max_balance - prepaid_balance;

  return (
    <main className="px-8 md:px-24 py-12">
      <div className="flex w-full items-center">
        <div className="flex-grow items-center justify-items-center">
          <Image src="/Logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div>
          <ButtonLogoutDynamic />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 mx-auto mt-24">
        <div className="card border-[#951515] border-4 text-center text-black">
          <div className="flex flex-col place-content-center mt-6">
            <div className="mx-auto">
              <Image src="/avatar.png" alt="Logo" width={120} height={120} />
            </div>
            <div className="mt-4 font-bold text-3xl"><Alias /></div>
            <div className="mt-4">
              <Address />
            </div>
            <div className="mt-6">Prepaid wallets: {prepaid.length}</div>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-2 rounded-md shadow-md bg-[url('/bg-card.png')] bg-no-repeat bg-cover flex flex-col">
          <div className="px-8 mt-20 text-4xl font-semibold text-white">
            Your wallet balance is:
          </div>
          <div className="flex-grow px-8 text-6xl mt-6 text-white">{new_balance}$ USDC</div>
          <div className="px-8 pt-20 pb-10">
            <ModalCreatePrepaid />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="text-4xl font-bold">Prepaid wallet created</div>
      </div>
      <div className="divider h-1 bg-[#ff8d8d] divider-vertical max-w-4xl"></div>
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
           {prepaid.map((item) => <tr key={item.address}>
              <th>
                <span className="font-bold text-xl">17-03-2024</span>
                <br></br>
                <span className="text-gray-400">date</span>
              </th>
              <td><span className="font-bold text-xl">{item.email}</span>
                <br></br>
                <span className="text-gray-400">email</span></td>
              <td><span className="font-bold text-xl">{item.balance}$ USDC</span>
                <br></br>
                <span className="text-gray-400">balance</span></td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </main>
  );
}
