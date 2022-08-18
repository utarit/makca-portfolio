import {
    Box,
    Center,
    Container,
    useColorModeValue,
    Image,
} from '@chakra-ui/react'
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
                <title>Homepage - Mert AKÇA</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={16}>
                <Center>
                    <Image
                        width="50%"
                        height={250}
                        objectFit="cover"
                        src="/cat-drinking.gif"
                        alt="Cat drinking coffee"
                        style={{
                            filter: useColorModeValue('none', 'invert(100%)'),
                        }}
                    />
                </Center>
                {children}
            </Container>
        </Box>
    )
}
