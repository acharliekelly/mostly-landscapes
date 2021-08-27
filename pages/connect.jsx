import React from 'react'
import Header from '../compositions/header'
import MyHead from '../shared-components/head'
import styles from '../styles/Home.module.css'

export default function Connect() {
  return (
    <div className={styles.container}>
      <MyHead />

      <Header />

      <main className={styles.main}>
        <div className={styles.todo}>
          Connect
        </div>
      </main>

    </div>
  )
}