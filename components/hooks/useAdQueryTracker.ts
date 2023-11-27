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

    console.log(utm_ad);
    const expirationDate = getCookieExpirationDate();
    const domain = Routes.web();
    console.log(domain)
    document.cookie = `utm_ad=${utm_ad}; expires=${expirationDate.toUTCString()}; domain=${domain}`;
    document.cookie = `utm_ad=${utm_ad};`;
    console.log(document.cookie)
  
  }, [parsedQuery]);

  const getCookieExpirationDate = () => {
    const currentDate = new Date();
    const expirationDate = new Date().setMonth(currentDate.getMonth() + 1);
    return new Date(expirationDate);
  };
};
