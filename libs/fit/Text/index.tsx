import Magic from "@/libs/use/magic";
import useDeviceType from "@/libs/use/useDeviceType";
import { $Device } from "@/type/global";
import cx from "classnames";
import { eq } from "lodash";
import React, { JSX } from "react";
import styles from "./styles.module.scss";

const Text = ({
  short,
  children,
  isClamp,
  numClamp = 3,
  isDel,
  ...args
}: MagicProps & {
  isClamp?: boolean;
  numClamp?: number;
  isDel?: boolean;
  short?: string;
}): JSX.Element => {
  const { device } = useDeviceType();
  const data = eq(device, $Device.Desktop) ? children : short || children;

  return React.cloneElement(
    <Magic id="Text" tag="p" isFlex alignItems="center" fontSize={12} />,
    {
      ...args,
      className: cx(args.className, styles.Text, {
        [styles.isClamp]: isClamp,
        [styles.isDel]: isDel,
      }),
      style: {
        "--line-clamp": numClamp,
        ...args.style,
      },
    },
    data,
  );
};

export default Text;
