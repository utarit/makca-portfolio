import {
    ChakraProvider,
    cookieStorageManagerSSR,
    localStorageManager,
} from '@chakra-ui/react'
import { NextApiRequest } from 'next/types'
import { theme } from '../lib/theme'

export default function Chakra({
    cookies,
    children,
}: {
    children: React.ReactNode
    cookies: unknown
}) {
    const colorModeManager =
        typeof cookies === 'string'
            ? cookieStorageManagerSSR(cookies)
            : localStorageManager

    return (
        <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
            {children}
        </ChakraProvider>
    )
}

export async function getServerSideProps(req: NextApiRequest) {
    return {
        props: {
            cookies: req.headers?.cookie ?? '',
        },
    }
}
