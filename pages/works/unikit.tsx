import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const Unikit = () => (
    <Article title="UniKit">
        <Container>
            <Title>
                UniKit <Badge>2019</Badge>
            </Title>
            <Paragraph>
                UniKit is an app designed to assist students in managing their
                school life as efficiently as possible. UniKit communicates with
                the school&apos;s information system and utilizes a local
                database to store courses and to-do data.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>App Store</Meta>
                    <Link href="https://play.google.com/store/apps/details?id=com.maks.metu_buddy">
                        https://play.google.com/store/apps/details?id=com.maks.metu_buddy
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/utarit/metu_buddy">
                        https://github.com/utarit/metu_buddy
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>

                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android</span>
                </ListItem>

                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Flutter, Android</span>
                </ListItem>
            </List>

            <Banner src="/images/unikit.png" alt="Unikit Banner" />
            <Banner src="/images/unikit2.png" alt="Unikit Banner 2" />
        </Container>
    </Article>
)

export default Unikit
