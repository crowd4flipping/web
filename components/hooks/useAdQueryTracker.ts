import { NextRouter, useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type QueryTracker = {
  utm_ad: string;
};

export const useAdQueryTracker = (parsedQuery: ParsedUrlQuery) => {

  const getAdQueryTracker = (): {
    concatValue: string;
    keyValue: { utm_ad: string };
  } => {
    const { utm_ad } = parsedQuery as QueryTracker;
    if (!utm_ad) return { concatValue: "", keyValue: { utm_ad: "" } };
    return { concatValue: `utm_ad=${utm_ad}`, keyValue: { utm_ad } };
  };

  return { getAdQueryTracker };
};
