import styles from './index.module.css'

import React, { useState } from 'react'
import { Collapse, Grid, Link, List, ListItem, ListItemIcon } from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

export type ListMenuLink = {
  text: string
  href?: string
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
            <List component="nav" aria-labelledby={`${link.text}-menu-item`}>
              <ListItem button disableGutters onClick={() => expandLinkHandler(link)}>
                <Grid container justify="space-between" className={styles['list-menu-link']}>
                  <Grid item xs={2} container direction="column" justify="center">
                    {link.icon ? <ListItemIcon>{link.icon}</ListItemIcon> : null}
                  </Grid>
                  <Grid item xs={10} container direction="column" justify="center">
                    {link.text}
                  </Grid>
                </Grid>
                {link.isExpanded ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={link.isExpanded} timeout="auto" unmountOnExit>
                {link?.subLinks.map((subLink) => (
                  <List key={`${subLink.text}-sublink`} component="div" disablePadding>
                    <ListItem button>
                      <Link className={styles['list-menu-link']} href={link.href}>
                        <Grid container justify="space-between">
                          <Grid item xs={2} container direction="column" justify="center">
                            {subLink.icon ? <ListItemIcon>{subLink.icon}</ListItemIcon> : null}
                          </Grid>
                          <Grid item xs={10} container direction="column" justify="center">
                            {subLink.text}
                          </Grid>
                        </Grid>
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
                  <Link className={styles['list-menu-link']} href={link.href}>
                    <Grid container justify="space-between">
                      <Grid item xs={2} container direction="column" justify="center">
                        {link.icon ? <ListItemIcon>{link.icon}</ListItemIcon> : null}
                      </Grid>
                      <Grid item xs={10} container direction="column" justify="center">
                        {link.text}
                      </Grid>
                    </Grid>
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
