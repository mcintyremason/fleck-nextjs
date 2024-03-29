import styles from './learnMoreCard.module.css'
import classNames from 'classnames'

import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { Card, CardContent, CardMedia, Grid, GridSize, Link, Typography } from '@material-ui/core'
import FleckButton from 'components/FleckButton'

type LearnMoreCardProps = {
  title: string
  description: string
  href?: string
  learnMoreUrl?: string
  imageUrl?: string
  imageZoom?: boolean
} & Partial<Record<Breakpoint, boolean | GridSize>>

export const LearnMoreCard: React.FC<LearnMoreCardProps> = (props: LearnMoreCardProps) => {
  const { title, description, href, imageUrl, imageZoom = true, xs, sm, md, lg, xl } = props

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
        <Link href={href}>
          <CardMedia
            image={imageUrl}
            className={classNames(styles['media'], imageZoom ? styles['zoom'] : '')}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              className={classNames(styles['hero-overlay'])}
            >
              <CardContent>
                <Grid container justifyContent="center">
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
