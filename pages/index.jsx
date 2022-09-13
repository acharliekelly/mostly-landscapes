import React from 'react'
import Head from '../shared-components/head'
import Header from '../compositions/header'
import NavMenu from '../compositions/NavMenu'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head/>

      <Header />

      <main className={styles.main}>
        <NavMenu />
        <div className={styles.todo}>
          put content here
        </div>
      </main>

    </div>
  )
}