import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    colors: {
            black: string
            blue: string
            darkBlue: string
            jelly: string;
            mediumGray: string
            peanutButter: string
            primaryBlue: string;
            success: string
            warning: string
            white: string
        }
    }
}