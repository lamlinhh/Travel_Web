import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Block = ({ id = "Block", ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic full />, {
    ...args,
    id,
    className: cx(args.className, styles.Block),
  });
};

export default Block;
