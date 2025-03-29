import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Anchor = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic id="Anchor" position="relative" />, {
    ...args,
    className: cx(args.className, styles.Anchor),
  });
};

export default Anchor;
