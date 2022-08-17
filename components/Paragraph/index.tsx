import React from 'react'
import styles from './styles.module.css'

export const Paragraph = ({ children }: { children: React.ReactNode }) => (
    <p className={styles.Paragraph}>{children}</p>
)
