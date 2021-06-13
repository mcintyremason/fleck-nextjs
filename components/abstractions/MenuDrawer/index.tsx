import styles from './index.module.css'

import React from 'react'
import { Grid, SwipeableDrawer } from '@material-ui/core'
import HamburgerNav from '../HamburgerNav'
import ListMenu, { ListMenuLink } from '../ListMenu'

type MenuDrawerProps = {
  links: Array<ListMenuLink>
  open: boolean
  hamburgerOnClick: () => void
  onClose: () => void
  onOpen: () => void
}

const MenuDrawer: React.FC<MenuDrawerProps> = (props: MenuDrawerProps) => {
  const { links, open, hamburgerOnClick, onClose, onOpen } = props

  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      className={styles['menu-drawer']}
      onClose={onClose}
      onOpen={onOpen}
      keepMounted={true}
    >
      <Grid container className={styles['hamburger-nav-container']}>
        <HamburgerNav active={open} onClick={hamburgerOnClick} />
      </Grid>
      <Grid className={styles['menu-container']} container justify="center" item xs={12}>
        <ListMenu links={links} />
      </Grid>
    </SwipeableDrawer>
  )
}

export default MenuDrawer
