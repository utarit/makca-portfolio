import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const VRThings = () => (
    <Article title="VRThings">
        <Container>
            <Title>
                VRThings <Badge>2020</Badge>
            </Title>
            <Paragraph>
                VRThings is a board game platform for VR devices that brings
                enthusiasts and distant friends together through cutting-edge
                virtual reality. Enjoy realistic environments and multiplayer
                support, play various games with 2 to 6 people, and experience
                it all with your Oculus Quest wireless headset and VR
                controllers.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://senior.ceng.metu.edu.tr/2020/vrthings/">
                        https://senior.ceng.metu.edu.tr/2020/vrthings/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Oculus, Windows</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Unity, C#</span>
                </ListItem>
                <ListItem>
                    <Meta>Video</Meta>
                    <Link href="https://www.youtube.com/watch?v=o9STC2rdFmE">
                        https://www.youtube.com/watch?v=o9STC2rdFmE
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <Banner src="/images/vrthings.png" alt="VRThings Banner" />
        </Container>
    </Article>
)

export default VRThings
