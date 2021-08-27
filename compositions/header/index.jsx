import React from 'react'
import Link from 'next/link'
import { Image } from 'cloudinary-react'
import styles from './header.module.css'
// import AppRoutes from '../../models/navigation'

export default function Header() {
  
  return (
    <div className={styles.wrapper}>
      <Image 
        cloudName="cantimaginewhy" 
        publicId="icon/ck_logo" 
        className={styles.logo} 
        alt="Logo" 
        height={80} 
      />
      <nav className={styles.menu}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/artwork">
          <a>Artwork</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/connect">
          <a>Connect</a>
        </Link>
      </nav>
    </div>
  )
}