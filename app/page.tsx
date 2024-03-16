import ClientExample from "@/components/client-example";
import Image from "next/image";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import ButtonLoginDynamic from "@/components/ButtonLoginDynamic";

export default async function Page() {
  const session = await auth();
  return (
    <main className="px-8 md:px-24 py-12">
      <div className="flex w-full items-center">
        <div className="flex-grow items-center justify-items-center">
          <Image src="/Logo.png" alt="Logo" width={80} height={80} />
        </div>
        <div className="space-x-10 items-center hidden md:flex">
          <p className="font-bold">How it works</p>
          <p className="font-bold">Why use Flowise</p>
          <ButtonLoginDynamic />
        </div>
      </div>
      <div className="mt-20 text-center flex flex-col place-content-center">
        <div className="text-7xl font-bold">
          Crypto Made <span className="text-[#FB2323]">Simple</span>
        </div>
        <div className="text-4xl font-bold mt-6">
          For Everyone, Everywhere, Every Time
        </div>
        <div className="font-bold text-lg text-gray-600 mt-12 max-w-xl flex self-center">
          Creating a prepaid wallet, sending it to anyone, and managing USDC
          funds has never been easier. Join us to experience a new and better
          way to interact with cryptocurrencies.
        </div>
      </div>
      <div className="mt-12 flex place-content-center">
        <ButtonLoginDynamic />
      </div>
      <div className="mt-12 flex place-content-center">
        <Image src="/globe.png" width={600} height={600} alt="globe" />
      </div>
      <div className="mt-20 text-center">
        <p className="text-5xl font-bold">Why use Flowise</p>
      </div>
      <div className="divider divider-vertical max-w-4xl mx-auto"></div>
      <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-8 text-white">
        <div className="card bg-gradient-to-tr from-[#951515] to-[#FB2323]">
          <div className="card-body">
            <Image
              unoptimized
              src={"/bimbi.gif"}
              width={80}
              height={80}
              alt="bimbi"
            />
            <p className="text-3xl font-bold">Youth and Crypto</p>
            <p>
              Provide the younger generation with a secure and controlled way to
              explore the world of cryptocurrencies. Ideal for small
              transactions and in-game purchases.
            </p>
          </div>
        </div>
        <div className="card bg-gradient-to-tr from-[#951515] to-[#FB2323]">
          <div className="card-body">
            <Image
              unoptimized
              src={"/Second.gif"}
              width={80}
              height={80}
              alt="second"
            />
            <p className="text-3xl font-bold">Ease of Use for Non-Techies</p>
            <p>
              Flowise offers an intuitive and accessible experience to spend
              crypto. No technical skills or prior knowledge of the crypto world
              is required: all you need is a click to start using USDC securely
              and without complications.
            </p>
          </div>
        </div>
        <div className="card bg-gradient-to-tr from-[#951515] to-[#FB2323]">
          <div className="card-body">
            <Image
              unoptimized
              src={"/travel.gif"}
              width={80}
              height={80}
              alt="travel"
            />
            <p className="text-3xl font-bold">The Wallet for Your Travels</p>
            <p>
              Travel light and safe with a prepaid wallet that you can recharge
              and manage from anywhere in the world, eliminating the risks
              associated with managing your personal wallet
            </p>
          </div>
        </div>
      </div>
      <div className="text-center mt-36">
        <p className="text-5xl font-bold">How it works</p>
      </div>
      <div className="divider divider-vertical max-w-4xl mx-auto"></div>
      <div className="mt-20 grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0 justify-items-center items-center max-w-5xl mx-auto">
        <div>
          <Image src="/work-1.png" width={300} height={300} alt="work1" />
        </div>
        <div>
          <p className="text-4xl font-bold">
            Start with a <span className="text-[#FB2323]">Click</span>
          </p>
          <p className="max-w-md font-semibold mt-4">
            Connect your wallet and create a prepaid wallet for anyone in
            seconds. Just enter the recipient's email and the amount of USDC you
            wish to deposit.
          </p>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 xl:grid-cols-2 gap-y-10 xl:gap-y-0 justify-items-center items-center max-w-5xl mx-auto">
        <div className="order-last xl:order-first">
          <p className="text-4xl font-bold">
            <span className="text-[#FB2323]">Immediate</span> Sending
          </p>
          <p className="max-w-md font-semibold mt-4">
            Once created, we automatically send an email to the recipient with a
            link to access their new prepaid wallet. No complications, just a
            click.
          </p>
        </div>
        <div>
          <Image src="/work-2.png" width={300} height={300} alt="work2" />
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 xl:grid-cols-2 justify-items-center gap-y-10 xl:gap-y-0 items-center max-w-5xl mx-auto">
        <div>
          <Image src="/work-3.png" width={300} height={300} alt="work3" />
        </div>
        <div>
          <p className="text-4xl font-bold">
            <span className="text-[#FB2323]">Spend</span> or{" "}
            <span className="text-[#FB2323]">Manage</span> with Ease
          </p>
          <p className="max-w-md font-semibold mt-4">
            The user can freely spend the USDC balance within the wallet, while
            you retain full control to recharge or withdraw funds at any time.
          </p>
        </div>
      </div>
      <div className="text-center mt-36">
        <p className="text-5xl font-bold text-[#951515]">Powered by</p>
      </div>
      <div className="divider divider-vertical max-w-4xl mx-auto"></div>
      <div className="mt-12 grid grid-cols-2 gap-x-10 max-w-5xl justify-items-center items-center mx-auto">
        <div>
          <Image src="/circle-logo.png" width={300} height={300} alt="circle" />
        </div>
        <div>
          <Image
            src="/dynamic-logo.png"
            width={300}
            height={300}
            alt="dynamic"
          />
        </div>
      </div>
    </main>
  );
}
