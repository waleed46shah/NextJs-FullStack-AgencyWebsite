import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import wolf from 'public/wolf.jpg'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next:{cache:"no-store"}})
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}




const Blog = async () => {

  const data = await getData();
  return (
    <div className={styles.mainContainer}>

      {data.map(item => (

          
       
      < Link key={item.id} href = "/blog/testId" className = { styles.container } >
        <div className={styles.imgContainer}>
          <Image
            src={wolf}
            alt='img'
            width={400}
            height={250}
            className={styles.img}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}> desc</p>
        </div>
      </Link>
    ))}
    </div >
  )
}

export default Blog