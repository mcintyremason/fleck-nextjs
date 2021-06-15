import styles from './index.module.css'
import classNames from 'classnames'

import React, { useState } from 'react'
import { AppBar, Grid, Link } from '@material-ui/core'
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined'
import BusinessIcon from '@material-ui/icons/Business'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'

import HamburgerNav from '../abstractions/HamburgerNav'
import MenuDrawer from '../abstractions/MenuDrawer'
import ConstructionIcon from '../icons/ConstructionIcon'
import SidingIcon from '../icons/SidingIcon'
import ContactUsIcon from '../icons/ContactUsIcon'
import RequestQuoteIcon from '../icons/RequestQuoteIcon'
import EngineeringOutlinedIcon from '../icons/EngineeringOutlinedIcon'

type HeaderProps = {}

const menuLinks = [
  {
    text: 'Our Services',
    href: '/',
    icon: <EngineeringOutlinedIcon color="primary" />,
    subLinks: [
      {
        text: 'Residential Roofing',
        href: '/',
        icon: <HouseOutlinedIcon color="primary" />,
      },
      {
        text: 'Commercial Roofing',
        href: '/',
        icon: <BusinessIcon color="primary" />,
      },
      {
        text: 'Siding, Soffit, & Fascia',
        href: '/',
        icon: <SidingIcon color="primary" />,
      },
      {
        text: 'Emergency Roofing',
        href: '/',
        icon: <ReportProblemOutlinedIcon color="primary" />,
      },
      {
        text: 'General Contracting',
        href: '/',
        icon: <ConstructionIcon color="primary" />,
      },
    ],
  },
  {
    text: 'Request a Free Quote',
    href: '/',
    icon: <RequestQuoteIcon color="primary" />,
  },
  {
    text: 'Reviews',
    href: '/',
    icon: <GradeRoundedIcon color="primary" />,
  },
  {
    text: 'About',
    href: '/',
    icon: <InfoOutlinedIcon color="primary" />,
  },
  {
    text: 'Contact',
    href: '/',
    icon: <ContactUsIcon color="primary" />,
  },
]

const FleckHeader: React.FC<HeaderProps> = (_: HeaderProps) => {
  const [hambugerActive, setHambugerActive] = useState(false)

  const hamburgerOnClick = () => {
    setHambugerActive(!hambugerActive)
  }

  return (
    <AppBar position="fixed" className={styles['app-bar']}>
      <Grid container direction="column" justify="center">
        <Grid container className={styles['header']}>
          <Grid
            container
            item
            xs={10}
            sm={4}
            direction="column"
            justify="center"
            className={styles['logo-nav-container']}
          >
            <h1 className={styles['header-name']}>
              <Link itemProp="legalName" className={styles['logo']} href="/">
                <img
                  alt="Fleck Roofing & Construction"
                  src="/img/components/header-logo.png"
                  className={styles['header-logo']}
                />
              </Link>
            </h1>
          </Grid>
          <Grid item xs={2} sm={8} className={styles['hamburger-nav-container']}>
            <HamburgerNav active={hambugerActive} onClick={hamburgerOnClick} />
          </Grid>
          <Grid>
            <MenuDrawer
              links={menuLinks}
              open={hambugerActive}
              hamburgerOnClick={hamburgerOnClick}
              onClose={hamburgerOnClick}
              onOpen={hamburgerOnClick}
            />
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

export default FleckHeader
