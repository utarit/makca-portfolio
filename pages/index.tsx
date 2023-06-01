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
import { BioInfo, BioSection, BioYear } from '../components/Bio'
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
                Developer: A machine that turns coffee into code ☕
            </Box>
            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Mert Akça
                    </Heading>
                    <p>Front-end developer / Puzzle master / Cat owner</p>
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
                    As a passionate caffeine addict and a graduate of METU, I am
                    driven by my love for coding and problem-solving. My
                    ultimate goal is to provide efficient, stylish, and
                    accessible solutions to real-world issues. In addition to my
                    coding expertise, I also enjoy dabbling in photography,
                    directing short films, and cracking escape rooms. Above all,
                    I strive to make a positive impact on people&apos;s lives
                    through my work and hope to continue doing so.
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
                    <BioYear>2009</BioYear>
                    <BioInfo>
                        Came out on top in a competition in TRT Cocuk
                    </BioInfo>
                </BioSection>
                <BioSection>
                    <BioYear>2015</BioYear>
                    <BioInfo>
                        Achieved the 121st rank in the national university
                        entrance exam
                    </BioInfo>
                </BioSection>
                <BioSection>
                    <BioYear>2016</BioYear>
                    <BioInfo>
                        Conducted{' '}
                        <Link
                            fontWeight="bold"
                            color="teal"
                            href="https://ocit.metu.edu.tr/tr"
                            target="_blank"
                        >
                            METU Life Saving First Aid Society
                        </Link>{' '}
                        and became a first aid instructor
                    </BioInfo>
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    <BioInfo>
                        Gradually building a career in UX & front-end
                        development
                    </BioInfo>
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
