import React, {useState, useEffect} from 'react'
import styles from  '../../styles/BlogCard.module.scss';
import Link from 'next/link';
import {motion} from 'framer-motion';
import { Avatar } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import {FaBookReader} from 'react-icons/fa';

export default function BlogCard({id, title, description, imageUrl, lg, autor}) {

    const [_description, setDescription] = useState('')
    const [_title, setTitle] = useState('')

    function shortenStringTitle(str) {
        let words = str.split(" ");
        if (words.length > 7) {
          words = words.slice(0, 7);
          words.push("...");
        }
        return words.join(" ");
    }

    function shortenString(str) {
        let words = str.split(" ");
        if (words.length > 10) {
          words = words.slice(0, 10);
          words.push("...");
        }
        return words.join(" ");
    }

    useEffect(() =>{
        if(!description)return
        let shortTitle = shortenStringTitle(title)
        let shortDescription = shortenString(description);
        setDescription(shortDescription);
        setTitle(shortTitle);
    }, [description]);

  return (
    <motion.div 
        className={styles.blog_card}
        whileHover={{ 
            y: -10,
            boxShadow: '1px 1px 4px #131515',
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 100 }}
    >
        <div className={styles.blog_card_image_container}>
            <CardMedia
                className={styles.blog_card_media}
                component="img"
                alt="green iguana"
                height={lg === 8 ? 300 : 150}
                image={imageUrl}
            />
        </div>
        <div className={styles.blog_card_text_container}> 
            <h2> { lg === 8 ? title : _title } </h2>
            <p>  { lg === 8 ? description : _description} </p>
        </div>
        <div className={styles.blog_card_footer}>
            <div className={styles.blog_card_avatar_container}>
                <Avatar src={autor?.photo}/>
                <span> {autor?.name ? autor.name : 'Avatar Name'} </span>
            </div>
            <Link href={`/blog/${id}`}>
                <div className={styles.blog_card_footer_cta}>
                    <span><FaBookReader /></span>
                    <h4> Leer más...</h4>
                </div>
            </Link>
        </div>
    </motion.div>
  )
}
