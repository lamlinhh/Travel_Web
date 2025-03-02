import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Area = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic id="Area" full />, {
    ...args,
    className: cx(args.className, styles.Area),
  });
};

export default Area;
