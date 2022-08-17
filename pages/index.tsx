import {
    Box,
    Button,
    Container,
    Heading,
    Icon,
    Image,
    Link,
    List,
    ListItem,
    useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import type { NextPage } from 'next'
import { Paragraph } from '../components/Paragraph'
import { Section } from '../components/Section'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/Bio'
import { IoLogoGithub, IoLogoLinkedin, IoLogoMedium } from 'react-icons/io5'

const Home: NextPage = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                alignContent="center"
            >
                This is Mert, an interface developer / enthusiastic photographer
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mert Akça
                    </Heading>
                    <p>Front-end devloper / Game architect / Cat owner</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    justifyContent="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        width={100}
                        height={100}
                        display="inline-block"
                        borderRadius="full "
                        alt="profile photo"
                        src="/images/prenses.png"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </Paragraph>
                <Box justifyContent="center" my={4}>
                    <NextLink href="/works">
                        <Button
                            rightIcon={<ChevronRightIcon />}
                            colorScheme="teal"
                        >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear> Born
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear> Graduated from Middle East Technical
                    University
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear> Working as Software Engineer
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Further Links
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/utarit" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoGithub} />}
                            >
                                @utarit
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link
                            href="https://linkedin.com/in/mertakca"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoLinkedin} />}
                            >
                                @mertakca
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link
                            href="https://medium.com/@mertakca"
                            target="_blank"
                        >
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<Icon as={IoLogoMedium} />}
                            >
                                @mertakca
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Home
