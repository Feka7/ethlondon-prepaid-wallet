import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// message
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const messageAbi = [
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'addressToBytes32',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: '_buf', internalType: 'bytes32', type: 'bytes32' }],
    name: 'bytes32ToAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// messageTransmitter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const messageTransmitterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_localDomain', internalType: 'uint32', type: 'uint32' },
      { name: '_attester', internalType: 'address', type: 'address' },
      { name: '_maxMessageBodySize', internalType: 'uint32', type: 'uint32' },
      { name: '_version', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AttesterDisabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'attester',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AttesterEnabled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAttesterManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newAttesterManager',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'AttesterManagerUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newMaxMessageBodySize',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MaxMessageBodySizeUpdated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'caller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'sourceDomain',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'sender',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'messageBody',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'MessageReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'message', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'MessageSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'Pause' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PauserChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRescuer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RescuerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldSignatureThreshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newSignatureThreshold',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SignatureThresholdUpdated',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'Unpause' },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'attesterManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'attester', internalType: 'address', type: 'address' }],
    name: 'disableAttester',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newAttester', internalType: 'address', type: 'address' }],
    name: 'enableAttester',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'getEnabledAttester',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getNumEnabledAttesters',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'attester', internalType: 'address', type: 'address' }],
    name: 'isEnabledAttester',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'localDomain',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'maxMessageBodySize',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextAvailableNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'message', internalType: 'bytes', type: 'bytes' },
      { name: 'attestation', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'receiveMessage',
    outputs: [{ name: 'success', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'originalMessage', internalType: 'bytes', type: 'bytes' },
      { name: 'originalAttestation', internalType: 'bytes', type: 'bytes' },
      { name: 'newMessageBody', internalType: 'bytes', type: 'bytes' },
      {
        name: 'newDestinationCaller',
        internalType: 'bytes32',
        type: 'bytes32',
      },
    ],
    name: 'replaceMessage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'tokenContract',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rescueERC20',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rescuer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'destinationDomain', internalType: 'uint32', type: 'uint32' },
      { name: 'recipient', internalType: 'bytes32', type: 'bytes32' },
      { name: 'messageBody', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'sendMessage',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'destinationDomain', internalType: 'uint32', type: 'uint32' },
      { name: 'recipient', internalType: 'bytes32', type: 'bytes32' },
      { name: 'destinationCaller', internalType: 'bytes32', type: 'bytes32' },
      { name: 'messageBody', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'sendMessageWithCaller',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newMaxMessageBodySize',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setMaxMessageBodySize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'newSignatureThreshold',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'setSignatureThreshold',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'signatureThreshold',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newAttesterManager', internalType: 'address', type: 'address' },
    ],
    name: 'updateAttesterManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newPauser', internalType: 'address', type: 'address' }],
    name: 'updatePauser',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newRescuer', internalType: 'address', type: 'address' }],
    name: 'updateRescuer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    name: 'usedNonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
] as const

export const messageTransmitterAddress =
  '0xe09A679F56207EF33F5b9d8fb4499Ec00792eA73' as const

