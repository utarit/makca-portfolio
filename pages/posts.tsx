import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { GridItem } from '../components/GridItem'
import { Article } from '../components/layouts/article'
import { Section } from '../components/Section'

import provider from '../public/images/provider.png'
import testing from '../public/images/testing.png'
import hmsApp from '../public/images/hms-app.png'
import hackaton from '../public/images/hackaton.png'
import hunt from '../public/images/hunt.png'

const Posts = () => (
    <Article title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://medium.com/@mertakca/flutter-provider-mimarisi-ded4f8fac9d"
                        title="Flutter Provider Architecture (in Turkish)"
                        thumbnail={provider}
                    />
                    <GridItem
                        href="https://medium.com/@mertakca/flutter-ve-unit-testing-7a4893a402fd"
                        title="Flutter and Unit Testing (in Turkish)"
                        thumbnail={testing}
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://medium.com/@mertakca/react-native-ve-hms-map-ile-harita-uygulamas%C4%B1-geli%C5%9Ftirme-1272bb3a6924"
                        title="Developing an app with React Native and HMS Map (in Turkish)"
                        thumbnail={hmsApp}
                    />
                    <GridItem
                        href="https://www.linkedin.com/feed/update/urn:li:activity:6946382711762612225?utm_source=share&utm_medium=member_desktop"
                        title="Created treasure Hunt for corporates"
                        thumbnail={hunt}
                    />
                    <GridItem
                        href="https://www.linkedin.com/posts/mertakca_flutter-hackathon-activity-6690610967375613953-OsHq?utm_source=share&utm_medium=member_desktop"
                        title="Top 20 in International Flutter Hackathon 2020"
                        thumbnail={hackaton}
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Article>
)

export default Posts
