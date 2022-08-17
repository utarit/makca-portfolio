import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const ReactWelcomePage = () => (
    <Article title="React Welcome Page">
        <Container>
            <Title>
                React Welcome Page <Badge>2018</Badge>
            </Title>
            <Paragraph>
                Simple beautiful welcome screen for your React and React Native
                apps.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>NPM</Meta>
                    <Link href="https://www.npmjs.com/package/react-welcome-page">
                        https://www.npmjs.com/package/react-welcome-page
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/utarit/react-welcome-page">
                        https://github.com/utarit/react-welcome-page
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Demo</Meta>
                    <Link href="https://utarit.github.io/react-welcome-page-color-form/">
                        https://utarit.github.io/react-welcome-page-color-form/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React, React Native, CSS</span>
                </ListItem>
            </List>

            <Banner
                src="/images/react-welcome-page.gif"
                alt="React Welcome Page Banner"
            />
            <Banner
                src="/images/react-welcome-page-demo.png"
                alt="React Welcome Page Banner 2"
            />
        </Container>
    </Article>
)

export default ReactWelcomePage
