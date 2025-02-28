import cx from "classnames";
import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Group = forwardRef<HTMLDivElement, MagicProps>((args, ref) => {
  return React.cloneElement(<Magic ref={ref} id="Group" />, {
    ...args,
    className: cx(args.className, styles.Group),
  });
});

export default Group;
