import { ReactElement } from "react";
import styles from "./styles/Tag.module.scss";
import { unhandledType } from "utils/utils";

type DarkMod<TagColor extends readonly string[]> =
  `${TagColor[number]}-darkmod`;

const tagColors = ["green", "blue", "yellow", "orange"] as const;

type TagColorDarkMod = DarkMod<typeof tagColors>;
export type TagColor = (typeof tagColors)[number] | TagColorDarkMod;

type TagProps = {
  children: ReactElement | ReactElement[];
  color: TagColor;
};

export const Tag = ({ children, color }: TagProps) => {
  const tagColor = () => {
    switch (color) {
      case "blue":
        return styles.tag_blue;
      case "blue-darkmod":
        return styles.tag_blue_darkMode;
      case "yellow":
        return styles.tag_yellow;
      case "yellow-darkmod":
        return styles.tag_yellow_darkMode;
      case "green":
        return styles.tag_green;
      case "green-darkmod":
        return styles.tag_green_darkMode;
      case "orange":
        return styles.tag_orange;
      case "orange-darkmod":
        return styles.tag_orange_darkMode;
      default:
        unhandledType(color);
    }
  };

  return (
    <div>
      <div className={`${styles.tag} ${tagColor()}`}>{children}</div>
    </div>
  );
};
