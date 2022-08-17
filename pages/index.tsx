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
                Programmer: A machine that turns coffee into code ☕
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mert Akça
                    </Heading>
                    <p>Interface developer / Game architect / Cat owner</p>
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
                        src="/images/me.jpeg"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    A professional caffeine addict graduated from METU. Likes
                    coding and tries to solve real-world problems, and does it
                    in the most effective, stylish, and accessible way.
                    Sometimes takes photos, sometimes directs short films and
                    crazy about board games. Hopes that his doings make a
                    difference in people&apos;s lives positively.
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
                    <BioYear>1997</BioYear> First cry
                </BioSection>
                <BioSection>
                    <BioYear>2009</BioYear> Won a computer in a TV contest
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear> Conducted{' '}
                    <Link
                        fontWeight="bold"
                        color="teal"
                        href="https://ocit.vercel.app/"
                        target="_blank"
                    >
                        METU First Aid Club
                    </Link>
                    &nbsp; and became a first aid instructor
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear> Graduated from Middle East Technical
                    University
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear> Now working as Software Engineer
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
