import React from "react"

import { ISvg } from "./Svg.props"
import { StyledSvg } from "./Svg.styles"

const Svg = (props: ISvg) => {
  return <StyledSvg {...props} />
}

export default Svg
