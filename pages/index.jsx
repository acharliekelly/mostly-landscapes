import React from 'react'
import Header from '../compositions/header'
import MyHead from '../shared-components/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <MyHead />

      <Header />

      <main className={styles.main}>
        <div className={styles.todo}>
          put content here
        </div>
      </main>

    </div>
  )
}