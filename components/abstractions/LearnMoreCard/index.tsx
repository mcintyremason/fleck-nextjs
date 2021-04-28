import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Button, Card, CardContent, CardMedia, Grid, GridSize, Typography } from '@material-ui/core'

type LearnMoreCardProps = {
  title: string
  description: string
  learnMoreUrl?: string
  imageUrl?: string
} & Partial<Record<Breakpoint, boolean | GridSize>>

const LearnMoreCard: React.FC<LearnMoreCardProps> = (props: LearnMoreCardProps) => {
  const { title, description, imageUrl, xs, sm, md, lg, xl } = props

  return (
    <Grid
      className={styles['learn-more-card-container']}
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      <Card square elevation={0}>
        <CardMedia image={imageUrl} className={styles['media']}>
          <CardContent>
            <Typography
              variant="h5"
              component="h5"
              color="textSecondary"
              className={classNames(styles['title'])}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              component="p"
              color="textSecondary"
              className={classNames(styles['description'])}
            >
              {description}
            </Typography>
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </CardContent>
        </CardMedia>
      </Card>
    </Grid>
  )
}

export default LearnMoreCard
