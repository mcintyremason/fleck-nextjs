import styles from './index.module.css'

import React from 'react'
import Footer from '../abstractions/Footer'
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'
import { GridSize } from '@material-ui/core'

type FleckFooterProps = {} & Partial<Record<Breakpoint, boolean | GridSize>>

const FleckFooter: React.FC<FleckFooterProps> = (props: FleckFooterProps) => {
  const { xs, md, lg, xl } = props

  return <Footer xs={xs} md={md} lg={lg} xl={xl}></Footer>
}

export default FleckFooter