export const messageTransmitterConfig = {
  address: messageTransmitterAddress,
  abi: messageTransmitterAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// tokenMessanger
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenMessangerAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_messageTransmitter', internalType: 'address', type: 'address' },
      { name: '_messageBodyVersion', internalType: 'uint32', type: 'uint32' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: true },
      {
        name: 'burnToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'depositor',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'mintRecipient',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'destinationDomain',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'destinationTokenMessenger',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
      {
        name: 'destinationCaller',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'DepositForBurn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'localMinter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LocalMinterAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'localMinter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'LocalMinterRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'mintRecipient',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'mintToken',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MintAndWithdraw',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferStarted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'domain',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'tokenMessenger',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RemoteTokenMessengerAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'domain',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
      {
        name: 'tokenMessenger',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: false,
      },
    ],
    name: 'RemoteTokenMessengerRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRescuer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RescuerChanged',
  },
  {
    type: 'function',
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newLocalMinter', internalType: 'address', type: 'address' },
    ],
    name: 'addLocalMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'domain', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenMessenger', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'addRemoteTokenMessenger',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destinationDomain', internalType: 'uint32', type: 'uint32' },
      { name: 'mintRecipient', internalType: 'bytes32', type: 'bytes32' },
      { name: 'burnToken', internalType: 'address', type: 'address' },
    ],
    name: 'depositForBurn',
    outputs: [{ name: '_nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'destinationDomain', internalType: 'uint32', type: 'uint32' },
      { name: 'mintRecipient', internalType: 'bytes32', type: 'bytes32' },
      { name: 'burnToken', internalType: 'address', type: 'address' },
      { name: 'destinationCaller', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'depositForBurnWithCaller',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'remoteDomain', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
      { name: 'messageBody', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'handleReceiveMessage',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'localMessageTransmitter',
    outputs: [
      {
        name: '',
        internalType: 'contract IMessageTransmitter',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'localMinter',
    outputs: [
      { name: '', internalType: 'contract ITokenMinter', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'messageBodyVersion',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    name: 'remoteTokenMessengers',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'removeLocalMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'domain', internalType: 'uint32', type: 'uint32' }],
    name: 'removeRemoteTokenMessenger',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'originalMessage', internalType: 'bytes', type: 'bytes' },
      { name: 'originalAttestation', internalType: 'bytes', type: 'bytes' },
      {
        name: 'newDestinationCaller',
        internalType: 'bytes32',
        type: 'bytes32',
      },
      { name: 'newMintRecipient', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'replaceDepositForBurn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'tokenContract',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rescueERC20',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rescuer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newRescuer', internalType: 'address', type: 'address' }],
    name: 'updateRescuer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

export const tokenMessangerAddress =
  '0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5' as const

export const tokenMessangerConfig = {
  address: tokenMessangerAddress,
  abi: tokenMessangerAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// usdc
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdcAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonce',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'AuthorizationCanceled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'authorizer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'nonce',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'AuthorizationUsed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Blacklisted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newBlacklister',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BlacklisterChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'burner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Burn',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newMasterMinter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MasterMinterChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Mint',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'minter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'minterAllowedAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MinterConfigured',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'oldMinter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'MinterRemoved',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'OwnershipTransferred',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'Pause' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'PauserChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newRescuer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'RescuerChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'UnBlacklisted',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'Unpause' },
  {
    type: 'function',
    inputs: [],
    name: 'CANCEL_AUTHORIZATION_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'authorizer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'authorizationState',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'blacklist',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'blacklister',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'authorizer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'minter', internalType: 'address', type: 'address' },
      { name: 'minterAllowedAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'configureMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currency',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'decrement', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'decreaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'increment', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'increaseAllowance',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenName', internalType: 'string', type: 'string' },
      { name: 'tokenSymbol', internalType: 'string', type: 'string' },
      { name: 'tokenCurrency', internalType: 'string', type: 'string' },
      { name: 'tokenDecimals', internalType: 'uint8', type: 'uint8' },
      { name: 'newMasterMinter', internalType: 'address', type: 'address' },
      { name: 'newPauser', internalType: 'address', type: 'address' },
      { name: 'newBlacklister', internalType: 'address', type: 'address' },
      { name: 'newOwner', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newName', internalType: 'string', type: 'string' }],
    name: 'initializeV2',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'lostAndFound', internalType: 'address', type: 'address' },
    ],
    name: 'initializeV2_1',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'isBlacklisted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'isMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'masterMinter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'minterAllowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'paused',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'pauser',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
      { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'minter', internalType: 'address', type: 'address' }],
    name: 'removeMinter',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'tokenContract',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rescueERC20',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rescuer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
      { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_account', internalType: 'address', type: 'address' }],
    name: 'unBlacklist',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'unpause',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_newBlacklister', internalType: 'address', type: 'address' },
    ],
    name: 'updateBlacklister',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_newMasterMinter', internalType: 'address', type: 'address' },
    ],
    name: 'updateMasterMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newPauser', internalType: 'address', type: 'address' }],
    name: 'updatePauser',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newRescuer', internalType: 'address', type: 'address' }],
    name: 'updateRescuer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

export const usdcAddress = '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238' as const

export const usdcConfig = { address: usdcAddress, abi: usdcAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageAbi}__
 */
export const useReadMessage = /*#__PURE__*/ createUseReadContract({
  abi: messageAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"addressToBytes32"`
 */
export const useReadMessageAddressToBytes32 =
  /*#__PURE__*/ createUseReadContract({
    abi: messageAbi,
    functionName: 'addressToBytes32',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"bytes32ToAddress"`
 */
export const useReadMessageBytes32ToAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: messageAbi,
    functionName: 'bytes32ToAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__
 */
export const useReadMessageTransmitter = /*#__PURE__*/ createUseReadContract({
  abi: messageTransmitterAbi,
  address: messageTransmitterAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"attesterManager"`
 */
export const useReadMessageTransmitterAttesterManager =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'attesterManager',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"getEnabledAttester"`
 */
export const useReadMessageTransmitterGetEnabledAttester =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'getEnabledAttester',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"getNumEnabledAttesters"`
 */
export const useReadMessageTransmitterGetNumEnabledAttesters =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'getNumEnabledAttesters',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"isEnabledAttester"`
 */
export const useReadMessageTransmitterIsEnabledAttester =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'isEnabledAttester',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"localDomain"`
 */
export const useReadMessageTransmitterLocalDomain =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'localDomain',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"maxMessageBodySize"`
 */
export const useReadMessageTransmitterMaxMessageBodySize =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'maxMessageBodySize',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"nextAvailableNonce"`
 */
export const useReadMessageTransmitterNextAvailableNonce =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'nextAvailableNonce',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"owner"`
 */
export const useReadMessageTransmitterOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"paused"`
 */
export const useReadMessageTransmitterPaused =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'paused',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"pauser"`
 */
export const useReadMessageTransmitterPauser =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'pauser',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"pendingOwner"`
 */
export const useReadMessageTransmitterPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"rescuer"`
 */
export const useReadMessageTransmitterRescuer =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'rescuer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"signatureThreshold"`
 */
export const useReadMessageTransmitterSignatureThreshold =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'signatureThreshold',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"usedNonces"`
 */
export const useReadMessageTransmitterUsedNonces =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'usedNonces',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"version"`
 */
export const useReadMessageTransmitterVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'version',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__
 */
export const useWriteMessageTransmitter = /*#__PURE__*/ createUseWriteContract({
  abi: messageTransmitterAbi,
  address: messageTransmitterAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteMessageTransmitterAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"disableAttester"`
 */
export const useWriteMessageTransmitterDisableAttester =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'disableAttester',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"enableAttester"`
 */
export const useWriteMessageTransmitterEnableAttester =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'enableAttester',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"pause"`
 */
export const useWriteMessageTransmitterPause =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"receiveMessage"`
 */
export const useWriteMessageTransmitterReceiveMessage =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'receiveMessage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"replaceMessage"`
 */
export const useWriteMessageTransmitterReplaceMessage =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'replaceMessage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useWriteMessageTransmitterRescueErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'rescueERC20',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"sendMessage"`
 */
export const useWriteMessageTransmitterSendMessage =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'sendMessage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"sendMessageWithCaller"`
 */
export const useWriteMessageTransmitterSendMessageWithCaller =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'sendMessageWithCaller',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"setMaxMessageBodySize"`
 */
export const useWriteMessageTransmitterSetMaxMessageBodySize =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'setMaxMessageBodySize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"setSignatureThreshold"`
 */
export const useWriteMessageTransmitterSetSignatureThreshold =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'setSignatureThreshold',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteMessageTransmitterTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"unpause"`
 */
export const useWriteMessageTransmitterUnpause =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"updateAttesterManager"`
 */
export const useWriteMessageTransmitterUpdateAttesterManager =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'updateAttesterManager',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"updatePauser"`
 */
export const useWriteMessageTransmitterUpdatePauser =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'updatePauser',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"updateRescuer"`
 */
export const useWriteMessageTransmitterUpdateRescuer =
  /*#__PURE__*/ createUseWriteContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'updateRescuer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__
 */
export const useSimulateMessageTransmitter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateMessageTransmitterAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"disableAttester"`
 */
export const useSimulateMessageTransmitterDisableAttester =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'disableAttester',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"enableAttester"`
 */
export const useSimulateMessageTransmitterEnableAttester =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'enableAttester',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulateMessageTransmitterPause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'pause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"receiveMessage"`
 */
export const useSimulateMessageTransmitterReceiveMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'receiveMessage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"replaceMessage"`
 */
export const useSimulateMessageTransmitterReplaceMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'replaceMessage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useSimulateMessageTransmitterRescueErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'rescueERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"sendMessage"`
 */
export const useSimulateMessageTransmitterSendMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'sendMessage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"sendMessageWithCaller"`
 */
export const useSimulateMessageTransmitterSendMessageWithCaller =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'sendMessageWithCaller',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"setMaxMessageBodySize"`
 */
export const useSimulateMessageTransmitterSetMaxMessageBodySize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'setMaxMessageBodySize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"setSignatureThreshold"`
 */
export const useSimulateMessageTransmitterSetSignatureThreshold =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'setSignatureThreshold',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateMessageTransmitterTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulateMessageTransmitterUnpause =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'unpause',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"updateAttesterManager"`
 */
export const useSimulateMessageTransmitterUpdateAttesterManager =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'updateAttesterManager',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"updatePauser"`
 */
export const useSimulateMessageTransmitterUpdatePauser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'updatePauser',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link messageTransmitterAbi}__ and `functionName` set to `"updateRescuer"`
 */
export const useSimulateMessageTransmitterUpdateRescuer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    functionName: 'updateRescuer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__
 */
export const useWatchMessageTransmitterEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"AttesterDisabled"`
 */
export const useWatchMessageTransmitterAttesterDisabledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'AttesterDisabled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"AttesterEnabled"`
 */
export const useWatchMessageTransmitterAttesterEnabledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'AttesterEnabled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"AttesterManagerUpdated"`
 */
export const useWatchMessageTransmitterAttesterManagerUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'AttesterManagerUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"MaxMessageBodySizeUpdated"`
 */
export const useWatchMessageTransmitterMaxMessageBodySizeUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'MaxMessageBodySizeUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"MessageReceived"`
 */
export const useWatchMessageTransmitterMessageReceivedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'MessageReceived',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"MessageSent"`
 */
export const useWatchMessageTransmitterMessageSentEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'MessageSent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 */
export const useWatchMessageTransmitterOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchMessageTransmitterOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"Pause"`
 */
export const useWatchMessageTransmitterPauseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'Pause',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"PauserChanged"`
 */
export const useWatchMessageTransmitterPauserChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'PauserChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"RescuerChanged"`
 */
export const useWatchMessageTransmitterRescuerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'RescuerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"SignatureThresholdUpdated"`
 */
export const useWatchMessageTransmitterSignatureThresholdUpdatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'SignatureThresholdUpdated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link messageTransmitterAbi}__ and `eventName` set to `"Unpause"`
 */
export const useWatchMessageTransmitterUnpauseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: messageTransmitterAbi,
    address: messageTransmitterAddress,
    eventName: 'Unpause',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__
 */
export const useReadTokenMessanger = /*#__PURE__*/ createUseReadContract({
  abi: tokenMessangerAbi,
  address: tokenMessangerAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"localMessageTransmitter"`
 */
export const useReadTokenMessangerLocalMessageTransmitter =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'localMessageTransmitter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"localMinter"`
 */
export const useReadTokenMessangerLocalMinter =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'localMinter',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"messageBodyVersion"`
 */
export const useReadTokenMessangerMessageBodyVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'messageBodyVersion',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"owner"`
 */
export const useReadTokenMessangerOwner = /*#__PURE__*/ createUseReadContract({
  abi: tokenMessangerAbi,
  address: tokenMessangerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"pendingOwner"`
 */
export const useReadTokenMessangerPendingOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'pendingOwner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"remoteTokenMessengers"`
 */
export const useReadTokenMessangerRemoteTokenMessengers =
  /*#__PURE__*/ createUseReadContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'remoteTokenMessengers',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"rescuer"`
 */
export const useReadTokenMessangerRescuer = /*#__PURE__*/ createUseReadContract(
  {
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'rescuer',
  },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__
 */
export const useWriteTokenMessanger = /*#__PURE__*/ createUseWriteContract({
  abi: tokenMessangerAbi,
  address: tokenMessangerAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useWriteTokenMessangerAcceptOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"addLocalMinter"`
 */
export const useWriteTokenMessangerAddLocalMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'addLocalMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"addRemoteTokenMessenger"`
 */
export const useWriteTokenMessangerAddRemoteTokenMessenger =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'addRemoteTokenMessenger',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"depositForBurn"`
 */
export const useWriteTokenMessangerDepositForBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'depositForBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"depositForBurnWithCaller"`
 */
export const useWriteTokenMessangerDepositForBurnWithCaller =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'depositForBurnWithCaller',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"handleReceiveMessage"`
 */
export const useWriteTokenMessangerHandleReceiveMessage =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'handleReceiveMessage',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"removeLocalMinter"`
 */
export const useWriteTokenMessangerRemoveLocalMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'removeLocalMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"removeRemoteTokenMessenger"`
 */
export const useWriteTokenMessangerRemoveRemoteTokenMessenger =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'removeRemoteTokenMessenger',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"replaceDepositForBurn"`
 */
export const useWriteTokenMessangerReplaceDepositForBurn =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'replaceDepositForBurn',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useWriteTokenMessangerRescueErc20 =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'rescueERC20',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteTokenMessangerTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"updateRescuer"`
 */
export const useWriteTokenMessangerUpdateRescuer =
  /*#__PURE__*/ createUseWriteContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'updateRescuer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__
 */
export const useSimulateTokenMessanger =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"acceptOwnership"`
 */
export const useSimulateTokenMessangerAcceptOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'acceptOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"addLocalMinter"`
 */
export const useSimulateTokenMessangerAddLocalMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'addLocalMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"addRemoteTokenMessenger"`
 */
export const useSimulateTokenMessangerAddRemoteTokenMessenger =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'addRemoteTokenMessenger',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"depositForBurn"`
 */
export const useSimulateTokenMessangerDepositForBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'depositForBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"depositForBurnWithCaller"`
 */
export const useSimulateTokenMessangerDepositForBurnWithCaller =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'depositForBurnWithCaller',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"handleReceiveMessage"`
 */
export const useSimulateTokenMessangerHandleReceiveMessage =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'handleReceiveMessage',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"removeLocalMinter"`
 */
export const useSimulateTokenMessangerRemoveLocalMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'removeLocalMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"removeRemoteTokenMessenger"`
 */
export const useSimulateTokenMessangerRemoveRemoteTokenMessenger =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'removeRemoteTokenMessenger',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"replaceDepositForBurn"`
 */
export const useSimulateTokenMessangerReplaceDepositForBurn =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'replaceDepositForBurn',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useSimulateTokenMessangerRescueErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'rescueERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateTokenMessangerTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link tokenMessangerAbi}__ and `functionName` set to `"updateRescuer"`
 */
export const useSimulateTokenMessangerUpdateRescuer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    functionName: 'updateRescuer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__
 */
export const useWatchTokenMessangerEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"DepositForBurn"`
 */
export const useWatchTokenMessangerDepositForBurnEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'DepositForBurn',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"LocalMinterAdded"`
 */
export const useWatchTokenMessangerLocalMinterAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'LocalMinterAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"LocalMinterRemoved"`
 */
export const useWatchTokenMessangerLocalMinterRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'LocalMinterRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"MintAndWithdraw"`
 */
export const useWatchTokenMessangerMintAndWithdrawEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'MintAndWithdraw',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"OwnershipTransferStarted"`
 */
export const useWatchTokenMessangerOwnershipTransferStartedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'OwnershipTransferStarted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchTokenMessangerOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"RemoteTokenMessengerAdded"`
 */
export const useWatchTokenMessangerRemoteTokenMessengerAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'RemoteTokenMessengerAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"RemoteTokenMessengerRemoved"`
 */
export const useWatchTokenMessangerRemoteTokenMessengerRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'RemoteTokenMessengerRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link tokenMessangerAbi}__ and `eventName` set to `"RescuerChanged"`
 */
export const useWatchTokenMessangerRescuerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: tokenMessangerAbi,
    address: tokenMessangerAddress,
    eventName: 'RescuerChanged',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__
 */
export const useReadUsdc = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"CANCEL_AUTHORIZATION_TYPEHASH"`
 */
export const useReadUsdcCancelAuthorizationTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'CANCEL_AUTHORIZATION_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadUsdcDomainSeparator = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"PERMIT_TYPEHASH"`
 */
export const useReadUsdcPermitTypehash = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'PERMIT_TYPEHASH',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"RECEIVE_WITH_AUTHORIZATION_TYPEHASH"`
 */
export const useReadUsdcReceiveWithAuthorizationTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'RECEIVE_WITH_AUTHORIZATION_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"TRANSFER_WITH_AUTHORIZATION_TYPEHASH"`
 */
export const useReadUsdcTransferWithAuthorizationTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'TRANSFER_WITH_AUTHORIZATION_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadUsdcAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"authorizationState"`
 */
export const useReadUsdcAuthorizationState =
  /*#__PURE__*/ createUseReadContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'authorizationState',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadUsdcBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"blacklister"`
 */
export const useReadUsdcBlacklister = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'blacklister',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"currency"`
 */
export const useReadUsdcCurrency = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'currency',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadUsdcDecimals = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"isBlacklisted"`
 */
export const useReadUsdcIsBlacklisted = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'isBlacklisted',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"isMinter"`
 */
export const useReadUsdcIsMinter = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'isMinter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"masterMinter"`
 */
export const useReadUsdcMasterMinter = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'masterMinter',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"minterAllowance"`
 */
export const useReadUsdcMinterAllowance = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'minterAllowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"name"`
 */
export const useReadUsdcName = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadUsdcNonces = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"owner"`
 */
export const useReadUsdcOwner = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"paused"`
 */
export const useReadUsdcPaused = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'paused',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"pauser"`
 */
export const useReadUsdcPauser = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'pauser',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"rescuer"`
 */
export const useReadUsdcRescuer = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'rescuer',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"symbol"`
 */
export const useReadUsdcSymbol = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadUsdcTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"version"`
 */
export const useReadUsdcVersion = /*#__PURE__*/ createUseReadContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'version',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__
 */
export const useWriteUsdc = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteUsdcApprove = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"blacklist"`
 */
export const useWriteUsdcBlacklist = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'blacklist',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"burn"`
 */
export const useWriteUsdcBurn = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"cancelAuthorization"`
 */
export const useWriteUsdcCancelAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'cancelAuthorization',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"configureMinter"`
 */
export const useWriteUsdcConfigureMinter = /*#__PURE__*/ createUseWriteContract(
  { abi: usdcAbi, address: usdcAddress, functionName: 'configureMinter' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteUsdcDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteUsdcIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteUsdcInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"initializeV2"`
 */
export const useWriteUsdcInitializeV2 = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'initializeV2',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"initializeV2_1"`
 */
export const useWriteUsdcInitializeV2_1 = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'initializeV2_1',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteUsdcMint = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"pause"`
 */
export const useWriteUsdcPause = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteUsdcPermit = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"receiveWithAuthorization"`
 */
export const useWriteUsdcReceiveWithAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'receiveWithAuthorization',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"removeMinter"`
 */
export const useWriteUsdcRemoveMinter = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'removeMinter',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useWriteUsdcRescueErc20 = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'rescueERC20',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteUsdcTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteUsdcTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteUsdcTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferWithAuthorization"`
 */
export const useWriteUsdcTransferWithAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'transferWithAuthorization',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"unBlacklist"`
 */
export const useWriteUsdcUnBlacklist = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'unBlacklist',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"unpause"`
 */
export const useWriteUsdcUnpause = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updateBlacklister"`
 */
export const useWriteUsdcUpdateBlacklister =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'updateBlacklister',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updateMasterMinter"`
 */
export const useWriteUsdcUpdateMasterMinter =
  /*#__PURE__*/ createUseWriteContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'updateMasterMinter',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updatePauser"`
 */
export const useWriteUsdcUpdatePauser = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'updatePauser',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updateRescuer"`
 */
export const useWriteUsdcUpdateRescuer = /*#__PURE__*/ createUseWriteContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'updateRescuer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__
 */
export const useSimulateUsdc = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateUsdcApprove = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"blacklist"`
 */
export const useSimulateUsdcBlacklist = /*#__PURE__*/ createUseSimulateContract(
  { abi: usdcAbi, address: usdcAddress, functionName: 'blacklist' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"burn"`
 */
export const useSimulateUsdcBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"cancelAuthorization"`
 */
export const useSimulateUsdcCancelAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'cancelAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"configureMinter"`
 */
export const useSimulateUsdcConfigureMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'configureMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateUsdcDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateUsdcIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateUsdcInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"initializeV2"`
 */
export const useSimulateUsdcInitializeV2 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'initializeV2',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"initializeV2_1"`
 */
export const useSimulateUsdcInitializeV2_1 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'initializeV2_1',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateUsdcMint = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"pause"`
 */
export const useSimulateUsdcPause = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'pause',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateUsdcPermit = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"receiveWithAuthorization"`
 */
export const useSimulateUsdcReceiveWithAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'receiveWithAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"removeMinter"`
 */
export const useSimulateUsdcRemoveMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'removeMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"rescueERC20"`
 */
export const useSimulateUsdcRescueErc20 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'rescueERC20',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateUsdcTransfer = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateUsdcTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateUsdcTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"transferWithAuthorization"`
 */
export const useSimulateUsdcTransferWithAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'transferWithAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"unBlacklist"`
 */
export const useSimulateUsdcUnBlacklist =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'unBlacklist',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"unpause"`
 */
export const useSimulateUsdcUnpause = /*#__PURE__*/ createUseSimulateContract({
  abi: usdcAbi,
  address: usdcAddress,
  functionName: 'unpause',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updateBlacklister"`
 */
export const useSimulateUsdcUpdateBlacklister =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'updateBlacklister',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updateMasterMinter"`
 */
export const useSimulateUsdcUpdateMasterMinter =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'updateMasterMinter',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updatePauser"`
 */
export const useSimulateUsdcUpdatePauser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'updatePauser',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link usdcAbi}__ and `functionName` set to `"updateRescuer"`
 */
export const useSimulateUsdcUpdateRescuer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: usdcAbi,
    address: usdcAddress,
    functionName: 'updateRescuer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__
 */
export const useWatchUsdcEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchUsdcApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"AuthorizationCanceled"`
 */
export const useWatchUsdcAuthorizationCanceledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'AuthorizationCanceled',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"AuthorizationUsed"`
 */
export const useWatchUsdcAuthorizationUsedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'AuthorizationUsed',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Blacklisted"`
 */
export const useWatchUsdcBlacklistedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'Blacklisted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"BlacklisterChanged"`
 */
export const useWatchUsdcBlacklisterChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'BlacklisterChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Burn"`
 */
export const useWatchUsdcBurnEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
  eventName: 'Burn',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"MasterMinterChanged"`
 */
export const useWatchUsdcMasterMinterChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'MasterMinterChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Mint"`
 */
export const useWatchUsdcMintEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: usdcAbi,
  address: usdcAddress,
  eventName: 'Mint',
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"MinterConfigured"`
 */
export const useWatchUsdcMinterConfiguredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'MinterConfigured',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"MinterRemoved"`
 */
export const useWatchUsdcMinterRemovedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'MinterRemoved',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchUsdcOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Pause"`
 */
export const useWatchUsdcPauseEvent = /*#__PURE__*/ createUseWatchContractEvent(
  { abi: usdcAbi, address: usdcAddress, eventName: 'Pause' },
)

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"PauserChanged"`
 */
export const useWatchUsdcPauserChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'PauserChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"RescuerChanged"`
 */
export const useWatchUsdcRescuerChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'RescuerChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchUsdcTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"UnBlacklisted"`
 */
export const useWatchUsdcUnBlacklistedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'UnBlacklisted',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link usdcAbi}__ and `eventName` set to `"Unpause"`
 */
export const useWatchUsdcUnpauseEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: usdcAbi,
    address: usdcAddress,
    eventName: 'Unpause',
  })
