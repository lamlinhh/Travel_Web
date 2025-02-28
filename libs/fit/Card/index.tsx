import cx from "classnames";
import React, { forwardRef, memo } from "react";
import styles from "./styles.module.scss";
import Magic from "@/libs/use/magic";

const Card = forwardRef<HTMLDivElement, MagicProps>((props, ref) => {
  return React.cloneElement(
    <Magic
      id="Card"
      borderRadius={0.5}
      pVer={0.5}
      pHor={0.5}
      vertical
      shadow
      ref={ref}
    />,
    {
      ...props,
      className: cx(props.className, styles.Card),
    },
  );
});

export default memo(Card);
