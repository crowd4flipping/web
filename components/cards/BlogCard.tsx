import React from "react";
import styles from "../../styles/BlogCard.module.scss";
import Link from "next/link";
import { Avatar } from "@mui/material";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;

  author?: {
    name: string;
    photo: string;
  };
};

export const BlogCard = ({
  id,
  title,
  description,
  imageUrl,

  author,
}: Props) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className={styles.blog_card}>
        <Image
          width={560}
          height={300}
          alt={title}
          src={imageUrl}
          objectFit="cover"
        />

        <div className={styles.blog_card_content}>
          <div className={styles.blog_card_header}>
            <h3> {title} </h3>
            <p className={styles.blog_card_description}>{description}</p>
          </div>

          <div className={styles.blog_card_avatar_container}>
            <Avatar src={author?.photo} />
            <span> {author?.name ? author.name : "Avatar Name"} </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
