import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Box, Fade, Link, Slider, Typography, useMediaQuery, useTheme } from '@mui/material'
import { openModal } from 'actions/uiAction'
import { settle_v0, settle_v1 } from 'actions/networkAction'
import Button from 'components/button/Button'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLookupPrice } from 'selectors/lookupSelector'
import { amountToUsd, logAmount } from 'util/amountConvert'
import { getCoinImage } from 'util/coinImage'
import * as S from './TokenList.styles'

function TokenList({
  token,
  chain,
  networkLayer,
  disabled,
  loading
}) {
  const [ dropDownBox, setDropDownBox ] = useState(false)

  const [ sliderValue_v1, setSliderValue_v1 ] = useState(55)

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const dispatch = useDispatch();
  const enabled = (networkLayer === chain) ? true : false
  const logo = getCoinImage(token.symbol)
  const lookupPrice = useSelector(selectLookupPrice)
  const amountInNumber = token.symbol === 'ETH' ?
  Number(logAmount(token.balance, token.decimals, 3)):
  Number(logAmount(token.balance, token.decimals, 2))

  const amount = token.symbol === 'ETH' ?
    Number(logAmount(token.balance, token.decimals, 3)).toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 }) :
    Number(logAmount(token.balance, token.decimals, 2)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  let WAGMI_v1 = 1 + (sliderValue_v1 / 11.1)
  if(sliderValue_v1 === 0) {
    WAGMI_v1 = 0.5
  }
  const TVL_v1 = Number(69 + (sliderValue_v1 / 100) * 305)

  const handleModalClick = (modalName, token, fast) => {
    dispatch(openModal(modalName, token, fast))
  }

  const handleSliderChange_v1 = (e) => {
    setSliderValue_v1(e.target.value)
  }

  async function doSettle_v0 () {
    await dispatch(settle_v0())
  }

  async function doSettle_v1 () {
    //await dispatch(settle_v1())
  }

  async function doSettle_v2 () {
    //await dispatch(settle_v2())
  }

  async function doSettle_v2OLO () {
    //await dispatch(settle_v2OLO())
  }

  if (isMobile) {
    return (
      <S.Content>
        <S.TableBody>
          <S.TableCell sx={{ gap: "10px" }}>
            <img src={logo} alt="logo" width={42} height={42} />

            <S.TextTableCell variant="body2" component="div">
              {token.symbol}
            </S.TextTableCell>
          </S.TableCell>
          <S.TableCell >
            <S.TextTableCell
              variant="body2"
              component="div"
              sx={{ fontWeight: '700' }}
            >
              {amount}
            </S.TextTableCell>
          </S.TableCell>
          <S.TableCell >
            <S.TextTableCell
              variant="body2"
              component="div"
              sx={{ fontWeight: '700' }}
            >
              {`$${amountToUsd(amountInNumber, lookupPrice, token).toFixed(2)}`}
            </S.TextTableCell>
          </S.TableCell>
          <S.TableCell
            onClick={() => {
              setDropDownBox(!dropDownBox);
            }}
            isMobile={isMobile}>
            <S.TextTableCell
              variant="body2"
              component="div"
              sx={{ fontWeight: '700' }}
            >
              <Box sx={{ display: "flex", opacity: !enabled ? "0.4" : "1.0", transform: dropDownBox ? "rotate(-180deg)" : "" }}>
                <ExpandMoreIcon sx={{ width: "12px" }} />
              </Box>
            </S.TextTableCell>
          </S.TableCell>
        </S.TableBody>
        {isMobile && dropDownBox ? (
          <Fade in={dropDownBox}>
            <S.DropdownWrapper>

              {enabled && chain === 'L1' &&
                <>
                  <Button
                    onClick={() => { handleModalClick('depositModal', token, false) }}
                    color='neutral'
                    variant="outlined"
                    disabled={disabled}
                    tooltip="Classic Bridge to Boba L2. This option is always available but is generally more expensive than the swap-based system ('Fast Bridge')."
                    fullWidth
                  >
                    Bridge to L2
                  </Button>

                  <Button
                    onClick={() => { handleModalClick('depositModal', token, true) }}
                    color='primary'
                    disabled={disabled}
                    variant="contained"
                    tooltip="A swap-based bridge to Boba L2. This option is only available if the pool balance is sufficient."
                    fullWidth
                  >
                    Fast Bridge to L2
                  </Button>
                </>
              }

              {enabled && chain === 'L2' && 
                token.symbol !== 'OLO' && 
                token.symbol !== 'xBOBA' && 
                token.symbol !== 'WAGMIv0' && 
                token.symbol !== 'WAGMIv1' &&
                token.symbol !== 'WAGMIv2' && 
                token.symbol !== 'WAGMIv2-Oolong' &&
                <>
                  <Button
                    onClick={() => { handleModalClick('exitModal', token, false) }}
                    variant="outlined"
                    disabled={disabled}
                    tooltip="Classic Bridge to L1. This option is always available but has a 7 day delay before receiving your funds."
                    fullWidth
                  >
                    Bridge to L1
                  </Button>

                  <Button
                    onClick={() => { handleModalClick('exitModal', token, true) }}
                    variant="outlined"
                    disabled={disabled}
                    tooltip="A swap-based bridge to L1 without a 7 day waiting period. There is a fee, however, and this option is only available if the pool balance is sufficient."
                    fullWidth
                  >
                    Fast Bridge to L1
                  </Button>

                  <Button
                    onClick={() => { handleModalClick('transferModal', token, false) }}
                    variant="contained"
                    color="primary"
                    disabled={disabled}
                    tooltip="Transfer funds from one L2 account to another L2 account."
                    fullWidth
                  >
                    Transfer
                  </Button>
                </>
              }

              {enabled && chain === 'L2' && token.symbol === 'OLO' &&
                <>
                  <Link
                    color="inherit"
                    variant="body2"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://cbridge.celer.network/#/transfer'}
                  >
                    CELER BRIDGE
                  </Link>
                  <Button
                    onClick={() => { handleModalClick('transferModal', token, false) }}
                    variant="contained"
                    color="primary"
                    disabled={disabled}
                    tooltip="Transfer funds from one L2 account to another L2 account."
                    fullWidth
                  >
                    Transfer
                  </Button>
                </>
              }

              {enabled && chain === 'L2' && token.symbol === 'WAGMIv0' &&
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <Typography variant="body3" component="p" >
                    Settled for 1 BOBA
                  </Typography>
                  <Button
                    onClick={() => { doSettle_v0() }}
                    variant="contained"
                    color="primary"
                    disabled={false}
                    tooltip="Settle your WAGMv0 long options."
                    fullWidth
                  >
                    Settle
                  </Button>
                </div>
              }

              {enabled && chain === 'L2' && token.symbol === 'WAGMIv1' &&
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <Typography variant="body3" component="p" >
                    If TVL = {TVL_v1.toFixed(0)}k ETH, each option settles for {WAGMI_v1.toFixed(1)} BOBA
                  </Typography>
                  <Slider
                    min={0}
                    max={100}
                    value={sliderValue_v1}
                    onChange={handleSliderChange_v1}
                    aria-label="WAGMIv1"
                  />
                  <Button
                    onClick={() => { doSettle_v1() }}
                    variant="contained"
                    disabled={true}
                    tooltip="Settle your WAGMv1 long options."
                    fullWidth
                  >
                    Settle
                  </Button>
                </div>
              }
              {enabled && chain === 'L2' && token.symbol === 'WAGMIv2' &&
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <Typography variant="body3" component="p" >
                    Settles for 1 BOBA
                  </Typography>
                  <Button
                    onClick={() => { doSettle_v2() }}
                    variant="contained"
                    disabled={true}
                    tooltip="Settle your WAGMv2 long options."
                    fullWidth
                  >
                    Settle
                  </Button>
                </div>
              }
              {enabled && chain === 'L2' && token.symbol === 'WAGMIv2-Oolong' &&
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  flexDirection: 'column',
                  gap: '10px',
                }}>
                  <Typography variant="body3" component="p" >
                    If Oolong volume exceeds &#36;25mm in April, settles for 2 BOBA, otherwise 1 BOBA
                  </Typography>
                  <Button
                    onClick={() => { doSettle_v2OLO() }}
                    variant="contained"
                    disabled={true}
                    tooltip="Settle your WAGMv2-Oolong long options."
                    fullWidth
                  >
                    Settle
                  </Button>
                </div>
              }
            </S.DropdownWrapper>
          </Fade>
        ) : null}
      </S.Content>
    )
  }

  return (
    <S.Content>
      <S.TableBody>
        <S.TableCell sx={{ gap: "10px", justifyContent: "flex-start" }}>
          <img src={logo} alt="logo" width={42} height={42} />
          <S.TextTableCell variant="body2" component="div">
            {token.symbol}
          </S.TextTableCell>
        </S.TableCell>
        <S.TableCell sx={{ justifyContent: "flex-start" }}>
          <S.TextTableCell
            variant="body2"
            component="div"
            sx={{ fontWeight: '700' }}
          >
            {amount}
          </S.TextTableCell>
        </S.TableCell>
        <S.TableCell sx={{ justifyContent: "flex-start" }}>
          <S.TextTableCell
            variant="body2"
            component="div"
            sx={{ fontWeight: '700' }}
          >
            {`$${amountToUsd(amountInNumber, lookupPrice, token).toFixed(2)}`}
          </S.TextTableCell>
        </S.TableCell>
        <S.TableCell
          sx={{
            gap: '5px',
            width: '40%'
          }}
        >
          {enabled && chain === 'L1' &&
            <>
              <Button
                onClick={() => { handleModalClick('depositModal', token, false) }}
                color='neutral'
                variant="outlined"
                disabled={disabled}
                tooltip="Classic Bridge to Boba L2. This option is always available but is generally more expensive than the swap-based system ('Fast Bridge')."
                fullWidth
              >
                Bridge to L2
              </Button>

              <Button
                onClick={() => { handleModalClick('depositModal', token, true) }}
                color='primary'
                disabled={disabled}
                variant="outlined"
                tooltip="A swap-based bridge to Boba L2. This option is only available if the pool balance is sufficient."
                fullWidth
              >
                Fast Bridge to L2
              </Button>
            </>
          }
          {enabled && chain === 'L2' && 
            token.symbol !== 'OLO' && 
            token.symbol !== 'xBOBA' && 
            token.symbol !== 'WAGMIv0' && 
            token.symbol !== 'WAGMIv1' &&
            token.symbol !== 'WAGMIv2' &&
            token.symbol !== 'WAGMIv2-Oolong' &&
            <>
              <Button
                onClick={() => { handleModalClick('exitModal', token, false) }}
                variant="outlined"
                disabled={disabled}
                tooltip="Classic Bridge to L1. This option is always available but has a 7 day delay before receiving your funds."
                fullWidth
              >
                Bridge to L1
              </Button>
              <Button
                onClick={() => { handleModalClick('exitModal', token, true) }}
                variant="outlined"
                disabled={disabled}
                tooltip="A swap-based bridge to L1 without a 7 day waiting period. There is a fee, however, and this option is only available if the pool balance is sufficient."
                fullWidth
                sx={{ whiteSpace: 'nowrap' }}
              >
                Fast Bridge to L1
              </Button>
              <Button
                onClick={() => { handleModalClick('transferModal', token, false) }}
                variant="contained"
                color="primary"
                disabled={disabled}
                tooltip="Transfer funds from one L2 account to another L2 account."
                fullWidth
              >
                Transfer
              </Button>
            </>
          }
          {enabled && chain === 'L2' && token.symbol === 'OLO' &&
            <>
              <Link
                color="inherit"
                variant="body2"
                target="_blank"
                rel="noopener noreferrer"
                href={'https://cbridge.celer.network/#/transfer'}
              >
                CELER BRIDGE
              </Link>
              <Button
                onClick={() => { handleModalClick('transferModal', token, false) }}
                variant="contained"
                color="primary"
                disabled={disabled}
                tooltip="Transfer funds from one L2 account to another L2 account."
                fullWidth
              >
                Transfer
              </Button>
            </>
          }
          {enabled && chain === 'L2' && token.symbol === 'WAGMIv0' &&
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px',
              }}>
                <Typography variant="body3" component="p" style={{width: '190px', textAlign: 'left'}}>
                  Settled for 1 BOBA
                </Typography>
                <Button
                  onClick={() => { doSettle_v0() }}
                  variant="contained"
                  color="primary"
                  disabled={false}
                  tooltip="Settle your WAGMIv0 long options"
                  fullWidth
                >
                  Settle
                </Button>
              </div>
            </div>
          }
          {enabled && chain === 'L2' && token.symbol === 'WAGMIv1' &&
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <Slider
                min={0}
                max={100}
                value={sliderValue_v1}
                onChange={handleSliderChange_v1}
                aria-label="WAGMIv1"
              />
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px',
              }}>
                <Typography variant="body3" component="p" style={{width: '190px', textAlign: 'left'}}>
                  If TVL = {TVL_v1.toFixed(0)}k ETH each option<br/> settles for {WAGMI_v1.toFixed(1)} BOBA
                </Typography>
                <Button
                  onClick={() => { doSettle_v1() }}
                  variant="contained"
                  color="primary"
                  disabled={true}
                  tooltip="Settle your WAGMIv1 long options"
                  fullWidth
                >
                  Settle
                </Button>
              </div>
            </div>
          }
          {enabled && chain === 'L2' && token.symbol === 'WAGMIv2' &&
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px',
              }}>
                <Typography variant="body3" component="p" style={{width: '190px', textAlign: 'left'}}>
                  Settles for 1 BOBA
                </Typography>
                <Button
                  onClick={() => { doSettle_v2() }}
                  variant="contained"
                  color="primary"
                  disabled={true}
                  tooltip="Settle your WAGMIv2 long options"
                  fullWidth
                >
                  Settle
                </Button>
              </div>
            </div>
          }
          {enabled && chain === 'L2' && token.symbol === 'WAGMIv2-Oolong' &&
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexDirection: 'column',
              gap: '10px',
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
                gap: '10px',
              }}>
                <Typography variant="body3" component="p" style={{width: '190px', textAlign: 'left'}}>
                  If Oolong volume exceeds &#36;25mm in April, settles for 2 BOBA, otherwise 1 BOBA
                </Typography>
                <Button
                  onClick={() => { doSettle_v2OLO() }}
                  variant="contained"
                  color="primary"
                  disabled={true}
                  tooltip="Settle your WAGMIv2-Oolong long options"
                  fullWidth
                >
                  Settle
                </Button>
              </div>
            </div>
          }
          
        </S.TableCell>
      </S.TableBody>
    </S.Content>
  )
}

export default React.memo(TokenList)
