import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Layout = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(
    <Magic id="Layout" tag="section" vertical gap={0} />,
    {
      ...args,
      className: cx(args.className, styles.Layout),
    },
  );
};

export default Layout;
