import styles from './index.module.css'
import classNames from 'classnames'

import ContentCard from '../ContentCard'
import { Grid } from '@material-ui/core'
import React from 'react'

type ContentProps = {}

const Content: React.FC<ContentProps> = (_: ContentProps) => (
  <Grid className={classNames(styles['main-container'])}>
    <Grid container direction="column" className={classNames(styles['main'])}>
      <Grid
        container
        item
        xs={12}
        md={6}
        justify="space-evenly"
        alignContent="center"
        className={classNames(styles['the-force'], styles['light-side'])}
      >
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={6}
        justify="space-evenly"
        alignContent="center"
        className={classNames(styles['the-force'], styles['dark-side'])}
      >
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
        <ContentCard imgurl="" title="" description={``} xs={6} md={12} />
      </Grid>
    </Grid>
  </Grid>
)

export default Content
