import { Text, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import styles from './styles.module.css'

export const Logo = () => {
    return (
        <Link href="/">
            <a>
                <span className={styles.Logo}>
                    <Image
                        style={{
                            filter: useColorModeValue('none', 'invert(100%)'),
                        }}
                        src="/images/footprint.png"
                        width={20}
                        height={20}
                        alt="logo"
                    />
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily="M PLUS Rounded 1c"
                        fontWeight="bold"
                        ml={3}
                    >
                        Mert Akça
                    </Text>
                </span>
            </a>
        </Link>
    )
}
