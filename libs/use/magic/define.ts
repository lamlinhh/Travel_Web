declare global {
  type MagicProps = {
    children?: any;
    unit?: "rem" | "px";
    type?: any;
    name?: any;
    block?: IBool;
    italic?: IBool;
    filter?: IBool;
    isScroll?: IBool;
    isScrollPos?: IBool;
    isFlex?: IBool;
    ref?: any;

    container?: IBool;
    underline?: IBool;

    id?: string;
    tag?: ITag;
    gap?: number;
    className?: string;
    isBorderTop?: IBool;
    isBorderBottom?: IBool;

    isBorderRight?: IBool;
    isBorderLeft?: IBool;
    isBorder?: IBool;
    borderColor?: IColorNames;
    color?: IColorNames;
    background?: IColorNames;
    fill?: IColorNames;

    fitWidth?: IBool;
    fluid?: IBool;
    fixed?: IBool;
    center?: IBool;
    between?: IBool;
    wrap?: IBool;
    dataRight?: IBool;
    full?: IBool;
    fullHeight?: IBool;
    vertical?: IBool;
    horizontal?: IBool;
    hover?: IBool;
    hoverBg?: any;
    shadow?: IBool;
    bold?: IBool;

    pHor?: number;
    pVer?: number;

    mHor?: number;
    mVer?: number;

    pTop?: number;
    pBot?: number;
    pLeft?: number;
    pRight?: number;

    mTop?: number;
    mBot?: number;
    mLeft?: number;
    mRight?: number;

    width?:
      | "auto"
      | "min-content"
      | "max-content"
      | "fit-content"
      | "fit-content"
      | "-webkit-fill-available"
      | "100%"
      | ""
      | string;

    scrollbarWidth?: string;

    paddingHorizontal?: number;
  } & React.HTMLAttributes<HTMLElement> &
    Pick<
      React.CSSProperties,
      | "margin"
      | "alignItems"
      | "borderRadius"
      | "padding"
      | "textAlign"
      | "justifyContent"
      | "fontWeight"
      | "fontSize"
      | "lineHeight"
      | "display"
      | "maxWidth"
      | "minWidth"
      | "wordBreak"
      | "minHeight"
      | "maxHeight"
      | "height"
      | "letterSpacing"
      | "overflow"
      | "position"
      | "cursor"
      | "flex"
    >;
}
export {};
