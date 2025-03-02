import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Main = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic id="Main" tag="main" />, {
    ...args,
    className: cx(args.className, styles.Main),
  });
};

export default Main;
