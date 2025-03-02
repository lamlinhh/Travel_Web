import { JSX } from "react";
import Actions from "./fit/Actions";
import Anchor from "./fit/Anchor";
import Area from "./fit/Area";
import Block from "./fit/Block";
import Container from "./fit/Container";
import Core from "./fit/Core";
import Cover from "./fit/Cover";
import Group from "./fit/Group";
import Layout from "./fit/Layout";
import Main from "./fit/Main";
import Section from "./fit/Section";
import Text from "./fit/Text";
import Wrapper from "./fit/Wrapper";
import Yard from "./fit/Yard";
import { _get, _listenEvent } from "./js";

export {
  Actions,
  Anchor,
  Area,
  Block,
  Container,
  Core,
  Cover,
  Group,
  Layout,
  Main,
  Section,
  Text,
  Wrapper,
  Yard,
};

export { _get, _listenEvent };

declare global {
  type IOptionCheck =
    | {
        key: string;
        label: JSX.Element | string;
        value: number | string | any;
        showIcon?: boolean;
        noClickLabel?: boolean;
        uuid?: any;
        disable?: boolean;
        children?: any;
        parent?: string;
      }
    | { uuid?: any; [T: string]: any };
}
