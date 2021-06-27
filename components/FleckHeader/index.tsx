import styles from './index.module.css'
import classNames from 'classnames'

import React, { useState } from 'react'
import { AppBar, Box, Fade, Grid, Link, Paper, Popper } from '@material-ui/core'
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined'
import BusinessIcon from '@material-ui/icons/Business'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import GradeRoundedIcon from '@material-ui/icons/GradeRounded'

import { ExpandLess, ExpandMore } from '@material-ui/icons'
import HamburgerNav from '../abstractions/HamburgerNav'
import MenuDrawer from '../abstractions/MenuDrawer'
import SidingIcon from '../icons/SidingIcon'
import ContactUsIcon from '../icons/ContactUsIcon'
import RequestQuoteIcon from '../icons/RequestQuoteIcon'
import EngineeringOutlinedIcon from '../icons/EngineeringOutlinedIcon'
import HandymanOutlinedIcon from '../icons/HandymanOutlinedIcon'
import ListMenu, { ListMenuLink } from '../abstractions/ListMenu'

type HeaderProps = {}

const menuLinksInit: Array<ListMenuLink> = [
  {
    text: 'Our Services',
    href: '/',
    icon: <EngineeringOutlinedIcon color="primary" />,
    isExpanded: false,
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
        icon: <HandymanOutlinedIcon color="primary" />,
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
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuLinks, setMenuLinks] = useState<Array<ListMenuLink>>(menuLinksInit)

  const divRef = React.useRef()
  const ourServicesLinks = menuLinks[0]?.subLinks

  const hamburgerOnClick = () => {
    setHambugerActive(!hambugerActive)
  }

  const handlePopoverOpen = () => {
    setAnchorEl(divRef.current)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const expandLinkHandler = (link: ListMenuLink) => {
    const updatedListMenuLinks = menuLinks.map((_link) => {
      if (link === _link) {
        _link.isExpanded = !_link.isExpanded
      }
      return _link
    })

    setMenuLinks(updatedListMenuLinks)
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
              {menuLinks.map((link: ListMenuLink) => {
                return link.subLinks ? (
                  <Grid
                    key={`${link.text}-link`}
                    ref={divRef}
                    onMouseEnter={() => {
                      expandLinkHandler(link)
                      handlePopoverOpen()
                    }}
                    onMouseLeave={() => {
                      expandLinkHandler(link)
                      handlePopoverClose()
                    }}
                    className={classNames(
                      styles['menu-link-container'],
                      link.isExpanded ? styles['active'] : '',
                    )}
                  >
                    <Link
                      className={classNames(
                        styles['menu-link'],
                        link.isExpanded ? styles['active'] : '',
                      )}
                      href="/"
                    >
                      {link.text}
                    </Link>
                    {link.isExpanded ? <ExpandLess /> : <ExpandMore />}
                    <Popper
                      className={styles['menu-popper']}
                      open={link.isExpanded ? link.isExpanded : false}
                      anchorEl={anchorEl}
                      placement="bottom-end"
                      transition
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper>
                            <ListMenu links={ourServicesLinks} justifyText="center" />
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </Grid>
                ) : (
                  <Box display="flex" key={`${link.text}-link`} clone>
                    <>
                      <Grid className={styles['menu-link-divider']}>|</Grid>
                      <Grid className={styles['menu-link-container']}>
                        <Link className={styles['menu-link']} href="/">
                          {link.text}
                        </Link>
                      </Grid>
                    </>
                  </Box>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  )
}

export default FleckHeader
