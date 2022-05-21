/* eslint-disable no-unused-vars */
import { CSSProp, CSSObject } from "styled-components";

declare module "react" {
  interface Attributes {
    $css?: CSSProp | CSSObject;
  }
}
