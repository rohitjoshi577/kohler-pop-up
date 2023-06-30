'use client';
import Image from 'next/image'
import styles from './page.module.css'
import Pop from '../../popup/pop'
import { useState } from 'react';

export default function Home() {

  const [pop , setPop] = useState(false);
  return (
    <>
    {pop ? <Pop hide={setPop}/> : <>
    <h1 className={styles.heading} > Our Clients</h1>
      <div className={styles.cardContainer}>
        <p className={styles.kohler} onClick={()=>{setPop(true)}}>KOHLER</p>
      </div>
    </> }
      

      </>
  )
}
