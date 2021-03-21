import React, { useState } from 'react'
import { AppBar, Drawer, Grid, Link } from '@material-ui/core'
import HamburgerNav from '../HamburgerNav'
import classNames from 'classnames'
import styles from './index.module.css'

type HeaderProps = {}

const Header: React.FC<HeaderProps> = (_: HeaderProps) => {
  const [hambugerActive, setHambugerActive] = useState(false)

  const hamburgerOnClick = () => {
    setHambugerActive(!hambugerActive)
  }

  return (
    <AppBar position="fixed" className={styles['app-bar']}>
      <Grid container direction="column" justify="center">
        <Grid container className={styles['header']}>
          <Grid container item xs={10} sm={6} direction="column" justify="center">
            <h1 className={styles['header-name']}>
              <Link itemProp="legalName" className={styles['name']} href="/">
                Fleck Roofing
              </Link>
            </h1>
          </Grid>
          <Grid item xs={2} sm={6} className={styles['hamburger-nav-container']}>
            <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
          </Grid>
          <Grid>
            <Drawer variant="persistent" anchor="right" open={hambugerActive}>
              <Grid container className={styles['hamburger-nav-container']}>
                <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
              </Grid>
              <Grid container justify="center" item xs={12}>
                <Grid className={styles['menu']} container direction="column" wrap="nowrap">
                  <Grid className={styles['menu-link-container']}>
                    <Link className={styles['menu-link']} href="/">
                      Our Services
                    </Link>
                  </Grid>
                  <Grid className={styles['menu-link-container']}>
                    <Link className={styles['menu-link']} href="/">
                      Request a Free Quote
                    </Link>
                  </Grid>
                  <Grid className={styles['menu-link-container']}>
                    <Link className={styles['menu-link']} href="/">
                      Reviews
                    </Link>
                  </Grid>
                  <Grid className={styles['menu-link-container']}>
                    <Link className={styles['menu-link']} href="/">
                      About
                    </Link>
                  </Grid>
                  <Grid className={styles['menu-link-container']}>
                    <Link className={styles['menu-link']} href="/">
                      Contact
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Drawer>
          </Grid>
          <Grid
            container
            justify="center"
            item
            xs={12}
            className={classNames(styles['menu-container'])}
          >
            <Grid
              className={styles['menu']}
              container
              justify="flex-end"
              direction="row"
              wrap="nowrap"
            >
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/">
                  Our Services
                </Link>
              </Grid>
              <Grid className={styles['menu-link-divider']}>|</Grid>
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/">
                  Request a Free Quote
                </Link>
              </Grid>
              <Grid className={styles['menu-link-divider']}>|</Grid>
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/">
                  Reviews
                </Link>
              </Grid>
              <Grid className={styles['menu-link-divider']}>|</Grid>
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/">
                  About
                </Link>
              </Grid>
              <Grid className={styles['menu-link-divider']}>|</Grid>
              <Grid className={styles['menu-link-container']}>
                <Link className={styles['menu-link']} href="/">
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default Header
