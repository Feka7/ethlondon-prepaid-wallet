// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import { Sulphur_Point } from "next/font/google";
import ProviderWrapper from "../components/dynamic-wrapper";

const inter = Sulphur_Point({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextAuth.js Example",
  description:
    "This is an example site to demonstrate how to use NextAuth.js for authentication",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <ProviderWrapper>
        <body className={inter.className}>
          <div className="flex flex-col justify-between w-full h-full min-h-screen">
            <main className="flex-auto w-full max-w-3xl px-4 py-4 mx-auto sm:px-6 md:py-6">
              {children}
            </main>
            
          </div>
        </body>
      </ProviderWrapper>
    </html>
  );
}