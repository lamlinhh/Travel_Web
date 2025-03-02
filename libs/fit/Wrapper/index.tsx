import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Wrapper = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic id="Wrapper" />, {
    ...args,
    className: cx(args.className, styles.Wrapper),
  });
};

export default Wrapper;
