import { Box, Button, Text, Container } from "@chakra-ui/react"
export default function Hello() {
  return (
    <Container maxW="md">
      <Box>
        <Text color="tester">Hello world</Text>
      </Box>
      <Button>Click me!</Button>
    </Container>
  )
}
