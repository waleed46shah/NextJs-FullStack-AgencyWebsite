import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import ghost from 'public/ghost.jpg'
import { notFound } from 'next/navigation';
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {next:{cache:"no-store"}})
  if (!res.ok) {
    return notFound()
  }

  return res.json()
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br />
            Esse, quis! Velit, odit voluptates cum, impedit praesentium, incidunt ab.<br />
            Ipsam libero accusamus vero sint nostrum qui ea vitae! Cum, dolorum reiciendis! <br />
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className={styles.author}>
            <Image
              src={ghost}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <p>John Doe</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={ghost}
            alt='hehe'
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt et sit maxime ipsa odit pariatur maiores iste, aperiam provident, ea aliquam, sequi perspiciatis eum sapiente officiis molestiae! Quam labore sequi saepe blanditiis facilis quisquam harum inventore minus, quo consectetur ratione?<br/><br/> Ea maiores soluta enim veniam doloremque animi! Esse incidunt eum quisquam adipisci, porro asperiores quos, cumque fuga veniam placeat cum ipsum officiis. Illum perferendis dolor neque corporis enim. <br/><br/>Architecto aut accusamus, aliquam laboriosam facilis voluptatibus ad autem? Fugit iste cupiditate officiis, placeat rem harum laboriosam mollitia quaerat, dolorum obcaecati delectus veniam, nostrum repellendus hic dolores. Facere in sapiente amet iure, dolor animi quod voluptatem, doloremque laboriosam dolorem debitis architecto tenetur! Ea similique aut, itaque modi omnis libero voluptatibus eius recusandae ducimus veniam, saepe quis corrupti quam neque officia reiciendis rem ab delectus sit iste molestias! Repellendus cupiditate aliquam soluta inventore quam natus sit libero enim laborum eum porro quisquam perferendis vel in, culpa quia, deserunt laboriosam? Dicta debitis quod consequuntur qui quasi distinctio numquam commodi necessitatibus dolor laborum quaerat magni tempore perferendis molestiae earum nobis dolorem natus, deleniti officia temporibus pariatur ipsam? Neque, facilis! Provident saepe voluptates, est omnis minus dignissimos. Repudiandae repellat praesentium autem quis, tempora voluptates? Sunt, aliquid.
        </p>
      </div>
    </div>
  )
}

export default BlogPost 