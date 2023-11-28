import { Routes } from "@/routes/Routes";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

type QueryTracker = {
  utm_ad: string;
};

export const useSetCookieTracker = (parsedQuery: ParsedUrlQuery) => {
  useEffect(() => {
    const { utm_ad } = parsedQuery as QueryTracker;
    if (!utm_ad) return;

    const expirationDate = getCookieExpirationDate();
    const domain = Routes.web();
    document.cookie = `utm_ad=${utm_ad}; expires=${expirationDate}; domain=${domain}`;
    
  }, [parsedQuery]);

  const getCookieExpirationDate = () => {
    const currentDate = new Date();
    const expirationDate = new Date();
    expirationDate.setMonth(currentDate.getMonth() + 1);

    return expirationDate.toISOString();
  };
 
};
