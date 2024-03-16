"use server";
import { Resend } from 'resend';
import { z } from "zod";
import { v4 as uuidv4 } from 'uuid';

const resend = new Resend('re_aZEnGGFr_EEK2EbXstDMRRubfmrqnUqJ3');

const schema = z.object({
    email: z.string(),
    number: z.string(),
    messageBytes: z.string(),
    messageHash: z.string()
  });

const url = 'https://api.circle.com/v1/w3s/developer/transactions/contractExecution';
export async function createPrepaidWallet(formData: FormData) {
    const formDataObj = Object.fromEntries(formData.entries());
    const validatedData = schema.parse(formDataObj);
    
      const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', Authorization: 'Bearer '+process.env.CIRCLE_API_KEY},
        body: JSON.stringify({
          abiFunctionSignature: 'receiveMessage(bytes,bytes)',
          abiParameters: [validatedData.messageBytes, validatedData.messageHash],
          idempotencyKey: uuidv4(),
          contractAddress: '0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73',
          feeLevel: 'MEDIUM',
          walletId: '5640c7c3-32d6-5077-a32e-fddb84a3c310',
          entitySecretCiphertext: process.env.CIRCLE_ENTITY_SECRET
        })
      };
      fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: "feka7@hotmail.it",
        subject: 'Flowise prepaid wallet',
        html: '<p>You have received a prepaid wallet with <strong>'+validatedData.number+' USDC</strong>!</p>'
      });
}