import {
    Box,
    Button,
    Center,
    Container,
    Heading,
    Icon,
    Image,
    Link,
    List,
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Paragraph } from '../components/Paragraph'
import { Section } from '../components/Section'
import { IoLeaf } from 'react-icons/io5'

const Home: NextPage = () => {
    return (
        <Container>
            <Center>
                <Image
                    height={400}
                    objectFit="cover"
                    src="/images/makca-digital-cover.png"
                    alt="Cat drinking coffee"
                />
            </Center>
            <Box>
                <Heading as="h2" variant="page-title">
                    MAKCA DIGITAL SOLUTIONS LTD
                </Heading>
                <p>Empowering Tech Solutions, Unleashing Success</p>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    What we do
                </Heading>
                <Paragraph>
                    Makca Digital Solutions offers comprehensive tech solutions
                    to address challenges in both the tech and non-tech sectors.
                    Our expertise includes:
                </Paragraph>
                <br />
                <UnorderedList>
                    <ListItem>
                        User Interface (UI) Development: We specialize in
                        creating intuitive and visually appealing UI designs for
                        both web and mobile platforms, ensuring a seamless user
                        experience.
                    </ListItem>
                    <ListItem>
                        Gamification of Everyday Challenges: We leverage
                        gamification techniques to transform day-to-day
                        challenges into engaging experiences for teams,
                        students, and corporations. Our solutions promote
                        motivation, collaboration, and increased productivity.
                    </ListItem>
                    <ListItem>
                        Interactive Game Creation: Whether you&apos;re an
                        individual or a corporation, we craft interactive games
                        that captivate and entertain. From educational games to
                        promotional experiences, we create engaging content that
                        leaves a lasting impression.
                    </ListItem>
                    {/* <ListItem>
                        User Experience (UX) Consultancy: We provide UX
                        consultancy services to enhance your understanding of
                        customer behaviors. Our team analyzes user interactions
                        and provides valuable insights to optimize your digital
                        products or services.
                    </ListItem> */}
                </UnorderedList>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    About the founder
                </Heading>
                <Paragraph>
                    Mert Akca, the founder of Makca Digital, is a highly skilled
                    software engineer with a specialization in frontend and
                    mobile application development. Holding a degree from Middle
                    East Technical University, Mert brings a strong educational
                    background and technical expertise to his role.
                </Paragraph>
                <Paragraph>
                    Beyond software engineering, Mert has demonstrated his
                    creative abilities and passion for interactive experiences.
                    He has actively participated in various short film contests,
                    showcasing his storytelling skills and dedication to the art
                    of filmmaking. Additionally, Mert has organized engaging
                    treasure hunts for both individuals and corporations,
                    demonstrating his talent for crafting immersive and
                    interactive experiences.
                </Paragraph>
                <Paragraph>
                    Drawing on his diverse background, Mert has also ventured
                    into the realm of board game creation, leveraging his
                    creativity and problem-solving skills to design captivating
                    games. This experience has enriched his understanding of
                    game mechanics, fostering an innovative approach to
                    developing interactive solutions.
                </Paragraph>
                <Paragraph>
                    Continuously committed to personal and professional growth,
                    Mert is actively expanding his knowledge in the field of UX
                    design, aiming to create seamless and user-centric
                    experiences. By combining his frontend development expertise
                    with his evolving skills in UX design, Mert is poised to
                    deliver cutting-edge solutions that prioritize usability and
                    customer satisfaction.
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Our Games
                </Heading>
                <List>
                    <ListItem>
                        <Button
                            variant="ghost"
                            colorScheme="blue"
                            leftIcon={<Icon as={IoLeaf} />}
                        >
                            Zehra is missing (Coming soon...)
                        </Button>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
}

export default Home
