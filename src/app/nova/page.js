import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'


export default function Nova() {

    
  return (
    <div className="nova">
<Link href="/">
<Image src="/next.svg"          className={styles.vercelLogo}
 width={100} height={100}></Image>
 </Link>


    </div>
    )
}