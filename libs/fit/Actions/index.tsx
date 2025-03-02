import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Actions = ({ ...args }): JSX.Element => {
  return React.cloneElement(<Magic id="Actions" />, {
    ...args,
    className: cx(args.className, styles.Actions),
  });
};

export default Actions;
