import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const Plentific = () => (
    <Article title="Plentific">
        <Container>
            <Title>
                Plentific <Badge>2021</Badge>
            </Title>
            <Paragraph>
                Plentific empowers landlords and property managers to deliver
                repairs, compliance, voids and resident services through a
                simple work order management platform and a network of trade
                professionals.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.plentific.com/">
                        https://www.plentific.com/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>React.js, TypeScript, React Query, Stroybook</span>
                </ListItem>
            </List>

            <Banner src="/images/plentific.png" alt="Plentific Banner" />
            <Banner src="/images/plentific2.png" alt="Plentific Banner 2" />
        </Container>
    </Article>
)

export default Plentific
