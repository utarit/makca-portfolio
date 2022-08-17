import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { GridItem } from '../components/GridItem'
import { Article } from '../components/layouts/article'
import { Section } from '../components/Section'

import provider from '../public/images/provider.png'
import testing from '../public/images/testing.png'
import hmsApp from '../public/images/hms-app.png'
import blogspot from '../public/images/blogspot.png'

const Posts = () => (
    <Article title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Posts
            </Heading>
            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.mobiler.dev/post/flutter-provider-mimarisi"
                        title="Flutter Provider Architecture (TR)"
                        thumbnail={provider}
                    />
                    <GridItem
                        href="https://www.mobiler.dev/post/flutter-ve-unit-testing"
                        title="Flutter and Unit Testing (TR)"
                        thumbnail={testing}
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        href="https://www.mobiler.dev/post/react-native-de-hms-map-kullanimi-ile-harita-uygulamasi-gelistirme"
                        title="Developing an app with React Native and HMS Map (TR)"
                        thumbnail={hmsApp}
                    />
                    <GridItem
                        href="https://mertakcadev.blogspot.com/"
                        title="More on my Blogspot site"
                        thumbnail={blogspot}
                    />
                </SimpleGrid>
            </Section>
        </Container>
    </Article>
)

export default Posts
