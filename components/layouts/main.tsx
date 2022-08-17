import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Router } from 'next/router'
import React from 'react'
import { Navbar } from '../Navbar'

interface Props {
    children: React.ReactNode
    router: Router
}
export const Main = ({ children, router }: Props) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Mert AKÇA - Homepage</title>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}
