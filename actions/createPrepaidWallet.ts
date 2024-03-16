"use server";

import { v4 as uuidv4 } from "uuid";

const url = "https://api.circle.com/v1/w3s/developer/wallets";

export async function createPrepaidWallet() {
  const entitySecretCiphertext = generateEntitySecret(
    process.env.CIRCLE_API_KEY as string,
    process.env.CIRCLE_ENTITY_SECRET as string
  );
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      authorization: "Bearer " + process.env.CIRCLE_API_KEY,
    },
    body: JSON.stringify({
      accountType: "SCA",
      idempotencyKey: uuidv4(),
      blockchains: ["MATIC-MUMBAI"],
      count: 1,
      entitySecretCiphertext: entitySecretCiphertext,
      walletSetId: process.env.CIRCLE_WALLETSETID,
    }),
  };

  const result = await (await fetch(url, options)).json()

}
