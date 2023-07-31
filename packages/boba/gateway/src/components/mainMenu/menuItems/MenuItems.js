import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { intersection } from 'util/lodash';
import { selectActiveNetwork } from 'selectors'
import { MENU_LIST } from './menu.config'
import { useLocation } from 'react-router-dom'

import * as S from './MenuItems.styles'
import { PAGES_BY_NETWORK } from 'util/constant'
import { useTheme, useMediaQuery } from '@mui/material'

const MenuItems = ({
  setOpen
}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuList = MENU_LIST;

  const network = useSelector(selectActiveNetwork())
  const [list, setList] = useState([])
  const location = useLocation()

  useEffect(() => {

    let fMenu = menuList
      .filter(
        (m) =>
          intersection([m.key], PAGES_BY_NETWORK[network.toLowerCase()]).length
      )
      .filter((m) => !m.disable)

    setList(fMenu)
  }, [network, menuList])

  return (
    <S.Nav>
      {list.map((item) => {
        return (
          <S.MenuListItem key={item.key} to={item.url} activeclassname="active" onClick={() => isMobile ? setOpen(false): null}>
            {item.url.split('/')[1] === location.pathname.split('/')[1] && (
              <S.MenuIcon />
            )}
            {item.title}
          </S.MenuListItem>
        )
      })}
    </S.Nav>
  )
}

export default MenuItems
