import React from 'react';
import styles from './header.module.css'

export default function Title({ titleText }) {
    return (
        <header className={styles.mainTitle}>{titleText}</header>
    )
}