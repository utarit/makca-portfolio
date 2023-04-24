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
                Leveraging my extensive knowledge in first aid, I developed an
                app to help increase public awareness and assist people in
                emergency situations. The app includes gifs demonstrating
                step-by-step procedures and a blog section powered by Firebase
                for additional information.
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
                    <Meta>Web</Meta>
                    <Link href="https://ocit-canki.netlify.app/">
                        https://ocit-canki.netlify.app/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android, Web</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        Flutter, Android, Capacitor, Next.js, Firebase, Tailwind
                        CSS
                    </span>
                </ListItem>
            </List>

            <Banner src="/images/ocit.png" alt="OCİT First Aid Banner" />
        </Container>
    </Article>
)

export default OcitFirstAid
