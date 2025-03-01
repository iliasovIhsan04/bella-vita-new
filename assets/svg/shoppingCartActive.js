import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#904BE8"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4 23V6h16v17H4Z"
    />
    <Path
      stroke="#904BE8"
      strokeWidth={1.5}
      d="M8.023 8S7.455 1 12 1s3.977 7 3.977 7"
    />
  </Svg>
)
export default SvgComponent
