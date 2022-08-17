import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'

interface Props {
    href: string
    path: string
    children: React.ReactNode
}
export const LinkItem = ({ href, path, children }: Props) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}
            >
                {children}
            </Link>
        </NextLink>
    )
}
