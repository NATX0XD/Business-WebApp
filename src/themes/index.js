// @/theme/index.js
"use client";
import { ConfigProvider, theme } from "antd";
import Palette from "./palette";
import Components from "./components";
import Breakpoints from "./breakpoint";
import dayjs from "dayjs";
import "dayjs/locale/th";
import thTH from "antd/lib/locale/th_TH";

dayjs.locale("th");
import localFont from "next/font/local";
const miSansThai = localFont({
  src: [
    {
      path: "../fonts/MiSansThai.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MiSansLatin-Normal.woff",
      weight: "400",
      style: "normal",
    },
  ],
});
const ThemeComponent = ({ children}) => {
  // const palette = Palette; 

  const themes = {
    token: {
      ...Palette(),
      ...Breakpoints(),
      fontFamily: miSansThai.style.fontFamily,
    },
    components: Components(),
 
  };

  return (
    <ConfigProvider theme={themes} locale={thTH}>
      {children}
    </ConfigProvider>
  );
};


export default ThemeComponent;


