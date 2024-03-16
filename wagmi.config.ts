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
      abi: Usdc
    },
    {
      name: "messageTransmitter",
      abi: MessageTransmitter
    },
    {
      name: "tokenMessanger",
      abi: tokenMessanger
    }
  ],
  plugins: [
    react()
  ]
})