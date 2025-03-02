import classNames from "classnames";
import { isEqual, isNumber, isString } from "lodash";
import React, { memo } from "react";
import styles from "./styles.module.scss";

const Magic = React.forwardRef<any, MagicProps>(
  (
    {
      isScroll,
      display,
      fontWeight,
      tag = "div", // tên tag
      className,
      id,
      width,
      children,
      fitWidth,
      horizontal,
      vertical, // hàng dọc
      center, //  dọc - giữa
      between, // tách 2 bên
      wrap, // tự xuống dòng
      dataRight, // bên phải
      full,
      style,
      hover,
      padding,
      margin,
      alignItems,
      justifyContent,
      shadow,
      borderRadius,
      borderColor,
      color,
      background,
      gap = 0.5,
      pHor = -1,
      pVer = -1,
      mHor = -1,
      mVer = -1,
      pTop = -1,
      pBot = -1,
      pLeft = -1,
      pRight = -1,
      mTop = -1,
      mBot = -1,
      mLeft = -1,
      mRight = -1,
      fluid,
      fixed,
      textAlign,
      fontSize,
      isFlex = true,
      block,
      bold,
      italic,
      unit = "px",
      fill,
      filter,
      underline,
      container,
      maxWidth,
      minWidth,
      minHeight,
      maxHeight,
      height,
      wordBreak,
      isBorderTop,
      isBorderBottom,
      letterSpacing,
      lineHeight,
      overflow,
      position,
      cursor,
      flex,
      isScrollPos,
      fullHeight,
      hoverBg,
      isBorder,
      isBorderRight,
      isBorderLeft,
      scrollbarWidth,
      ...args
    },
    ref,
  ) => {
    const Tag = `${tag}` as any;
    const unitRoot = "rem";

    /* Function */
    const convertUnit = (value: number | string) =>
      isNumber(value)
        ? `${isEqual(unit, "px") ? (value * 1) / 16 : value}${unitRoot}`
        : value;

    return (
      <Tag
        {...({
          id,
          ref,
          className: classNames(className, styles.Magic, {
            [styles.padding_top]: pTop >= 0,
            [styles.padding_bot]: pBot >= 0,
            [styles.padding_left]: pLeft >= 0,
            [styles.padding_right]: pRight >= 0,
            [styles.margin_top]: mTop >= 0,
            [styles.margin_bot]: mBot >= 0,
            [styles.margin_left]: mLeft >= 0,
            [styles.margin_right]: mRight >= 0,

            [styles.padding_hor]: pHor >= 0,
            [styles.padding_ver]: pVer >= 0,
            [styles.margin_hor]: mHor >= 0,
            [styles.margin_ver]: mVer >= 0,

            [styles.wrap]: wrap,
            [styles.center]: center,
            [styles.between]: between,

            [styles.vertical]: vertical,
            [styles.horizontal]: horizontal,
            [styles.data_right]: dataRight,

            [styles.hover]: hover,
            [styles.shadow]: shadow,

            [styles.full]: full,
            [styles.fullHeight]: fullHeight,
            [styles.fitWidth]: fitWidth,
            [styles.width]: width,
            [styles.maxWidth]: maxWidth,
            [styles.minWidth]: minWidth,

            [styles.height]: height,
            [styles.maxHeight]: maxHeight,
            [styles.minHeight]: minHeight,

            [styles.container]: container,
            [styles.fluid]: fluid,
            [styles.fixed]: fixed,
            [styles.isFlex]: isFlex,
            [styles.block]: block,
            [styles.isScrollPos]: isScrollPos,
            [styles.fontWeight]: fontWeight,
            [styles.italic]: italic,
            [styles.fontSize]: fontSize,
            [styles.lineHeight]: lineHeight,
            [styles.bold]: bold,
            [styles.textAlign]: textAlign,
            [styles.borderRadius]: borderRadius,
            [styles.justifyContent]: justifyContent,
            [styles.alignItems]: alignItems,
            [styles.borderColor]: borderColor,
            [styles.filter]: filter,
            [styles.underline]: underline,
            [styles.letterSpacing]: letterSpacing,

            [styles.wordBreak]: wordBreak,
            [styles.isBorderTop]: isBorderTop,
            [styles.isBorderBottom]: isBorderBottom,
            [styles.isBorderRight]: isBorderRight,
            [styles.isBorderLeft]: isBorderLeft,

            [styles.isScroll]: isScroll,
            [styles.overflow]: overflow,
            [styles.position]: position,
            [styles.cursor]: cursor,
            [styles.flex]: flex,
            [styles.isBorder]: isBorder,
          }),
          style: {
            ...(padding && {
              padding: isString(padding) ? padding : padding + unitRoot,
            }),
            ...(margin && {
              margin: isString(margin) ? margin : margin + unitRoot,
            }),
            "--hoverBg": hoverBg,
            "--flex": flex,
            "--overflow": overflow,
            "--wordBreak": wordBreak,
            "--maxWidth": maxWidth,
            "--minWidth": minWidth,
            "--width": width,

            "--maxHeight": maxHeight,
            "--minHeight": minHeight,
            "--height": height,

            "--display": display,
            "--alignItems": alignItems,
            "--justifyContent": justifyContent,

            "--letterSpacing": letterSpacing,
            "--textAlign": textAlign,
            "--fontWeight": fontWeight,
            "--cursor": cursor,
            "--position": position,

            background: background ? `var(--${background})` : "",
            color: color ? `var(--${color})` : "",
            borderColor: borderColor ? `var(--${borderColor})` : "",

            ...(lineHeight && { "--lineHeight": convertUnit(lineHeight) }),
            ...(fontSize && { "--fontSize": convertUnit(fontSize) }),
            ...(borderRadius && {
              "--borderRadius": isString(borderRadius)
                ? borderRadius
                : borderRadius + unitRoot,
            }),
            ...(pTop >= 0 && { "--pTop": `${pTop}${unitRoot}` }),
            ...(pBot >= 0 && { "--pBot": `${pBot}${unitRoot}` }),
            ...(pRight >= 0 && { "--pRight": `${pRight}${unitRoot}` }),
            ...(pLeft >= 0 && { "--pLeft": `${pLeft}${unitRoot}` }),

            ...(mTop >= 0 && { "--mTop": `${mTop}${unitRoot}` }),
            ...(mBot >= 0 && { "--mBot": `${mBot}${unitRoot}` }),
            ...(mRight >= 0 && { "--mRight": `${mRight}${unitRoot}` }),
            ...(mLeft >= 0 && { "--mLeft": `${mLeft}${unitRoot}` }),

            ...(pHor >= 0 && { "--pHor": `${pHor}${unitRoot}` }),
            ...(pVer >= 0 && { "--pVer": `${pVer}${unitRoot}` }),
            ...(mHor >= 0 && { "--mHor": `${mHor}${unitRoot}` }),
            ...(mVer >= 0 && { "--mVer": `${mVer}${unitRoot}` }),
            ...(gap >= 0 && { "--gap": `${gap}${unitRoot}` }),
            ...style,
          },
          ...args,
        } as any)}>
        {children}
      </Tag>
    );
  },
);

Magic.displayName = "Magic";
export default memo(Magic);
