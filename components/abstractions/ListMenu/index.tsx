import styles from './index.module.css'
import classNames from 'classnames'

import React, { useState } from 'react'
import { Collapse, Grid, Link, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

export type ListMenuLink = {
  text: string
  href: string
  icon?: any
  isExpanded?: boolean
  subLinks?: Array<ListMenuLink>
}

type ListMenuProps = {
  links: Array<ListMenuLink>
}

const ListMenu: React.FC<ListMenuProps> = (props: ListMenuProps) => {
  const { links } = props

  const [menuLinks, setListMenuLinks] = useState<Array<ListMenuLink>>(links)

  const expandLinkHandler = (link: ListMenuLink) => {
    const updatedListMenuLinks = menuLinks.map((_link) => {
      if (link === _link) {
        _link.isExpanded = !_link.isExpanded
      }
      return _link
    })

    setListMenuLinks(updatedListMenuLinks)
  }

  return (
    <Grid className={styles['list-menu']} container direction="column" wrap="nowrap">
      {menuLinks.map((link: ListMenuLink) => (
        <Grid key={`${link.text}-link`}>
          {link?.subLinks?.length ? (
            <List component="nav" aria-labelledby="our-services-menu-item">
              <ListItem button disableGutters onClick={() => expandLinkHandler(link)}>
                {link.icon ? <ListItemIcon>{link.icon}</ListItemIcon> : null}
                {
                  // TODO: ADD COLOR CHANGE TEXT AND UNDERLINE ON CLICK
                }
                <ListItemText
                  disableTypography
                  primary="Our Services"
                  id="our-services-menu-item"
                />
                {link.isExpanded ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={link.isExpanded} timeout="auto" unmountOnExit>
                {link?.subLinks.map((subLink) => (
                  <List key={`${subLink.text}-sublink`} component="div" disablePadding>
                    <ListItem button>
                      {subLink.icon ? <ListItemIcon>{subLink.icon}</ListItemIcon> : null}
                      <Link
                        className={classNames(styles['list-menu-sub-link'])}
                        href={subLink.href}
                      >
                        {subLink.text}
                      </Link>
                    </ListItem>
                  </List>
                ))}
              </Collapse>
            </List>
          ) : (
            <Grid key={`${link.text}-link`} className={styles['list-menu-link-container']}>
              <List component="nav" aria-labelledby="our-services-menu-item">
                <ListItem button disableGutters onClick={() => expandLinkHandler(link)}>
                  {link.icon ? <ListItemIcon>{link.icon}</ListItemIcon> : null}
                  <Link className={styles['list-menu-link']} href={link.href}>
                    {link.text}
                  </Link>
                </ListItem>
              </List>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  )
}

export default ListMenu
