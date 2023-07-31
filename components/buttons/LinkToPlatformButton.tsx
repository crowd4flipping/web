import { Routes } from "@/routes/Routes";
import { LinkButton } from "@crowd4flipping/ui-components";
import { ReactElement, useEffect, useState } from "react";
import { useAdQueryTracker } from "../hooks/useAdQueryTracker";
import { useRouter } from "next/router";

type Variant = Parameters<typeof LinkButton>[number]["variant"];
type FullWidth = Parameters<typeof LinkButton>[number]["fullWidth"];

type Props = {
  children: ReactElement | string;
  variant: Variant;
  fullWidth?: FullWidth;
};

export const LinkToPlatformButton = ({
  children,
  variant,
  fullWidth = false,
}: Props) => {
  const { query } = useRouter();
  const { tracker } = useAdQueryTracker(query);

  const adQueryIsEmpty = !tracker?.utm_ad ? true : false;

  const queryAd = adQueryIsEmpty ? "" : `&${tracker.utm_ad}`;
  const primaryButtonQueries = `?fw${queryAd}`;
  const primaryHref = Routes.app().host().concat(primaryButtonQueries);

  if (variant == "primary")
    return (
      <LinkButton fullWidth={fullWidth} variant="primary" href={primaryHref}>
        {children}
      </LinkButton>
    );

  const secondaryButtonQueries = adQueryIsEmpty ? "" : `?${tracker.utm_ad}`;
  const secondaryHref = Routes.app().host().concat(secondaryButtonQueries);

  return (
    <LinkButton fullWidth={fullWidth} variant="secondary" href={secondaryHref}>
      {children}
    </LinkButton>
  );
};
