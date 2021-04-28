import styles from './index.module.css'
import classNames from 'classnames'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import FleckCTA from '../FleckCTA'
import FleckHero from '../FleckHero'
import RatingBar from '../RatingBar'

type ContentProps = {}

const Content: React.FC<ContentProps> = (_: ContentProps) => (
  <Grid className={classNames(styles['main-container'])}>
    <Grid container direction="column" className={classNames(styles['main'], 'height-full')}>
      <Grid
        container
        item
        xs={12}
        alignContent="center"
        className={classNames(styles['content-cards-container'])}
      >
        <FleckHero />
        {/* <Grid container justify="center">
          <Typography variant="h2" align="center">
            Fleck Roofing & Construction - Getting It Right Since 1988
          </Typography>
        </Grid> */}
        {/* <Grid container justify="center">
          <FleckCTA color="secondary" borderColor={'primary'} xs={8} md={6} />
        </Grid> */}
        {/* <ContentCard imgurl="" title="" description={``} xs={6} md={12} /> */}
        {/* <RatingBar /> */}
      </Grid>
    </Grid>
  </Grid>
)

export default Content
