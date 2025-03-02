import cx from "classnames";
import React, { JSX } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Section = ({ ...args }: MagicProps): JSX.Element => {
  return React.cloneElement(
    <Magic id="Section" vertical full tag="section" />,
    {
      ...args,
      className: cx(args.className, styles.Section),
    },
  );
};

export default Section;
