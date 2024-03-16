import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { MessageUsdc } from './abis/MessageUsdc'
import { MessageTransmitter } from './abis/MessageTransmitter'
import { Usdc } from './abis/Usdc'
import { tokenMessanger } from './abis/TokenMessanger'
 
export default defineConfig({
  out: 'abis/generated.ts',
  contracts: [
    {
      name: 'message',
      abi: MessageUsdc,
    },
    {
      name: 'usdc',
      abi: Usdc,
      address: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238'
    },
    {
      name: "messageTransmitter",
      abi: MessageTransmitter,
      address: '0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73'
    },
    {
      name: "tokenMessanger",
      abi: tokenMessanger,
      address: "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5"
    }
  ],
  plugins: [
    react()
  ]
})