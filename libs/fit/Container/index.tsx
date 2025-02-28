import cx from "classnames";
import React, { forwardRef } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Container = forwardRef<HTMLDivElement, MagicProps>((props, ref) => {
  return React.cloneElement(
    <Magic
      tag="section"
      id="Container"
      ref={ref}
      container
      vertical
      position="relative"
      full
      padding={0.5}
    />,
    {
      ...props,
      className: cx(props.className, styles.Container),
    },
  );
});

export default Container;
