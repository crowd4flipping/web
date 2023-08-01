import { Routes } from "@/routes/Routes";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from "react";

type QueryTracker = {
  utm_ad: string;
};

export const useSetCookieTracker = (parsedQuery: ParsedUrlQuery) => {
  useEffect(() => {
    const utmAdCookie = getUtmAdCookie();
    if (utmAdCookie) return;

    const { utm_ad } = parsedQuery as QueryTracker;
    if (!utm_ad) return;

    const expirationDate = getCookieExpirationDate();
    const domain = Routes.web();
    document.cookie = `utm_ad=${utm_ad}; expires=${expirationDate.toUTCString()}; secure; domain=${domain}`;
  }, [parsedQuery]);

  const getCookieExpirationDate = () => {
    const currentDate = new Date();
    const expirationDate = new Date().setMonth(currentDate.getMonth() + 1);
    return new Date(expirationDate);
  };

  const getUtmAdCookie = () => {
    return document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("utm_ad="));
  };
};
