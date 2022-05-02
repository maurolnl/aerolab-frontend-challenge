import "styled-components";
import {createGlobalStyle} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
    };
  }
  export interface TextStyle {
    FontFamily: string;
    FontSize: string;
    FontWeight: string;
    LineHeight: string;
    LetterSpacing: string;
    FontVariant: string;
  }

  export interface Gradient {
    Color: string;
    TextFillColor: string;
    BackgroundClip: string;
  }
}
