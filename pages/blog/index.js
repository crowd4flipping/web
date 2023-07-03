import React, { useEffect, useState } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import Head from "next/head";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import styles from "../../styles/BlogPage.module.scss";
import { BlogCard } from "../../components/cards/BlogCard";
import NewsLetterSuscription from "../../components/forms/NewsLetterSuscription";
import MiniBlockLoader from "../../components/loaders/MiniBlockLoader";
import { ImDownload } from "react-icons/im";
import { TbListSearch } from "react-icons/tb";

function Index({ BlogEntries }) {
  const [blogEntries, setBlogEntries] = useState(BlogEntries[0].data);
  const [lastDoc, setLastDoc] = useState(
    blogEntries.length > 4
      ? BlogEntries[0].data[3].id
      : BlogEntries[0].lastDocId
  );
  const [message, setMessage] = useState(null);
  const [loadingData, setloadingData] = useState(false);
  const [screen, setScreen] = useState(false);
  const [query, setQuery] = useState("");
  const keys = ["title", "description"];
  const [tags, setTags] = useState(null);
  const [consult, setConsult] = useState("all");
  let currentIndex = 0;

  const loadMoreEntries = async () => {
    setloadingData(true);
    try {
      const api = `https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry?lastDoc=${lastDoc}`;
      const response = await fetch(api);
      const data = await response.json();
      if (data.status === 200) {
        setBlogEntries([...blogEntries, ...data.data]);
        setLastDoc(data.data[data.data.length - 1].id);
        setloadingData(false);
      } else {
        setMessage(data.message);
        setloadingData(false);
      }
    } catch (error) {
      console.log(error.message);
      setloadingData(false);
    }
  };

  useEffect(() => {
    let document = window.screen.width;
    if (document < 991) {
      setScreen(true);
      return;
    }
  }, []);

  const search = () => {
    let filteredEntries = blogEntries;
    if (consult !== "all") {
      filteredEntries = filteredEntries.filter((entry) => {
        return entry?.tags.includes(consult);
      });
    }

    return filteredEntries?.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  const getAllTagsFromBlogEntries = () => {
    const tags = new Set();
    blogEntries.forEach((doc) => {
      const blogEntry = doc;
      blogEntry.tags?.forEach((tag) => {
        tags.add(tag);
      });
    });
    return setTags(Array.from(tags));
  };

  useEffect(() => {
    if (!blogEntries) return;
    getAllTagsFromBlogEntries();
  }, []);

  return (
    <PageLayout fixedNavBar>
      <Head>
        <title>Crowd4Flipping - Blog</title>
        <meta
          name="description"
          content="Todo lo que necesitas saber sobre inversión inmobiliaria participativa, crowdlending y tecnología blockchain."
        />
      </Head>

      <div className={styles.blog_page}>
        <div className={styles.title_container}>
          <h1 className={styles.blogHero_title}>Todo lo que necesitas saber</h1>
        </div>

        <div className={styles.blog_page_hero}>
          <div>
            <h2 className={styles.blogHero_subTitle}>
              Inversión inmobiliaria participativa, crowdlending y tecnología
              blockchain
            </h2>
          </div>
          <div className={styles.blogHero_tagsContainer}>
            {tags?.map((item, key) => (
              <span
                key={key}
                onClick={() => setConsult(item)}
                className={styles.blogHero_tag}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.blog_page_container}>
          <div className={styles.blog_page_header}>
            <div className={styles.blog_page_searcher_container}>
              <span
                onClick={() => {
                  setMessage(null);
                  setConsult("all");
                  setQuery("");
                }}
                className={styles.blog_page_searcher_cleaner_button}
              >
                Limpiar busqueda
              </span>

              <div className={styles.blog_page_input_container}>
                <input
                  type="text"
                  placeholder="Buscar..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <TbListSearch />
              </div>
            </div>
          </div>

          <div className={styles.blog_page_blog_articles}>
            {blogEntries &&
              search().map((entry) => {
                return (
                  <BlogCard
                    key={entry.id}
                    id={entry.id}
                    lg={8}
                    title={entry.title}
                    description={entry.description}
                    imageUrl={entry.imageUrl}
                    author={entry.author}
                  />
                );
              })}

            {message !== null ? (
              <div className={styles.blog_page_more_articles_container}>
                <span>{message}</span>
              </div>
            ) : (
              <div className={styles.blog_page_more_articles_container}>
                {loadingData ? (
                  <MiniBlockLoader />
                ) : (
                  <div
                    className={styles.blog_page_more_articles_button}
                    onClick={() => loadMoreEntries()}
                  >
                    <span>
                      <ImDownload />{" "}
                    </span>
                    <p>Cargar más artículos</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Index;

export async function getStaticProps() {
  const api =
    "https://us-central1-crowd4flipping-app.cloudfunctions.net/app/api/create-blog-entry";
  const BlogEntries = await Promise.all([
    fetch(`${api}`).then((res) => res.json()),
  ]);
  return {
    props: {
      BlogEntries,
    },
    revalidate: 30,
  };
}
