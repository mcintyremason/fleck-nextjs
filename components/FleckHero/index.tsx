import styles from './index.module.css'

import { Grid, Link, Typography } from '@material-ui/core'
import React from 'react'
import Hero from '../abstractions/Hero'

type FleckHero = {
  primaryText: string
  imageUrl?: string
}

type OperationHours = {
  closeHour: number
  isWeeklyDayOff: boolean
  name: string
  openHour: number
}

const WEEKLY_OPERATION_HOURS: Array<OperationHours> = [
  {
    name: 'Sunday',
    isWeeklyDayOff: true,
    openHour: 0,
    closeHour: 0,
  },
  {
    name: 'Monday',
    isWeeklyDayOff: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    name: 'Tuesday',
    isWeeklyDayOff: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    name: 'Wednesday',
    isWeeklyDayOff: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    name: 'Thursday',
    isWeeklyDayOff: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    name: 'Friday',
    isWeeklyDayOff: false,
    openHour: 7,
    closeHour: 17,
  },
  {
    name: 'Saturday',
    isWeeklyDayOff: false,
    openHour: 7,
    closeHour: 12,
  },
]

const displayHours = (hours: number) => {
  if (hours > 12) {
    return hours - 12
  }

  return hours
}

const FleckHero: React.FC<FleckHero> = (props: FleckHero) => {
  const { primaryText, imageUrl } = props
  const currDate = new Date()
  const currDay = currDate.getDay()
  const currHour = currDate.getHours()
  const currOperationHours = WEEKLY_OPERATION_HOURS[currDay]
  const tomorrowDay = currDay != 6 ? currDay + 1 : 0
  const dayAfterTomorrow = tomorrowDay + 1
  // based on the business being off one day during the week
  const nextOperationHours =
    WEEKLY_OPERATION_HOURS[tomorrowDay]?.isWeeklyDayOff ?? null
      ? WEEKLY_OPERATION_HOURS[dayAfterTomorrow]
      : WEEKLY_OPERATION_HOURS[tomorrowDay]

  const isOpen = (): boolean => {
    if (currOperationHours?.isWeeklyDayOff) {
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
      <Hero
        primaryText={primaryText}
        gutters
        overlay
        justify="center"
        imageUrl={imageUrl ? imageUrl : '/img/components/hero-image.jpeg'}
      >
        <Grid container direction="column" className={styles['fleck-hero-secondary-container']}>
          <Typography color="textSecondary" align="center" className={styles['text-shadow']}>
            In Business Since 1988
          </Typography>
          <span className={styles['desktop-divider']}>|</span>
          <Typography color="textSecondary" align="center" className={styles['text-shadow']}>
            Warranties Available
          </Typography>
          <span className={styles['desktop-divider']}>|</span>
          <Typography color="textSecondary" align="center" className={styles['text-shadow']}>
            Free Quotes
          </Typography>
        </Grid>
        <Grid container justify="center" className={styles['fleck-hero-phone']}>
          <Typography
            variant="h3"
            color="textSecondary"
            align="center"
            className={styles['text-shadow']}
          >
            <Link href="tel:(610)250-0737" className={styles['fleck-hero-link']}>
              (610) 250-0737
            </Link>
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
            ) : nextOperationHours?.isWeeklyDayOff ? (
              <>
                <span className={styles['closed-text']}>Closed</span>
                {` • Opens ${displayHours(nextOperationHours.openHour)}:00 am`}
              </>
            ) : (
              <>
                <span className={styles['closed-text']}>Closed</span>
                {` • Opens ${nextOperationHours.name.slice(0, 3)} ${displayHours(
                  nextOperationHours.openHour,
                )}:00 am`}
              </>
            )}
          </Typography>
        </Grid>
      </Hero>
    </Grid>
  )
}

export default FleckHero
