import { auth } from "@/auth";
import ButtonLogoutDynamic from "@/components/ButtonLogoutDynamic";
import ModalCreatePrepaid from "@/components/ModalCreatePrepaid";
import ClientExample from "@/components/client-example";
import { SessionProvider } from "next-auth/react";

export default async function Page() {
  const session = await auth();
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonLogoutDynamic />
      <ModalCreatePrepaid />
      <SessionProvider session={session}>
        <ClientExample />
      </SessionProvider>
    </main>
  );
}
