/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  TuringHelperFactory,
  TuringHelperFactoryInterface,
} from "../TuringHelperFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "bobaToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "turingImplementation_",
        type: "address",
      },
      {
        internalType: "address",
        name: "turingCredit_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract TuringHelper",
        name: "proxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositedBoba",
        type: "uint256",
      },
    ],
    name: "TuringHelperDeployed",
    type: "event",
  },
  {
    inputs: [],
    name: "bobaToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "turingImplementation_",
        type: "address",
      },
    ],
    name: "changeTuringHelperImpl",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "permittedCallers",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amountBoba",
        type: "uint256",
      },
    ],
    name: "deployMinimal",
    outputs: [
      {
        internalType: "contract TuringHelper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "turingCredit",
    outputs: [
      {
        internalType: "contract ITuringCredit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "turingImplementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class TuringHelperFactory__factory {
  static readonly abi = _abi;
  static createInterface(): TuringHelperFactoryInterface {
    return new utils.Interface(_abi) as TuringHelperFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TuringHelperFactory {
    return new Contract(address, _abi, signerOrProvider) as TuringHelperFactory;
  }
}
