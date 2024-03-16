import NextAuth from "next-auth";

import type { NextAuthConfig } from "next-auth";

import Credentials from "@auth/core/providers/credentials";
import { validateJWT } from "./lib/authHelpers";

import prisma from "./lib/prisma";

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
        const jwtPayload = await validateJWT(token);
        if (jwtPayload && jwtPayload.sub) {
          const u = await prisma.user.upsert({
            where: {
              id: jwtPayload.sub,
            },
            update: {
              email: jwtPayload.id,
              name: jwtPayload.alias,
            },
            create: {
              id: jwtPayload.sub,
              email: jwtPayload.email,
              name: jwtPayload.alias,
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
