import styles from './index.module.css'

import ContentCard from '../ContentCard'
import { Grid } from '@material-ui/core'
import React from 'react'

type ContentProps = {}

const Content: React.FC<ContentProps> = (props: ContentProps) => (
  <Grid className="main-container">
    <Grid className="main" container direction="column">
      <Grid
        container
        item
        xs={12}
        md={6}
        justify="space-evenly"
        alignContent="center"
        className="the-force light-side"
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
        className="the-force dark-side"
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
