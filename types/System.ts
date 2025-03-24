import { reduce } from "lodash";
import { JSX } from "react";

declare global {
  type IBool = boolean | 0 | 1;
  type ITag = keyof JSX.IntrinsicElements;
  type IColorNames = (typeof arrColors)[number];
  interface Window {
    [T: string]: any;
  }
}

const arrColors = [
  "primary-main",
  "info-main",
  "info-mid",
  "info-light",
  "info-bright",
  "info-dark",
  "secondary-dark",
  "bg-disable_button",
  "bg-disable",
  "bg-readonly",
  "bg-secondary",
  "bg-teriary",
  "danger-bright",
  "danger-main",
  "gadient-green-enable",
  "normal",
  "overlay",
  "primary-active",
  "primary-brand",
  "primary-bright",
  "primary-dark",
  "primary-hover",
  "primary-light",
  "primary-brand_light",
  "primary-brand_mid",
  "primary-brand",
  "primary-text",
  "secondary-main",
  "secondary-normal",
  "text-primary",
  "text-secondary",
  "text-stroke",
  "text-teriary",
  "transparents",
  "warning-main",
  "success-main",
  "whites",
  "blue-dark",
  "blue-light",
  "brand-dark",
  "brand-light",
  "brown-dark",
  "brown-light",
  "cyan-dark",
  "cyan-light",
  "gray-dark",
  "gray-light",
  "green-dark",
  "green-light",
  "navy-dark",
  "navy-light",
  "orange-dark",
  "orange-light",
  "pink-dark",
  "pink-light",
  "red-dark",
  "red-light",
  "violet-dark",
  "violet-light",
  "yellow-dark",
  "yellow-light",
  "gradient-green-enable",
  "gradient-green-hover",
  "gradient-green-pressed",
  "gradient-blue-enable",
  "gradient-blue-hover",
  "gradient-blue-pressed",
  "gradient-yellow-enable",
  "gradient-yellow-hover",
  "gradient-yellow-pressed",
  "gradient-red-enable",
  "gradient-red-hover",
  "gradient-red-pressed",
] as const;

const Colors = reduce(
  arrColors,
  (a, c) => {
    a[c] = c;
    return a;
  },
  {} as Record<IColorNames, IColorNames>,
);

export { Colors };
