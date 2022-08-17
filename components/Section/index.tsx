import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

interface Props {
    children: React.ReactNode
    delay?: number
}

export const Section = ({ children, delay = 0 }: Props) => (
    <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay }}
    >
        <Box mb={6}>{children}</Box>
    </motion.div>
)
