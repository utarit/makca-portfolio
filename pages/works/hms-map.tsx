import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import { Article } from '../../components/layouts/article'
import { Paragraph } from '../../components/Paragraph'
import { Banner, Meta, Title } from '../../components/Work'

const Huawei = () => (
    <Article title="Huawei Map Kit">
        <Container>
            <Title>
                HMS Map Kit <Badge>2020</Badge>
            </Title>
            <Paragraph>
                React Native Map Plugin enables users to use native map services
                in their React Native apps.
            </Paragraph>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://developer.huawei.com/consumer/en/doc/development/HMS-Plugin-References-V1/overview-0000001062710399-V1">
                        https://developer.huawei.com/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/HMS-Core/hms-react-native-plugin/">
                        https://github.com/HMS-Core/hms-react-native-plugin/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Android, React Native</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>
                        React.js, TypeScript, React Native, Android Studio, Java
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Blog post</Meta>
                    <Link href="https://medium.com/@mertakca/react-native-ve-hms-map-ile-harita-uygulamas%C4%B1-geli%C5%9Ftirme-1272bb3a6924">
                        Developing a map app with HMS Map and React Native
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
            </List>

            <Banner src="/images/hms-map.jpg" alt="Huawei map icons" />
            <Banner src="/images/hms-map2.png" alt="Huawei map full" />
        </Container>
    </Article>
)

export default Huawei
