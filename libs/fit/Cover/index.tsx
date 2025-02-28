import cx from "classnames";
import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Cover = forwardRef<HTMLDivElement, MagicProps>((args, ref) => {
  return React.cloneElement(<Magic ref={ref} id="Cover" />, {
    ...args,
    className: cx(args.className, styles.Cover),
  });
});

export default Cover;
