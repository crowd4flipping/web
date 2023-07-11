import { ReactElement } from "react";
import cardStyles from "../styles/Card.module.scss";
import { EmptyInfoCard } from "./EmptyInfoCard";
import "@crowd4flipping/ui-components";

type InfoCard = Parameters<typeof EmptyInfoCard>[number] & { title: string };

export const InfoCard = ({
  title,
  children,
  width,
  bgColor,
}: InfoCard) => {
  return (
    <EmptyInfoCard bgColor={bgColor} width={width}>
      <h2 >{title}</h2>
      <br />
      <div>{children}</div>
    </EmptyInfoCard>
  );
};
