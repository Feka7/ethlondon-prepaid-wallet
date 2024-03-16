import NextAuth from "next-auth";

import type { NextAuthConfig } from "next-auth";

import Credentials from "@auth/core/providers/credentials";

import prisma from "./lib/prisma";
import { importSPKI, jwtVerify } from "jose";

type User = {
  id: string;
  name: string;
  email: string;
  // Add other fields as needed
};

export const config = {
  theme: {
    logo: "https://next-auth.js.org/img/logo/logo-sm.png",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        token: { label: "Token", type: "text" },
      },
      async authorize(
        credentials: Partial<Record<"token", unknown>>,
        request: Request
      ): Promise<User | null> {
        const token = credentials.token as string; // Safely cast to string; ensure to handle undefined case
        if (typeof token !== "string" || !token) {
          throw new Error("Token is required");
        }
        const tokenValidate = token.replace("Bearer ", "");
        const key = await importSPKI(
          process.env.NEXT_PUBLIC_DYNAMIC_PUBLIC_KEY!.replace(/\\n/g, "\n"),
          "RS256"
        );
        const {payload} = await jwtVerify(tokenValidate, key);
  
        if (payload && payload.sub && payload.alias && payload.email) {
          const u = await prisma.user.upsert({
            where: {
              id: payload.sub,
            },
            update: {
              email: payload.email,
              name: payload.alias,
            },
            create: {
              id: payload.sub,
              email: payload.email as string,
              name: payload.alias as string
            },
          });
          // Transform the JWT payload into your user object
          const user: User = {
            id: u.id, // Assuming 'sub' is the user ID
            name: u.name || "", // Replace with actual field from JWT payload
            email: u.email || "", // Replace with actual field from JWT payload
            // Map other fields as needed
          };
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
