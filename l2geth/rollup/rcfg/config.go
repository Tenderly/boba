package rcfg

import (
	"github.com/tenderly/boba/l2geth/common"
	"math/big"
)

var (
	// UsingOVM is used to enable or disable functionality necessary for the OVM.
	UsingOVM = true
	// OvmTuringCreditAddress is turing credit contract address
	OvmTuringCreditAddress = common.HexToAddress("0xF8D2f1b0292C0Eeef80D8F47661A9DaCDB4b23bf")
	// OvmBobaGasPricOracle is boba gas price oracle
	OvmBobaGasPricOracle = common.HexToAddress("0xeE06ee2F239d2ab11792D77f3C347d919ddA0d51")
	// OvmL2BobaToken is boba token address
	OvmL2BobaToken = common.HexToAddress("0xa18bF3994C0Cc6E3b63ac420308E5383f53120D7")
)

var (
	// l2GasPriceSlot refers to the storage slot that the L2 gas price is stored
	// in in the OVM_GasPriceOracle predeploy
	L2GasPriceSlot = common.BigToHash(big.NewInt(1))
	// l1GasPriceSlot refers to the storage slot that the L1 gas price is stored
	// in in the OVM_GasPriceOracle predeploy
	L1GasPriceSlot = common.BigToHash(big.NewInt(2))
	// l2GasPriceOracleOwnerSlot refers to the storage slot that the owner of
	// the OVM_GasPriceOracle is stored in
	L2GasPriceOracleOwnerSlot = common.BigToHash(big.NewInt(0))
	// l2GasPriceOracleAddress is the address of the OVM_GasPriceOracle
	// predeploy
	L2GasPriceOracleAddress = common.HexToAddress("0x420000000000000000000000000000000000000F")
	// OverheadSlot refers to the storage slot in the OVM_GasPriceOracle that
	// holds the per transaction overhead. This is added to the L1 cost portion
	// of the fee
	OverheadSlot = common.BigToHash(big.NewInt(3))
	// ScalarSlot refers to the storage slot in the OVM_GasPriceOracle that
	// holds the transaction fee scalar. This value is scaled upwards by
	// the number of decimals
	ScalarSlot = common.BigToHash(big.NewInt(4))
	// DecimalsSlot refers to the storage slot in the OVM_GasPriceOracle that
	// holds the number of decimals in the fee scalar
	DecimalsSlot = common.BigToHash(big.NewInt(5))
	// Address of the Turing credit contract
)
