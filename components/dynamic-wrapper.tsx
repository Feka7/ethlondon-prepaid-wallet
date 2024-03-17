"use client";

import { DynamicContextProvider } from "../lib/dynamic";
import { EthereumWalletConnectors } from "../lib/dynamic";
import { useRouter } from "next/navigation";
import { DynamicWagmiConnector } from "../lib/dynamic";
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

            // Handle success - maybe redirect to the home page or user dashboard
            router.push("/dashboard");
          },
          onLogout: () => {
            // Handle success - maybe redirect to the home page or user dashboard
            router.push("/");
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
