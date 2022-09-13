import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { AppRoutes, Collections, navGallery, navPage } from '../../models/navigation';
import styles from './nav.module.css';

export default function NavMenu() {
    const [ open, setOpen ] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }
    return (
        <List className={styles.leftnav} component="nav">
            <ListItem className={styles.navMain}>
                <Link href="/">Home</Link>
            </ListItem>
            <ListItem className={styles.navMain}>
                <ListItemText primary="Artwork" onClick={handleClick} />
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem className={styles.navItem}>
                        <Link href={navGallery(Collections.LANDSCAPES)}>Landscapes</Link>
                    </ListItem>
                    <ListItem className={styles.navItem}>
                        <Link href={navGallery(Collections.PORTRAITS)}>Portraiture</Link>
                    </ListItem>
                    <ListItem className={styles.navItem}>
                        <Link href={navGallery(Collections.ABSTRACT)}>Abstract</Link>
                    </ListItem>
                    <ListItem className={styles.navItem}>
                        <Link href={navGallery(Collections.CALLIGRAPHY)}>Calligraphy</Link>
                    </ListItem>
                    <ListItem className={styles.navItem}>
                        <Link href={navGallery(Collections.MISCELLANY)}>Miscellany</Link>
                    </ListItem>
                </List>    
            </Collapse> 
            <ListItem className={styles.navMain}>
                <Link href={navPage(AppRoutes.ABOUT)}>About</Link>
            </ListItem>
            <ListItem className={styles.navMain}>
                <Link href={navPage(AppRoutes.CONNECT)}>Connect</Link>
            </ListItem>
        </List>
            
        
    )
}