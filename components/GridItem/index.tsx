import NextLink from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'

import styles from './styles.module.css'
import { ExternalLinkIcon } from '@chakra-ui/icons'

interface Props {
    children?: React.ReactNode
    href?: string
    title: string
    thumbnail: string | StaticImageData
    id?: string
}

export const GridItem = ({ children, href, title, thumbnail }: Props) => (
    <Box w="100%" textAlign="center">
        <LinkBox cursor="pointer">
            <Image
                src={thumbnail}
                alt={title}
                className={styles.GridItemThumbnail}
                placeholder="blur"
                loading="lazy"
            />
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>
                    {title} <ExternalLinkIcon />
                </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail }: Props) => (
    <Box w="100%" textAlign="center">
        <NextLink href={`/works/${id}`} passHref scroll={false}>
            <LinkBox cursor="pointer">
                <Image
                    src={thumbnail}
                    alt={title}
                    className={styles.GridItemThumbnail}
                    placeholder="blur"
                />
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={14}>{children}</Text>
            </LinkBox>
        </NextLink>
    </Box>
)
