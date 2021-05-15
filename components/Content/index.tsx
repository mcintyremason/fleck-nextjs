import styles from './index.module.css'
import classNames from 'classnames'
import React from 'react'
import { Divider, Grid, Link } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

import FleckHero from '../FleckHero'
import FleckLearnMore from '../FleckLearnMore'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import FleckButton from '../FleckButton'
import FleckCustomerSays from '../FleckCustomerSays'

type ContentProps = {}

const Content: React.FC<ContentProps> = (_: ContentProps) => (
  <Grid className={classNames(styles['main-container'])}>
    <Grid container direction="column" className={classNames(styles['main'])}>
      <FleckHero />
      <FleckLearnMore />
      <FleckCustomerSays />
      {/* <Grid
        container
        item
        xs={12}
        alignContent="center"
        className={classNames(styles['content-cards-container'])}
      >
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
      </Grid> */}
      {/* <Grid container justify="center">
          <FleckCTA color="secondary" borderColor={'primary'} xs={8} md={6} />
        </Grid> */}
      {/* <RatingBar /> */}
    </Grid>
  </Grid>
)

export default Content
