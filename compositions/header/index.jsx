import React from 'react';
import styles from './header.module.css';
// import Logo from '../../shared-components/Logo';
// import Title from './Title';
import { Image } from 'cloudinary-react';
// import { SiteTitle } from '../../models/text';

export default function Header() {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
      <Image 
            cloudName="cantimaginewhy" 
            publicId="icon/logo" 
            alt="Logo" 
            height={80} 
            className={styles.logo}
        />
        <h1 className={styles.pageTitle}>Mostly Landscapes</h1>
      </div>
      
      
      
    </div>
  )
}