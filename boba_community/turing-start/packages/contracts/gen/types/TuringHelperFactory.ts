/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface TuringHelperFactoryInterface extends utils.Interface {
  functions: {
    "bobaToken()": FunctionFragment;
    "changeTuringHelperImpl(address)": FunctionFragment;
    "deployMinimal(address[],uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "turingCredit()": FunctionFragment;
    "turingImplementation()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bobaToken"
      | "changeTuringHelperImpl"
      | "deployMinimal"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "turingCredit"
      | "turingImplementation"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "bobaToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeTuringHelperImpl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "deployMinimal",
    values: [string[], BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "turingCredit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "turingImplementation",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "bobaToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeTuringHelperImpl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "deployMinimal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "turingCredit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "turingImplementation",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "TuringHelperDeployed(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TuringHelperDeployed"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TuringHelperDeployedEventObject {
  owner: string;
  proxy: string;
  depositedBoba: BigNumber;
}
export type TuringHelperDeployedEvent = TypedEvent<
  [string, string, BigNumber],
  TuringHelperDeployedEventObject
>;

export type TuringHelperDeployedEventFilter =
  TypedEventFilter<TuringHelperDeployedEvent>;

export interface TuringHelperFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TuringHelperFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    bobaToken(overrides?: CallOverrides): Promise<[string]>;

    changeTuringHelperImpl(
      turingImplementation_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployMinimal(
      permittedCallers: string[],
      amountBoba: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    turingCredit(overrides?: CallOverrides): Promise<[string]>;

    turingImplementation(overrides?: CallOverrides): Promise<[string]>;
  };

  bobaToken(overrides?: CallOverrides): Promise<string>;

  changeTuringHelperImpl(
    turingImplementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployMinimal(
    permittedCallers: string[],
    amountBoba: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  turingCredit(overrides?: CallOverrides): Promise<string>;

  turingImplementation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    bobaToken(overrides?: CallOverrides): Promise<string>;

    changeTuringHelperImpl(
      turingImplementation_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    deployMinimal(
      permittedCallers: string[],
      amountBoba: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    turingCredit(overrides?: CallOverrides): Promise<string>;

    turingImplementation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TuringHelperDeployed(address,address,uint256)"(
      owner?: string | null,
      proxy?: null,
      depositedBoba?: null
    ): TuringHelperDeployedEventFilter;
    TuringHelperDeployed(
      owner?: string | null,
      proxy?: null,
      depositedBoba?: null
    ): TuringHelperDeployedEventFilter;
  };

  estimateGas: {
    bobaToken(overrides?: CallOverrides): Promise<BigNumber>;

    changeTuringHelperImpl(
      turingImplementation_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployMinimal(
      permittedCallers: string[],
      amountBoba: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    turingCredit(overrides?: CallOverrides): Promise<BigNumber>;

    turingImplementation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    bobaToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeTuringHelperImpl(
      turingImplementation_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployMinimal(
      permittedCallers: string[],
      amountBoba: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    turingCredit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    turingImplementation(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
