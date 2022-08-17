import {
    Box,
    Button,
    Container,
    Divider,
    Heading,
    Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

export const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">Not Found</Heading>
            <Text>Sorry, you are in the wrong page :(</Text>
            <Divider my={6} />
            <Box>
                <NextLink href="/">
                    <Button colorScheme="teal">Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound
