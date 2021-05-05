import styles from './index.module.css'
import classNames from 'classnames'
import React from 'react'
import { Grid, Link } from '@material-ui/core'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'

import FleckHero from '../FleckHero'
import FleckLearnMore from '../FleckLearnMore'
import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import FleckButton from '../FleckButton'

type ContentProps = {}

const Content: React.FC<ContentProps> = (_: ContentProps) => (
  <Grid className={classNames(styles['main-container'])}>
    <Grid container direction="column" className={classNames(styles['main'])}>
      <FleckHero />
      <FleckLearnMore />
      <Grid container justify="center" className={styles['customer-says-container']}>
        <Grid container direction="column" item xs={12} md={4}>
          <Grid container justify="center">
            <Grid container>
              <ChatOutlinedIcon fontSize="large" />
            </Grid>
            <Grid container>
              <Typography>Here's what our satisfied customers are saying...</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} container direction="column">
          <Typography>ALLEN W</Typography>
          <Rating defaultValue={5} precision={0.1} readOnly />
          <Typography>
            A huge thank you! The guys at Fleck showed up early and knocked out my roof ...{' '}
            <Link href="/">read more</Link>
          </Typography>
          <Typography>3/30/2021</Typography>
          <FleckButton color="secondary" />
        </Grid>
      </Grid>
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
