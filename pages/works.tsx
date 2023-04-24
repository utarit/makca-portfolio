import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import { Article } from '../components/layouts/article'
import { Section } from '../components/Section'
import { WorkGridItem } from '../components/GridItem'

import plentific from '../public/images/plentific2.png'
import hmsMap from '../public/images/hms-map.jpg'
import vrthings from '../public/images/vrthings.png'
import unikit from '../public/images/unikit.png'
import ocit from '../public/images/ocit.png'
import welcomePage from '../public/images/react-welcome-page-demo.png'
import ocitBlog from '../public/images/ocit-blog.png'

const Works = () => (
    <Article title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="plentific"
                        title="Plentific"
                        thumbnail={plentific}
                    >
                        A simple work order management platform and a network of
                        trade professionals.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem
                        id="hms-map"
                        title="Huawei Map React Native Plugin"
                        thumbnail={hmsMap}
                    >
                        Huawei maps plugin for React Native apps
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem
                        id="ocit"
                        thumbnail={ocit}
                        title="OCİT First Aid"
                    >
                        A First aid app that guides people in emergencies
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="unikit" thumbnail={unikit} title="UniKit">
                        A handy app for METU students
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                    Old works
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem
                        id="ocit-blog"
                        title="OCİT Blog"
                        thumbnail={ocitBlog}
                    >
                        METU Lifesaving and First Aid Society Blog
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem
                        id="vrthings"
                        title="VRThings"
                        thumbnail={vrthings}
                    >
                        A Board Game Experience but with VR
                    </WorkGridItem>
                </Section>
                <Section delay={0.4}>
                    <WorkGridItem
                        id="react-welcome-page"
                        thumbnail={welcomePage}
                        title="React Welcome Page"
                    >
                        A npm package for React developers who want a beautiful
                        splash screens
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Article>
)

export default Works
