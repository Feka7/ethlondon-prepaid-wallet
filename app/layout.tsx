// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google";
import ProviderWrapper from "../components/dynamic-wrapper";

const inter = Sulphur_Point({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowise",
  description:
    "Crypto Made Simple",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body className={inter.className}>
          <div className="w-full min-h-screen">
              {children}
          </div>
        </body>
      </ProviderWrapper>
    </html>
  );
}