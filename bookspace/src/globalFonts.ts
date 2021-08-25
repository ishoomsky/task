import { createGlobalStyle } from 'styled-components';

import RobotoThinWoff2 from "./assets/fonts/Roboto/Robotothin.woff2";
import RobotoThinWoff from "./assets/fonts/Roboto/Robotothin.woff";
import RobotoThinTtf from "./assets/fonts/Roboto/Robotothin.ttf";

import RobotoThinItalicWoff2 from "./assets/fonts/Roboto/Robotothinitalic.woff2";
import RobotoThinItalicWoff from "./assets/fonts/Roboto/Robotothinitalic.woff";
import RobotoThinItalicTtf from "./assets/fonts/Roboto/Robotothinitalic.ttf";

import RobotoLightWoff2 from "./assets/fonts/Roboto/Robotolight.woff2";
import RobotoLightWoff from "./assets/fonts/Roboto/Robotolight.woff";
import RobotoLightTtf from "./assets/fonts/Roboto/Robotolight.ttf";

import RobotoLightItalicWoff2 from "./assets/fonts/Roboto/Robotolightitalic.woff2";
import RobotoLightItalicWoff from "./assets/fonts/Roboto/Robotolightitalic.woff";
import RobotoLightItalicTtf from "./assets/fonts/Roboto/Robotolightitalic.ttf";

import RobotoWoff2 from "./assets/fonts/Roboto/Roboto.woff2";
import RobotoWoff from "./assets/fonts/Roboto/Roboto.woff";
import RobotoTtf from "./assets/fonts/Roboto/Roboto.ttf";

import RobotoItalicWoff2 from "./assets/fonts/Roboto/Robotoitalic.woff2";
import RobotoItalicWoff from "./assets/fonts/Roboto/Robotoitalic.woff";
import RobotoItalicTtf from "./assets/fonts/Roboto/Robotoitalic.ttf";

import RobotoMediumWoff2 from "./assets/fonts/Roboto/Robotomedium.woff2";
import RobotoMediumWoff from "./assets/fonts/Roboto/Robotomedium.woff";
import RobotoMediumTtf from "./assets/fonts/Roboto/Robotomedium.ttf";

import RobotoMediumItalicWoff2 from "./assets/fonts/Roboto/Robotomediumitalic.woff2";
import RobotoMediumItalicWoff from "./assets/fonts/Roboto/Robotomediumitalic.woff";
import RobotoMediumItalicTtf from "./assets/fonts/Roboto/Robotomediumitalic.ttf";

import RobotoBoldWoff2 from "./assets/fonts/Roboto/Robotobold.woff2";
import RobotoBoldWoff from "./assets/fonts/Roboto/Robotobold.woff";
import RobotoBoldTtf from "./assets/fonts/Roboto/Robotobold.ttf";

import RobotoBoldItalicWoff2 from "./assets/fonts/Roboto/Robotobolditalic.woff2";
import RobotoBoldItalicWoff from "./assets/fonts/Roboto/Robotobolditalic.woff";
import RobotoBoldItalicTtf from "./assets/fonts/Roboto/Robotobolditalic.ttf";

import RobotoBlackWoff2 from "./assets/fonts/Roboto/Robotoblack.woff2";
import RobotoBlackWoff from "./assets/fonts/Roboto/Robotoblack.woff";
import RobotoBlackTtf from "./assets/fonts/Roboto/Robotoblack.ttf";

import RobotoBlackItalicWoff2 from "./assets/fonts/Roboto/Robotoblackitalic.woff2";
import RobotoBlackItalicWoff from "./assets/fonts/Roboto/Robotoblackitalic.woff";
import RobotoBlackItalicTtf from "./assets/fonts/Roboto/Robotoblackitalic.ttf";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Thin"), local("Roboto-Thin"),
      url(${RobotoThinWoff2}) format("woff2"),
      url(${RobotoThinWoff}) format("woff"),
      url(${RobotoThinTtf}) format("truetype");
    font-weight: 100;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Thin Italic"), local("Roboto-ThinItalic"),
      url(${RobotoThinItalicWoff2}) format("woff2"),
      url(${RobotoThinItalicWoff}) format("woff"),
      url(${RobotoThinItalicTtf}) format("truetype");
    font-weight: 100;
    font-style: italic;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Light"), local("Roboto-Light"),
      url(${RobotoLightWoff2}) format("woff2"),
      url(${RobotoLightWoff}) format("woff"),
      url(${RobotoLightTtf}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Light Italic"), local("Roboto-LightItalic"),
      url(${RobotoLightItalicWoff2}) format("woff2"),
      url(${RobotoLightItalicWoff}) format("woff"),
      url(${RobotoLightItalicTtf}) format("truetype");
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto"), local("Roboto-Regular"),
      url(${RobotoWoff2}) format("woff2"),
      url(${RobotoWoff}) format("woff"),
      url(${RobotoTtf}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Italic"), local("Roboto-Italic"),
      url(${RobotoItalicWoff2}) format("woff2"),
      url(${RobotoItalicWoff}) format("woff"),
      url(${RobotoItalicTtf}) format("truetype");
    font-weight: 400;
    font-style: italic;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Medium"), local("Roboto-Medium"),
      url(${RobotoMediumWoff2}) format("woff2"),
      url(${RobotoMediumWoff}) format("woff"),
      url(${RobotoMediumTtf}) format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Medium Italic"), local("Roboto-MediumItalic"),
      url(${RobotoMediumItalicWoff2}) format("woff2"),
      url(${RobotoMediumItalicWoff}) format("woff"),
      url(${RobotoMediumItalicTtf}) format("truetype");
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Bold"), local("Roboto-Bold"),
      url(${RobotoBoldWoff2}) format("woff2"),
      url(${RobotoBoldWoff}) format("woff"),
      url(${RobotoBoldTtf}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Bold Italic"), local("Roboto-BoldItalic"),
      url(${RobotoBoldItalicWoff2}) format("woff2"),
      url(${RobotoBoldItalicWoff}) format("woff"),
      url(${RobotoBoldItalicTtf}) format("truetype");
    font-weight: 700;
    font-style: italic;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Black"), local("Roboto-Black"),
      url(${RobotoBlackWoff2}) format("woff2"),
      url(${RobotoBlackWoff}) format("woff"),
      url(${RobotoBlackTtf}) format("truetype");
    font-weight: 900;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto Black Italic"), local("Roboto-BlackItalic"),
      url(${RobotoBlackItalicWoff2}) format("woff2"),
      url(${RobotoBlackItalicWoff}) format("woff"),
      url(${RobotoBlackItalicTtf}) format("truetype");
    font-weight: 900;
    font-style: italic;
  }
`;

export default GlobalFonts;
