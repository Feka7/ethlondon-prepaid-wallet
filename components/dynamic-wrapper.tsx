"use client";

import { getCsrfToken } from "next-auth/react";
import { signOut } from "next-auth/react";

import { DynamicContextProvider } from "../lib/dynamic";
import { EthereumWalletConnectors } from "../lib/dynamic";
import { useRouter } from "next/navigation";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { createConfig, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { sepolia } from "viem/chains";

const config = createConfig({
  chains: [sepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [sepolia.id]: http(),
  },
});

const queryClient = new QueryClient();

export default function ProviderWrapper({ children }: React.PropsWithChildren) {
  const router = useRouter();
  return (
    <DynamicContextProvider
      settings={{
        environmentId: process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "",
        walletConnectors: [EthereumWalletConnectors],

        eventsCallbacks: {
          onAuthSuccess: async (event) => {
            console.log("auth success from Dynamic", event);
            const { authToken } = event;

            const csrfToken = await getCsrfToken();

            fetch("/api/auth/callback/credentials", {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              body: `csrfToken=${encodeURIComponent(
                csrfToken
              )}&token=${encodeURIComponent(authToken)}`,
            })
              .then((res) => {
                if (res.ok) {
                  console.log("auth success from nextAuth", res);
                  // Handle success - maybe redirect to the home page or user dashboard
                  router.push("/dashboard");
                } else {
                  // Handle any errors - maybe show an error message to the user
                  console.log(res);
                  console.error("Failed to log in");
                }
              })
              .catch((error) => {
                // Handle any exceptions
                console.error("Error logging in", error);
              });
          },
          onLogout: () => {
            signOut()
              .then((res) => {
                if (res) {
                  console.log("auth success from nextAuth", res);
                  // Handle success - maybe redirect to the home page or user dashboard
                  router.push("/");
                } else {
                  // Handle any errors - maybe show an error message to the user
                  console.log(res);
                  console.error("Failed to log in");
                }
              })
              .catch((error) => console.log("error logout", error));
          },
        },
      }}
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  );
}
