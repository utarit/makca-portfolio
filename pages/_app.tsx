import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from '../components/layouts/main'
import { theme } from '../lib/theme'
import Fonts from '../lib/fonts'

function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Main router={router}>
                <Component {...pageProps} />
            </Main>
        </ChakraProvider>
    )
}

export default MyApp
