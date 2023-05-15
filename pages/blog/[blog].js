import React, {useState} from 'react';
import Layout from '../../components/layouts/Layout';
import styles from '../../styles/BlogPage.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {motion} from 'framer-motion';
import WhatsAppButton from '../../components/buttons/WhatsAppButton';
import Footer from '../../components/footers/index';
import { Avatar } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import BlogCard from '../../components/cards/BlogCard';
import NewsLetterSuscription from '../../components/forms/NewsLetterSuscription';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'
import { MdOutlineAccountCircle } from "react-icons/md";
import InstagramIcon from '../../public/images/icons/instagramIcon.webp';


function Index({blogEntry, BlogEntries}) {

  const [blogEntries, setBlogEntries] = useState(BlogEntries.data);

  return (
    <Layout>
      <Head>
          <title>Crowd4Flipping - {`${blogEntry.title}`}</title>
          <meta name="description" content={`${blogEntry.description}`} />        
      </Head>

      <div className={styles.blog_page}>
        <div className={styles.blog_page_child_container}>
          <div className={styles.blog_page_child_left}></div>
          <div className={styles.blog_page_child_center}>
            <div className={styles.blog_page_social_container}>
                <motion.a 
                    href='https://app.crowd4flipping.com' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <MdOutlineAccountCircle className={`${styles.icon}`}/>
                </motion.a>
                <motion.a 
                    href='https://www.facebook.com/Crowd4Flipping' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <FaFacebookSquare className={`${styles.icon} ${styles.face_icon}`}/>
                </motion.a>
                <motion.a
                    href='https://www.instagram.com/crowd4flipping' 
                    target="_blank"
                    rel="noreferrer" 
                    whileHover={{y: -7  }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                    <Image 
                        src={InstagramIcon} 
                        className={`${styles.insta_icon}`}
                        width={50} 
                        height={50} 
                    />
                </motion.a>
            </div>
            <div className={styles.blog_page_blog_header}>
              <h1>{blogEntry.title}</h1>
              <div className={styles.blog_page_avatar_container}>
                <Avatar src={blogEntry.author.photo}/>
                <span>{blogEntry.author.name ? blogEntry.author.name : 'Avatar Name'}</span>
              </div>
            </div>
            <div className={styles.blog_page_content}>
              <CardMedia
                  className={styles.blog_card_media}
                  component="img"
                  alt="green iguana"
                  height="250"
                  image={blogEntry.imageUrl}
              />
              <div className={styles.blog_page_entry_container}>
                <div  
                  className={styles.blog_page_entry}
                  dangerouslySetInnerHTML={{__html: blogEntry.body}} 
                />
              </div>
            </div>
          </div>
          <div className={styles.blog_page_child_right}>
            <div className={styles.blog_page_cta_card_container}>
              <NewsLetterSuscription width={'blog_page'}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.blog_page}>
        <div className={styles.blog_page_child_container}>
          <div className={styles.blog_page_child_left}></div>
          <div className={styles.blog_page_child_center}>
          <h3>Artículos relacionados</h3>
          <br/>
          <br/>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} style={{placeContent: 'center'}}>
              {blogEntries.map((entry, index) => {
                return(
                  <Grid item key={index} lg={6} xs={12}>
                    <BlogCard 
                      id={entry.id} 
                      title={entry.title} 
                      description={entry.description} 
                      imageUrl={entry.imageUrl} 
                      lg={6} 
                    />
                  </Grid>
                ) 
              } )}
              
            </Grid>
          </Box>
          </div>
          <div className={styles.blog_page_child_right}></div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </Layout>
  )
}

export default Index

export async function getServerSideProps(context){

  const id = context.query.blog;
  const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry`
  const [blogEntry, BlogEntries] = await Promise.all([
    fetch(`${api}/${id}`).then((res) => res.json()),
    fetch(`${api}`).then((res) => res.json()),
  ])

  return{
      props: {
        blogEntry,
        BlogEntries
      }
  }

}
