import { HamburgerIcon } from '@chakra-ui/icons'
import {
    Box,
    Container,
    Flex,
    Heading,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    useColorModeValue,
    HStack,
    Link,
} from '@chakra-ui/react'
import React from 'react'
import { LinkItem } from '../LinkItem'
import { Logo } from '../Logo'
import NextLink from 'next/link'
import { ThemeToggleButton } from '../ThemeToggleButton'

interface Props {
    path: string
}
export const Navbar = ({ path }: Props) => {
    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
            >
                <Flex alignItems="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tighter">
                        <Logo />
                    </Heading>
                </Flex>

                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, md: 0 }}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/makca-digital" path={path}>
                        Makca Digital
                    </LinkItem>
                </Stack>

                <Box>
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                variant="outline"
                                as={IconButton}
                                aria-label="Options"
                            >
                                <HamburgerIcon />
                            </MenuButton>
                            <MenuList>
                                <NextLink href="/" passHref>
                                    <MenuItem as={Link}>About</MenuItem>
                                </NextLink>
                                <NextLink href="/works" passHref>
                                    <MenuItem as={Link}>Works</MenuItem>
                                </NextLink>
                                <NextLink href="/posts" passHref>
                                    <MenuItem as={Link}>Posts</MenuItem>
                                </NextLink>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
