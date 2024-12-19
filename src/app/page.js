'use client'
import Image from "next/image";
import styles from "./page.module.css";
import {useRouter} from "next/navigation";
export default function Home() {
  const router =useRouter();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <p>hello from natin</p>
      <button onClick={()=>router.push('./login')}>go to login</button>
      </main> 
      
    </div>
  );
}
