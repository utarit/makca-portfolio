import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const OcitFirstAid = () => (
    <Article title="OCİT First Aid">
        <Container>
            <Title>
                OCİT First Aid <Badge>2018</Badge>
            </Title>
            <Paragraph>
                This is an implementation of my years of first aid knowledge. I
                wanted to spread this awareness as much as I can and developed
                such an app. I aimed that people can use it as a guide in
                emergencies. It comes with gifs that show what to do step by
                step and a blog that uses firebase to shop up some articles.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>App Store</Meta>
                    <Link href="https://play.google.com/store/apps/details?id=com.maks.ocitfirstaid">
                        https://play.google.com/store/apps/details?id=com.maks.ocitfirstaid
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

            <Banner src="/images/ocit.png" alt="OCİT First Aid Banner" />
        </Container>
    </Article>
)

export default OcitFirstAid
