import styles from './index.module.css'

import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Hero from '../abstractions/Hero'
import { Alert, AlertTitle } from '@material-ui/lab'

type FleckHero = {}

type OperationHours = {
  closed: boolean
  openHour: number
  closeHour: number
}

const WEEKLY_OPERATION_HOURS: Array<OperationHours> = [
  {
    closed: true,
    openHour: 0,
    closeHour: 0,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    closed: false,
    openHour: 7,
    closeHour: 17,
  },
]

const displayHours = (hours: number) => {
  if (hours > 12) {
    return hours - 12
  }

  return hours
}

const FleckHero: React.FC<FleckHero> = (_: FleckHero) => {
  const currDate = new Date()
  const currDay = currDate.getDay()
  const currHour = currDate.getHours()
  const currOperationHours = WEEKLY_OPERATION_HOURS[currDay]

  const isOpen = (): boolean => {
    if (currOperationHours.closed) {
      return false
    } else {
      if (currHour >= currOperationHours.openHour && currHour <= currOperationHours.closeHour) {
        return true
      }
    }

    return false
  }

  return (
    <Grid container className={styles['fleck-hero-container']}>
      <Hero primaryText="We're the Guys That Keep You Dry" gutters>
        <Grid container justify="center">
          <Typography color="textSecondary" className={styles['text-shadow']}>
            In Business Since 1988
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Typography color="textSecondary" className={styles['text-shadow']}>
            Warranties Available
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Typography color="textSecondary" className={styles['text-shadow']}>
            Free Quotes
          </Typography>
        </Grid>
        <Grid container justify="center" className={styles['hours-container']}>
          <Typography variant="h5" color="textSecondary" className={styles['text-shadow']}>
            Hours:{' '}
            {isOpen() ? (
              <>
                <span className={styles['open-text']}>Open</span>
                {` • Closes ${displayHours(currOperationHours.closeHour)}:00 pm`}
              </>
            ) : (
              <>
                <span className={styles['closed-text']}>Closed</span>
                {` • Opens ${displayHours(currOperationHours.openHour)}:00 am`}
              </>
            )}
          </Typography>
        </Grid>
      </Hero>
    </Grid>
  )
}

export default FleckHero
