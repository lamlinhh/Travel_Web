import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Yard = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(<Magic id="Yard" />, {
    ...args,
    className: cx(args.className, styles.Yard),
  });
};

export default Yard;
