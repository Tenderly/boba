import { Box, Fade, Typography, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckIcon from '@mui/icons-material/Check';
import Button from 'components/button/Button';
import React, { useState, useEffect } from 'react'
import EthereumIcon from 'components/icons/EthereumIcon.js'
import * as S from './ChainSwitcher.styles'
import { useDispatch } from 'react-redux';
import { setupAppChain } from 'actions/setupAction';
import { selectAppChain } from 'selectors/setupSelector';
import { useSelector } from 'react-redux';
import { getAllChains } from 'util/chainsConfig';

function ChainSwitcher({}) {

  const [ anchorEl, setAnchorEl ] = React.useState(null);
  const [ chains, setChains ] = React.useState([]);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const appChain = useSelector(selectAppChain())


  useEffect(() => {
    const allChains = getAllChains();
    setChains(allChains);
  }, [])

  const setChain = (chain) => {
    dispatch(setupAppChain(chain));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box borderRadius={3}>
        <Button
          style={{
            whiteSpace: 'nowrap'
          }}
          color='primary'
          variant='outlined'
          onClick={handleClick}
        >
          {appChain}
          <KeyboardArrowDownIcon />
        </Button>
        <S.ChainSwitcherContainer
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {chains.map((chain) => [
            <MenuItem
              divider={true}
              key={chain.key} onClick={() => setChain(chain.key)}>
              <Box display="flex" justifyContent="space-around" gap={2} >
                <Box display="flex" justifyContent="space-around" gap={1}>
                  <EthereumIcon />
                  <Box display="flex" flexDirection="column" justifyContent="center" >
                    <Typography variant="body2" style={{ whiteSpace: 'nowrap' }}>
                      {chain.title}
                    </Typography>
                    {/* <Typography variant="body4" sx={{ opacity: 0.3 }} style={{ whiteSpace: 'nowrap' }}>
                      not connected
                    </Typography> */}
                  </Box>
                </Box>
                {appChain == chain.key ? <CheckIcon /> : null}
              </Box>
            </MenuItem>

          ])}
        </S.ChainSwitcherContainer>
      </Box>
    </>
  )

}

export default ChainSwitcher;
