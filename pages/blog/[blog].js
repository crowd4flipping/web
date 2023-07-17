import React, { useState } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import styles from "../../styles/BlogPage.module.scss";
import Head from "next/head";
import Image from "next/image";
import { Avatar } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { BlogCard } from "../../components/cards/BlogCard";
import { NewsLetterSuscription } from "../../components/forms/NewsLetterSuscription";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";
import InstagramIcon from "../../public/images/icons/instagramIcon.webp";

function Index({ blogEntry, BlogEntries }) {
  const [blogEntries, setBlogEntries] = useState(BlogEntries?.data);
  if (!blogEntry) return;

  return (
    <>
      <Head>
        <title>Crowd4Flipping | {blogEntry.title}</title>
        <meta name="description" content={`${blogEntry.description}`} />
      </Head>

      <PageLayout fixedNavBar>
        <div className={styles.blog_page}>
          <div className={styles.blog_page_child_container}>
            <div className={styles.blog_page_child_left}></div>
            <div className={styles.blog_page_child_center}>
              <div className={styles.blog_page_social_container}>
                <a
                  href="https://app.crowd4flipping.com"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <MdOutlineAccountCircle className={`${styles.icon}`} />
                </a>
                <a
                  href="https://www.facebook.com/Crowd4Flipping"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <FaFacebookSquare
                    className={`${styles.icon} ${styles.face_icon}`}
                  />
                </a>
                <a
                  href="https://www.instagram.com/crowd4flipping"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={InstagramIcon}
                    className={`${styles.insta_icon}`}
                    width={50}
                    height={50}
                    alt="Instagram Icon"
                  />
                </a>
              </div>
              <div className={styles.blog_page_blog_header}>
                <h1>{blogEntry.title}</h1>
                <div className={styles.blog_page_avatar_container}>
                  <Avatar src={blogEntry.author.photo} />
                  <span>
                    {blogEntry.author.name
                      ? blogEntry.author.name
                      : "Avatar Name"}
                  </span>
                </div>
                <div className={styles.blog_page_avatar_container}>
                  {blogEntry.tags?.map((item, key) => (
                    <span key={key}> #{item}</span>
                  ))}
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
                    dangerouslySetInnerHTML={{ __html: blogEntry.body }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.blog_page_child_right}>
              <div className={styles.blog_page_cta_card_container}>
                <NewsLetterSuscription width={"blog_page"} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.blog_page}>
          <div className={styles.blog_page_child_container}>
            <div className={styles.blog_page_child_left}></div>
            <div className={styles.blog_page_child_center}>
              <h3>Artículos relacionados</h3>
              <br />
              <br />
              <div className={styles.blog_articles_list}>
                {blogEntries?.map((entry) => {
                  return (
                    <div
                      key={entry.id}
                      className={styles.blog_articles_list_article}
                    >
                      <BlogCard
                        id={entry.id}
                        title={entry.title}
                        description={entry.description}
                        imageUrl={entry.imageUrl}
                        author={entry.author}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={styles.blog_page_child_right}></div>
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export default Index;

import { loadPosts } from "../../lib/load-posts";

export async function getStaticPaths() {
  const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry`;
  const entries = await fetch(`${api}`).then((res) => res.json());
  const paths = entries.data.map((entry) => ({ params: { blog: entry.id } }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const blog = context.params.blog;
  const { blogEntry, BlogEntries } = await loadPosts(blog);
  return {
    props: {
      blogEntry,
      BlogEntries,
    },
    revalidate: 60,
  };
}
