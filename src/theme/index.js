// My main theme entrypoint
import { extendTheme } from "@chakra-ui/react"
// Global style overrides
import styles from "./styles"
// Foundational style overrides
import borders from "./foundations/Borders"
// Component style overrides
import Button from "./components/Button"

const overrides = {
  ...styles,
}

export default extendTheme(overrides)
