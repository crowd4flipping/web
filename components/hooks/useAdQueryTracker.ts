import { ParsedUrlQuery } from "querystring";
import { useEffect, useState } from "react";

type QueryTracker = {
  utm_ad: string;
};

export const useAdQueryTracker = (parsedQuery: ParsedUrlQuery) => {
  const [tracker, setTracker] = useState<QueryTracker>();

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

  useEffect(() => {
    const utmAdCookie = getUtmAdCookie();
    if (utmAdCookie) {
      setTracker({ utm_ad: utmAdCookie });
      return;
    }

    const { utm_ad } = parsedQuery as QueryTracker;
    if (!utm_ad) return;
    const expirationDate = getCookieExpirationDate();
    document.cookie = `utm_ad=${utm_ad}; expires=${expirationDate.toUTCString()}; secure`;

    setTracker({ utm_ad: utmAdCookie });
  }, [parsedQuery]);

  return { tracker };
};
