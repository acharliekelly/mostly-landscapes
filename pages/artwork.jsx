import React from 'react'
import Head from '../shared-components/head'
import Header from '../compositions/header'
import styles from '../styles/Home.module.css'
import NavMenu from '../compositions/NavMenu'

export default function Artwork() {
  return (
    <div className={styles.container}>
      <Head/>

      <Header />

      <main className={styles.main}>
        <NavMenu />
        <div className={styles.todo}>
          Artwork
        </div>
      </main>

    </div>
  )
}