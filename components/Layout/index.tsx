import styles from './index.module.css'

import React, { ReactNode } from 'react'
import Head from 'next/head'
import { Fab, Grid, Link } from '@material-ui/core'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk'

import FleckHeader from 'components/FleckHeader'
import FleckFooter from 'components/FleckFooter'

type Props = {
  children?: ReactNode
  title?: string
  styles?: string
}

const Layout = ({ children, title = 'Fleck Roofing & Construction' }: Props) => (
  <Grid className={styles['layout-container']}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/img/icons/favicon-2/favicon.ico" />
      <meta
        name="description"
        content="Roofing & construction company providing excellence since 1988"
      />
      <link type="text/css" rel="preload" as="style" href="/css/app.css" />
      <link type="text/css" rel="stylesheet" href="/css/app.css" />
      <link
        type="text/css"
        rel="preload"
        as="style"
        href="/css/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
      <link
        type="text/css"
        rel="stylesheet"
        href="/css/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
      />
    </Head>
    <Grid className="app height-full" itemScope itemType="http://schema.org/LocalBusiness">
      <FleckHeader />
      {children}
      <FleckFooter />
      <Grid>
        <Link color="secondary" href="tel:5702348247">
          <Fab color="primary" className={styles['call-fab-container']} aria-label="call-us">
            <PhoneInTalkIcon />
          </Fab>
        </Link>
      </Grid>
    </Grid>
  </Grid>
)

export default Layout
