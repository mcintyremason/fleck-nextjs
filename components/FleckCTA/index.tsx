import styles from './index.module.css'
import classNames from 'classnames'

import React, { ReactNode } from 'react'
import { Grid, GridSize } from '@material-ui/core'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'

import CTA, { Color } from '../abstractions/CTA'

type FleckCTAProps = {
  color: Color
  borderColor?: Color
  children?: ReactNode
  icon?: ReactNode
  iconGutterBottom?: boolean
  ctaGutterTop?: boolean
  ctaGutterBottom?: boolean
} & Partial<Record<Breakpoint, boolean | GridSize>> &
  React.HTMLAttributes<HTMLDivElement>

const FleckCTA: React.FC<FleckCTAProps> = (props: FleckCTAProps) => {
  const {
    children,
    className,
    color,
    borderColor,
    icon,
    xs,
    sm,
    md,
    lg,
    xl,
    iconGutterBottom = true,
    ctaGutterTop = true,
    ctaGutterBottom = true,
  } = props

  return (
    <Grid
      item
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={classNames(styles['fleck-cta-container'], className)}
    >
      <CTA color={color} borderColor={borderColor} xs={12}>
        <Grid
          container
          direction="column"
          className={classNames(
            ctaGutterTop && styles['gutter-top'],
            ctaGutterBottom && styles['gutter-bottom'],
          )}
        >
          {icon && (
            <Grid
              container
              justify="center"
              className={classNames(iconGutterBottom && styles['icon-gutter'])}
            >
              {icon}
            </Grid>
          )}
          <Grid container justify="center" className={classNames(styles['fleck-cta-text'])}>
            {children}
          </Grid>
        </Grid>
      </CTA>
    </Grid>
  )
}

export default FleckCTA
