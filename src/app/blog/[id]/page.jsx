import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import ghost from 'public/ghost.jpg'
import { notFound } from 'next/navigation';
async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {next:{cache:"no-store", revalidate:0}})
  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {

  const post = await getData(params.id)
  return {
    title: post.title,
    description: post.desc,
  };
}


const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  console.log(data)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <p className={styles.desc}>
            {data.desc}
          </p>
          <div className={styles.author}>
            <Image
              src={data.image}
              width={40}
              height={40}
              className={styles.avatar}
              alt='author'
            />
            <p>{data.username}</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={data.image}
            alt='hehe'
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          {data.content}
        </p>
      </div>
    </div>
  )
}

export default BlogPost 