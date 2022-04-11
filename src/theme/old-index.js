import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: "Dm Sans, sans-serif",
  },
  colors: {
    gray: {
      100: "red",
      200: "green",
    },
  },
})

export default theme
