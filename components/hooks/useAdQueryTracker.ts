import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type QueryTracker = {
  utm_ad: string;
};

const getQueryTracker = (parsedQuery: ParsedUrlQuery): QueryTracker => {
  return parsedQuery as QueryTracker;
};

export const useAdQueryTracker = () => {
  const {query} = useRouter();

  const getAdQueryTracker = (): string => {
    const { utm_ad } = getQueryTracker(query);
    if (!utm_ad) return;
    return `utm_ad=${utm_ad}`;
  };

  return { getAdQueryTracker };
};
