package proxyd

import (
	"encoding/json"
	"io"
	"io/ioutil"
)

type RPCReq struct {
	JSONRPC string           `json:"jsonrpc"`
	Method  string           `json:"method"`
	Params  json.RawMessage  `json:"params"`
	ID      *json.RawMessage `json:"id"`
}

type RPCRes struct {
	JSONRPC string           `json:"jsonrpc"`
	Result  interface{}      `json:"result,omitempty"`
	Error   *RPCErr          `json:"error,omitempty"`
	ID      *json.RawMessage `json:"id"`
}

func (r *RPCRes) IsError() bool {
	return r.Error != nil
}

type RPCErr struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}

func (r *RPCErr) Error() string {
	return r.Message
}

func isBatch(msg []byte) bool {
	return string(msg)[0] == '['
}

func ParseRPCReq(r io.Reader) (*RPCReq, error) {
	body, err := ioutil.ReadAll(r)
	if err != nil {
		return nil, wrapErr(err, "error reading request body")
	}

	if isBatch(body) {
		var arr []*RPCReq
		err := json.Unmarshal(body, &arr)
		if err != nil {
			return nil, ErrParseErr
		}
		if len(arr) == 1 {
			return arr[0], nil
		}
		return nil, ErrInvalidBatch
	} else {
		req := new(RPCReq)
		if err := json.Unmarshal(body, req); err != nil {
			return nil, ErrParseErr
		}

		if req.JSONRPC != JSONRPCVersion {
			return nil, ErrInvalidRequest
		}

		if req.Method == "" {
			return nil, ErrInvalidRequest
		}

		return req, nil
	}
}

func ParseRPCRes(r io.Reader) (*RPCRes, error) {
	body, err := ioutil.ReadAll(r)
	if err != nil {
		return nil, wrapErr(err, "error reading RPC response")
	}

	res := new(RPCRes)
	if err := json.Unmarshal(body, res); err != nil {
		return nil, wrapErr(err, "error unmarshaling RPC response")
	}

	return res, nil
}

func NewRPCErrorRes(id *json.RawMessage, err error) *RPCRes {
	var rpcErr *RPCErr
	if rr, ok := err.(*RPCErr); ok {
		rpcErr = rr
	} else {
		rpcErr = &RPCErr{
			Code:    JSONRPCErrorInternal,
			Message: err.Error(),
		}
	}

	return &RPCRes{
		JSONRPC: JSONRPCVersion,
		Error:   rpcErr,
		ID:      id,
	}
}
