import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Core = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic id="Core" vertical full />, {
    ...args,
    className: cx(args.className, styles.Core),
  });
};

export default Core;
