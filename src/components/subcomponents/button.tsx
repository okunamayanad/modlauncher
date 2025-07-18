// https://github.com/modrinth/code/blob/main/packages/ui/src/components/base/Button.vue

import React, { useMemo } from "react";
import { ExternalLinkIcon, CircleQuestionMarkIcon } from "lucide-react";

interface ButtonProps {
  link?: string | null;
  external?: boolean;
  action?: (event: React.MouseEvent) => void;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "highlight"
    | "danger"
    | "red"
    | "orange"
    | "green"
    | "blue"
    | "purple"
    | "gray";
  iconOnly?: boolean;
  large?: boolean;
  outline?: boolean;
  transparent?: boolean;
  hoverFilled?: boolean;
  hoverFilledOnly?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  link = null,
  external = false,
  action,
  color = "default",
  iconOnly = false,
  large = false,
  outline = false,
  transparent = false,
  hoverFilled = false,
  hoverFilledOnly = false,
  children,
}) => {
  const accentedButton = useMemo(
    () =>
      [
        "danger",
        "primary",
        "red",
        "orange",
        "green",
        "blue",
        "purple",
        "gray",
      ].includes(color),
    [color]
  );

  const classes = useMemo(() => {
    const classNames = [
      "btn",
      iconOnly && "icon-only",
      large && "btn-large",
      color === "danger" && "btn-danger",
      color === "primary" && "btn-primary",
      color === "secondary" && "btn-secondary",
      color === "highlight" && "btn-highlight",
      color === "red" && "btn-red",
      color === "orange" && "btn-orange",
      color === "green" && "btn-green",
      color === "blue" && "btn-blue",
      color === "purple" && "btn-purple",
      color === "gray" && "btn-gray",
      transparent && "btn-transparent",
      hoverFilled && "btn-hover-filled",
      hoverFilledOnly && "btn-hover-filled-only",
      outline && "btn-outline",
      accentedButton && "color-accent-contrast",
    ].filter(Boolean);

    return classNames.join(" ");
  }, [
    color,
    iconOnly,
    large,
    transparent,
    hoverFilled,
    hoverFilledOnly,
    outline,
    accentedButton,
  ]);

  const handleClick = (event: React.MouseEvent) => {
    if (action) {
      action(event);
    }
  };

  const hasChildren = React.Children.count(children) > 0;

  // Internal link with router-link
  if (link && link.startsWith("/")) {
    return (
      <a
        className={classes}
        href={link}
        target={external ? "_blank" : "_self"}
        onClick={handleClick}
      >
        {children}
        {external && !iconOnly && (
          <ExternalLinkIcon className="external-icon" />
        )}
        {!hasChildren && <CircleQuestionMarkIcon />}
      </a>
    );
  }

  // External link
  if (link) {
    return (
      <a
        className={classes}
        href={link}
        target={external ? "_blank" : "_self"}
        onClick={handleClick}
      >
        {children}
        {external && !iconOnly && (
          <ExternalLinkIcon className="external-icon" />
        )}
        {!hasChildren && <CircleQuestionMarkIcon />}
      </a>
    );
  }

  // Button
  return (
    <button className={classes} onClick={action}>
      {children}
      {!hasChildren && <CircleQuestionMarkIcon />}
    </button>
  );
};

export default Button;
