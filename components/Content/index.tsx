import styles from './index.module.css'
import classNames from 'classnames'
import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import FleckHero from '../FleckHero'
import LearnMoreCard from '../abstractions/LearnMoreCard'

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
        <Grid container justify="center" className={styles['learn-more-container']}>
          <Typography variant="h2" align="center">
            Fleck Roofing & Construction - Getting It Right Since 1988
          </Typography>
          <LearnMoreCard
            title="Emergency Roofing"
            description={`A damaged roof requires immediate attention. 
              Know that you'll get a fast response and quality work
              when you call our team to address is.`}
            imageUrl="/img/components/learn-more-card-1.webp"
          />
          <LearnMoreCard
            title="Roof Replacement"
            description={`If your roof is older than 20 years or needs major repairs, 
              it may be time for a replacement. Count on our experts to get the job done right.`}
            imageUrl="/img/components/learn-more-card-2.webp"
          />
          <LearnMoreCard
            title="Siding, Soffit, and Fascia"
            description={`Do you need siding replacement for your home?
              Choose Fleck Roofing & Construction for reliable siding work in the Easton, PA area.`}
            imageUrl="/img/components/learn-more-card-3.webp"
          />
        </Grid>
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
