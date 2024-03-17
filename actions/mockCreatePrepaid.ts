"use server";

import prisma from "@/lib/prisma";
import { Resend } from "resend";
import { v4 as uuidv4 } from "uuid";
import { z } from "zod";
import crypto from "crypto";
import { revalidatePath } from "next/cache";

const resend = new Resend("re_V6L9JsBp_CTPeJSQBCKyz2LozPD6AYewt");

const schema = z.object({
  email: z.string(),
  balance: z.string(),
});

export async function mockCreatePrepaid(formData: FormData) {
  const formDataObj = Object.fromEntries(formData.entries());
  const validationData = schema.parse(formDataObj);

  var id = crypto.randomBytes(32).toString("hex");
  var privateKey = "0x" + id;
  let id_user = uuidv4();
  await prisma.prepaid.create({
    data: {
      address: privateKey,
      email: validationData.email,
      balance: validationData.balance,
      id: id_user,
    },
  });

  const result = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: validationData.email,
    subject: "Flowise prepaid wallet",
    html:
      "<p>You have received a prepaid wallet with <strong>" +
      validationData.balance +
      ' USDC</strong>!<a href="http://localhost:3000/prepaid/' +
      id_user +
      '">Click here</a></p>',
  });
  console.log(result)

  revalidatePath("/dashboard");
}
