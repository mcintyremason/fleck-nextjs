import styles from './index.module.css'
import classNames from 'classnames'
import React from 'react'
import { Grid } from '@material-ui/core'

import ContentCard from '../ContentCard'
import CTA from '../abstractions/CTA'
import FleckCTA from '../FleckCTA'

type ContentProps = {}

const Content: React.FC<ContentProps> = (_: ContentProps) => (
  <Grid className={classNames(styles['main-container'])}>
    <Grid container direction="column" className={classNames(styles['main'], 'height-full')}>
      <Grid
        container
        item
        xs={12}
        justify="space-evenly"
        alignContent="center"
        className={classNames(styles['content-cards-container'], styles['cards-left'])}
      >
        <Grid container justify="center">
          <FleckCTA color="secondary" xs={12} />
        </Grid>
        {/* <ContentCard imgurl="" title="" description={``} xs={6} md={12} /> */}
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
      </Grid>
    </Grid>
  </Grid>
)

export default Content
