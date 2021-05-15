import styles from './index.module.css'
import classNames from 'classnames'

import React from 'react'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Card, CardContent, CardMedia, Grid, GridSize, Link, Typography } from '@material-ui/core'
import FleckButton from '../../FleckButton'

type LearnMoreCardProps = {
  title: string
  description: string
  learnMoreUrl?: string
  imageUrl?: string
  imageZoom?: boolean
} & Partial<Record<Breakpoint, boolean | GridSize>>

const LearnMoreCard: React.FC<LearnMoreCardProps> = (props: LearnMoreCardProps) => {
  const { title, description, imageUrl, imageZoom = true, xs, sm, md, lg, xl } = props

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
        <Link href="/">
          <CardMedia
            image={imageUrl}
            className={classNames(styles['media'], imageZoom ? styles['zoom'] : '')}
          >
            <Grid
              container
              direction="column"
              justify="center"
              className={classNames(styles['hero-overlay'])}
            >
              <CardContent>
                <Grid container justify="center">
                  <Typography
                    variant="h5"
                    component="h5"
                    color="textSecondary"
                    align="center"
                    className={classNames(styles['title'])}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    align="center"
                    className={classNames(styles['description'])}
                  >
                    {description}
                  </Typography>
                  <FleckButton text="Learn More" color="secondary" xs={12} md={6} lg={4} xl={3} />
                </Grid>
              </CardContent>
            </Grid>
          </CardMedia>
        </Link>
      </Card>
    </Grid>
  )
}

export default LearnMoreCard
