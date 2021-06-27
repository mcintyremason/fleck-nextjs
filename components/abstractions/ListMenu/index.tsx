import styles from './index.module.css'

import React, { useState } from 'react'
import {
  Collapse,
  Grid,
  GridJustification,
  Link,
  List,
  ListItem,
  ListItemIcon,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'

export type ListMenuLink = {
  text: string
  href?: string
  icon?: any
  isExpanded?: boolean
  subLinks?: Array<ListMenuLink>
}

type ListMenuProps = {
  justifyText?: GridJustification
  links: Array<ListMenuLink>
}

const ListMenu: React.FC<ListMenuProps> = (props: ListMenuProps) => {
  const { links, justifyText = 'flex-start' } = props

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
        <Grid key={`${link.text}-link`} container>
          {link?.subLinks?.length ? (
            <List aria-labelledby={`${link.text}-menu-item`}>
              <ListItem button disableGutters onClick={() => expandLinkHandler(link)}>
                <Grid container justify="space-between" className={styles['list-menu-link']}>
                  <Grid item xs={2} container direction="column" justify="center">
                    {link.icon ? <ListItemIcon>{link.icon}</ListItemIcon> : null}
                  </Grid>
                  <Grid item xs={10} container direction="column" justify="center">
                    <Grid container justify={justifyText}>
                      {link.text}
                    </Grid>
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
                            <Grid container justify={justifyText}>
                              {subLink.text}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Link>
                    </ListItem>
                  </List>
                ))}
              </Collapse>
            </List>
          ) : (
            <Grid
              key={`${link.text}-link`}
              container
              className={styles['list-menu-link-container']}
            >
              <List aria-labelledby={`${link.text}-menu-item`}>
                <ListItem
                  button
                  disableGutters
                  onClick={() => expandLinkHandler(link)}
                  className={styles['list-menu-item']}
                >
                  <Link className={styles['list-menu-link']} href={link.href}>
                    <Grid container justify="space-between">
                      <Grid item xs={2} container direction="column" justify="center">
                        {link.icon ? <ListItemIcon>{link.icon}</ListItemIcon> : null}
                      </Grid>
                      <Grid item xs={10} container direction="column" justify="center">
                        <Grid container justify={justifyText}>
                          {link.text}
                        </Grid>
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
