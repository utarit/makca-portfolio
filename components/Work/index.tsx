import { ChevronRightIcon } from '@chakra-ui/icons'
import { Badge, Box, Heading, Image, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface ChildrenProps {
    children?: React.ReactNode
}

export const Title = ({ children }: ChildrenProps) => (
    <Box>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
        <ChevronRightIcon />
        <Heading as="h3" display="inline-block" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

interface BannerProps {
    src?: string
    alt?: string
}

export const Banner = ({ src, alt }: BannerProps) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }: ChildrenProps) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)
