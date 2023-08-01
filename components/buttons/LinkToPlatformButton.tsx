import { Routes } from "@/routes/Routes";
import { LinkButton } from "@crowd4flipping/ui-components";
import { ReactElement } from "react";

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
  const primaryButtonQueries = "?fw";
  const appBaseUrl = Routes.app().host();
  const primaryHref = appBaseUrl.concat(primaryButtonQueries);

  if (variant == "primary")
    return (
      <LinkButton fullWidth={fullWidth} variant="primary" href={primaryHref}>
        {children}
      </LinkButton>
    );

  return (
    <LinkButton fullWidth={fullWidth} variant="secondary" href={appBaseUrl}>
      {children}
    </LinkButton>
  );
};
