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
                VRThings is a board game platform for VR devices. We aim to
                connect board game enthusiasts and distant friends together with
                the cutting edge technology, virtual reality.
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
