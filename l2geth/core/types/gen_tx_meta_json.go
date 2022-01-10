// Code generated by github.com/fjl/gencodec. DO NOT EDIT.

package types

import (
	"encoding/json"
	"errors"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/log"
)

// MarshalJSON marshals as JSON.
func (t TransactionMeta) MarshalJSON() ([]byte, error) {
	log.Debug("TURING: (t TransactionMeta) MarshalJSON()", "t", t) 
	type TransactionMeta struct {
		L1BlockNumber   *big.Int        `json:"l1BlockNumber"`
		L1Timestamp     uint64          `json:"l1Timestamp"`
		L1Turing        []byte          `json:"l1Turing"        gencodec:"required"`
		L1MessageSender *common.Address `json:"l1MessageSender" gencodec:"required"`
		QueueOrigin     QueueOrigin     `json:"queueOrigin"     gencodec:"required"`
		Index           *uint64         `json:"index"           gencodec:"required"`
		QueueIndex      *uint64         `json:"queueIndex"      gencodec:"required"`
		RawTransaction  []byte          `json:"rawTransaction"  gencodec:"required"`
	}
	var enc TransactionMeta
	enc.L1BlockNumber = t.L1BlockNumber
	enc.L1Timestamp = t.L1Timestamp
	enc.L1Turing = t.L1Turing
	enc.L1MessageSender = t.L1MessageSender
	enc.QueueOrigin = t.QueueOrigin
	enc.Index = t.Index
	enc.QueueIndex = t.QueueIndex
	enc.RawTransaction = t.RawTransaction
	return json.Marshal(&enc)
}

// UnmarshalJSON unmarshals from JSON.
func (t *TransactionMeta) UnmarshalJSON(input []byte) error {
	type TransactionMeta struct {
		L1BlockNumber   *big.Int        `json:"l1BlockNumber"`
		L1Timestamp     *uint64         `json:"l1Timestamp"`
		L1Turing        []byte          `json:"l1Turing"        gencodec:"required"`
		L1MessageSender *common.Address `json:"l1MessageSender" gencodec:"required"`
		QueueOrigin     *QueueOrigin    `json:"queueOrigin"     gencodec:"required"`
		Index           *uint64         `json:"index"           gencodec:"required"`
		QueueIndex      *uint64         `json:"queueIndex"      gencodec:"required"`
		RawTransaction  []byte          `json:"rawTransaction"  gencodec:"required"`
	}
	log.Debug("TURING: (t TransactionMeta) UnmarshalJSON()", "input", input) 
	var dec TransactionMeta
	if err := json.Unmarshal(input, &dec); err != nil {
		return err
	}
	if dec.L1BlockNumber != nil {
		t.L1BlockNumber = dec.L1BlockNumber
	}
	if dec.L1Timestamp != nil {
		t.L1Timestamp = *dec.L1Timestamp
	}
	if dec.L1Turing == nil {
		return errors.New("missing required field 'l1Turing' for TransactionMeta")
	}
	t.L1Turing = dec.L1Turing
	if dec.L1MessageSender == nil {
		return errors.New("missing required field 'l1MessageSender' for TransactionMeta")
	}
	t.L1MessageSender = dec.L1MessageSender
	if dec.QueueOrigin == nil {
		return errors.New("missing required field 'queueOrigin' for TransactionMeta")
	}
	t.QueueOrigin = *dec.QueueOrigin
	if dec.Index == nil {
		return errors.New("missing required field 'index' for TransactionMeta")
	}
	t.Index = dec.Index
	if dec.QueueIndex == nil {
		return errors.New("missing required field 'queueIndex' for TransactionMeta")
	}
	t.QueueIndex = dec.QueueIndex
	if dec.RawTransaction == nil {
		return errors.New("missing required field 'rawTransaction' for TransactionMeta")
	}
	t.RawTransaction = dec.RawTransaction
	return nil
}
