'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Pop from '../../popup/pop'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {

  const [pop , setPop] = useState(false);
  return (
    <>
    {pop ? <Pop hide={setPop}/> : <>
    <h1 className={styles.heading} > Our Clients</h1>
      <div className={styles.cardContainer}>
        <p className={styles.kohler} onClick={()=>{setPop(true)}}>POP UP</p>
      </div>

      <div className={styles.cardContainer}>

      
      <a href ="https://master--phenomenal-tanuki-eaaacf.netlify.app/tab" target='_blank'>
        <p className={styles.kohler} > NEW TAB </p>
      </a>
      
      </div>
    </> }
      

      </>
  )
}
