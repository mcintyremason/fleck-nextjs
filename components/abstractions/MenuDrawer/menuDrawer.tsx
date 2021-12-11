import styles from './menuDrawer.module.css'

import { Grid, SwipeableDrawer } from '@material-ui/core'
import HamburgerNav from 'components/abstractions/HamburgerNav'
import ListMenu from 'components/abstractions/ListMenu'
import { ListMenuLink } from 'models/listMenu'

type MenuDrawerProps = {
  links: Array<ListMenuLink>
  open: boolean
  hamburgerOnClick: () => void
  onClose: () => void
  onOpen: () => void
}

export const MenuDrawer: React.FC<MenuDrawerProps> = (props: MenuDrawerProps) => {
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
      <Grid
        className={styles['list-menu-container']}
        container
        justifyContent="center"
        item
        xs={12}
      >
        <ListMenu links={links} justifyText={'flex-start'} />
      </Grid>
    </SwipeableDrawer>
  )
}
