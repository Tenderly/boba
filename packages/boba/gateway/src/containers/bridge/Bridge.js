import { Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectActiveNetwork } from 'selectors/networkSelector'
import { selectAccountEnabled } from 'selectors/setupSelector'
import BobaBridge from './bobaBridge/bobaBridge'
import * as S from './Bridge.styles'

function BridgeContainer() {

  const theme = useTheme()
  const accountEnabled = useSelector(selectAccountEnabled())
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const activeNetwork = useSelector(selectActiveNetwork())

  return (
    <S.PageContainer>
      <S.ContentWrapper>
        {
          isMobile && accountEnabled ?
            null
            : <S.TitleContainer>
              <Typography variant="h2"
              > Transfer
                <br />
                tokens between {activeNetwork} and
                <br />
                <Typography
                  variant="h2"
                  component="span"
                  sx={{
                    background: '-webkit-linear-gradient(269deg, #CBFE00 15.05%, #1CD6D1 79.66%)',
                    'WebkitBackgroundClip': 'text',
                    'WebkitTextFillColor': 'transparent'
                  }}
                >
                  Boba network!
                </Typography>
              </Typography>
            </S.TitleContainer>
        }
        <S.Content>
          <BobaBridge />
        </S.Content>
      </S.ContentWrapper>
    </S.PageContainer>
  )
}

export default React.memo(BridgeContainer);
