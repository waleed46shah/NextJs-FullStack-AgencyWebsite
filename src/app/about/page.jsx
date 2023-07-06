import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import img from 'public/about.jpg'
import Button from '@/components/Button/Button'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={img} fill={true} className={styles.img} alt='about image' />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.txtContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Iure voluptates voluptatem sunt nostrum laborum doloremque consequatur maiores ipsa.<br /><br /> 
            Ut possimus excepturi. Ullam, accusantium nam distinctio saepe blanditiis quae assumenda odio nemo dolor ut ducimus iste nihil consequatur expedita inventore, 
            doloremque tempore! Sint nobis odio, amet quam assumenda at, perspiciatis dolore, ullam ut quia praesentium? 
            <br/>
            <br/> 
            Ea necessitatibus libero placeat incidunt odio quae accusamus rem voluptatibus error itaque nesciunt illum, 
            a eveniet suscipit dolorum porro, sit nisi est magnam fuga officia, nostrum totam? Tenetur, vero laborum, 
            facere accusantium quia velit nesciunt assumenda inventore natus, tempore dolorum ea amet. 
            Ipsam quam pariatur impedit?
          </p>
        </div>
        <div className={styles.item}>
        <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In accusantium iusto consequatur velit aperiam, reprehenderit repudiandae officiis laboriosam ad fugit!<br/>
            <br/> 
            In accusantium iusto consequatur velit aperiam, reprehenderit repudiandae officiis laboriosam ad fugit
            <br/><br/>
            - Creative Writing
            <br /><br />
            - Dynamic Websites
            <br /><br />
            - Fast and Handy Mobile Apps
          </p>
          
          <Button text="Contact" url="/contact"/>
        </div>
      </div>
    </div>
  )
}

export default About