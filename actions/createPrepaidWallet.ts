"use server";
import { Resend } from 'resend';
import { z } from "zod";

const resend = new Resend('re_aZEnGGFr_EEK2EbXstDMRRubfmrqnUqJ3');

const schema = z.object({
    email: z.string(),
    number: z.string()
  });
export async function createPrepaidWallet(formData: FormData) {
    const formDataObj = Object.fromEntries(formData.entries());
    const validatedData = schema.parse(formDataObj);

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: "feka7@hotmail.it",
        subject: 'Flowise prepaid wallet',
        html: '<p>You have received a prepaid wallet with <strong>'+validatedData.number+' USDC</strong>!</p>'
      });
}