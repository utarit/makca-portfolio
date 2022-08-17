import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const OcitBlog = () => (
    <Article title="OCİT Blog">
        <Container>
            <Title>
                OCİT Blog <Badge>2022</Badge>
            </Title>
            <Paragraph>
                Official website of METU Lifesaving and First Aid Society.
                People can read the latest news, get to know us and can comment
                on the blog posts.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://ocit.vercel.app/">
                        https://ocit.vercel.app/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        React, TypeScript, Next.js, Tailwind CSS, GraphQL,
                        GraphCMS
                    </span>
                </ListItem>
            </List>

            <Banner
                src="/images/ocit-blog.png"
                alt="OCİT First Aid Blog Banner"
            />
            <Banner
                src="/images/ocit-blog2.png"
                alt="OCİT First Aid Blog Banner 2"
            />
        </Container>
    </Article>
)

export default OcitBlog
