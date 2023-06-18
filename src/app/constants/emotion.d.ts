import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {};
    border: string;
    borderRadius: string;
    boxShadow: string;
    spacing(value: number): string;
  }
}
