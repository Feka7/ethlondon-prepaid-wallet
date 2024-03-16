// Copyright (c) 2023, Circle Technologies, LLC. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Installed by `npm install node-forge`
const forge = require("node-forge");

// The following sample codes generate a distinct entity secret ciphertext with each execution
function generateEntitySecret(frmPubKey: string, frmEntitySecret: string) {
  var publicKeyString = frmPubKey;
  var hexEncodedEntitySecret = frmEntitySecret;

  const entitySecret = forge.util.hexToBytes(hexEncodedEntitySecret);
  if (entitySecret.length != 32) {
    console.log("invalid entity secret");
    return "invalid entity secret";
  }

  // encrypt data by the public key
  const publicKey = forge.pki.publicKeyFromPem(publicKeyString);
  const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: {
      md: forge.md.sha256.create(),
    },
  });

  // encode to base64
  const base64EncryptedData = forge.util.encode64(encryptedData);

  return base64EncryptedData;
}

module.exports.main = generateEntitySecret;
