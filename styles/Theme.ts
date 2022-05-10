import {Gradient, TextStyle} from "styled-components";

export const Colors = {
  Neutral: {
    900: "#252F3D",
    600: "#7C899C",
    500: "#8FA3BF",
    300: "#DAE4F2",
    200: "#E6EDF7",
    100: "#F5F9FF",
    0: "#FFFFFF",
  },
  Wave: "#F2F7FF1A",
  Brand: {
    Default: {
      Color: "linear-gradient(102.47deg, #176FEB 0%, #FF80FF 100%)",
      TextFillColor: "transparent",
      BackgroundClip: "text",
    },
    DefaultExtended: {
      Color: "linear-gradient(102.47deg, #176FEB 0%, #FF80FF 300%)",
      TextFillColor: "transparent",
      BackgroundClip: "text",
    },
    DefaultSemiExtended: {
      Color: "linear-gradient(102.47deg, #176FEB 0%, #FF80FF 180%)",
      TextFillColor: "transparent",
      BackgroundClip: "text",
    },
    Hover: {
      Color: "linear-gradient(102.47deg, #1667D9 0%, #F279F2 100%)",
      TextFillColor: "transparent",
      BackgroundClip: "text",
    },
    Light: "#E5F0FF",
    Light2: "#CCE1FF",
  },
  Green: {
    Default: "#29CC74",
    Light: "#CCFFE3",
  },
  Red: {
    Default: "#E07F4F",
    Light: "#FFDFD9",
  },
  Specials: {
    SectionBG: {
      Color:
        "linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)",
      TextFillColor: "transparent",
      BackgroundClip: "text",
    },
    IllustrationBG: {
      Color: "linear-gradient(102.47deg, #7296EB 0%, #EAC0E9 100%, #EAC0E9 100%)",
      TextFillColor: "transparent",
      BackgroundClip: "text",
    },
  },
  Aerolab: {
    Color: "linear-gradient(180deg, #FF8800 0%, #FF6600 100%)",
    TextFillColor: "transparent",
    BackgroundClip: "text",
  },
  Bundler: function (attr: Gradient) {
    return `
      background: ${attr.Color};
      -webkit-background-clip: ${attr.BackgroundClip};
      -webkit-text-fill-color: ${attr.TextFillColor};
    `;
  },
};

export const TextStyles = {
  Headings: {
    L1: {
      FontFamily: "Montserrat",
      FontSize: "200px",
      FontWeight: "900",
      LineHeight: "80%",
      LetterSpacing: "0",
      FontVariant: "all-small-caps",
    },
    L2: {
      FontFamily: "Montserrat",
      FontSize: "48px",
      FontWeight: "900",
      LineHeight: "38px",
      LetterSpacing: "0",
      FontVariant: "all-small-caps",
    },
    L3: {
      FontFamily: "Montserrat",
      FontSize: "32px",
      FontWeight: "900",
      LineHeight: "32px",
      LetterSpacing: "0",
      FontVariant: "all-small-caps",
    },
    Mobile: {
      L1: {
        FontFamily: "Montserrat",
        FontSize: "96px",
        FontWeight: "900",
        LineHeight: "80%",
        LetterSpacing: "0",
        FontVariant: "all-small-caps",
      },
      L2: {
        FontFamily: "Montserrat",
        FontSize: "32px",
        FontWeight: "900",
        LineHeight: "80%",
        LetterSpacing: "0",
        FontVariant: "all-small-caps",
      },
      L3: {
        FontFamily: "Montserrat",
        FontSize: "24px",
        FontWeight: "900",
        LineHeight: "100%",
        LetterSpacing: "0",
        FontVariant: "all-small-caps",
      },
    },
  },
  Texts: {
    L1: {
      Default: {
        FontFamily: "Montserrat",
        FontSize: "18px",
        FontWeight: "600",
        LineHeight: "27px",
        LetterSpacing: "0",
        FontVariant: "none",
      },
      AllCaps: {
        FontFamily: "Montserrat",
        FontSize: "18px",
        FontWeight: "600",
        LineHeight: "27px",
        LetterSpacing: "0.24em",
        FontVariant: "all-small-caps",
      },
      AllCapsUnspaced: {
        FontFamily: "Montserrat",
        FontSize: "18px",
        FontWeight: "600",
        LineHeight: "27px",
        LetterSpacing: "0.05em",
        FontVariant: "all-small-caps",
      },
      LightWeight: {
        FontFamily: "Montserrat",
        FontSize: "18px",
        FontWeight: "500",
        LineHeight: "27px",
        LetterSpacing: "0",
        FontVariant: "none",
      },
    },
    L2: {
      Default: {
        FontFamily: "Montserrat",
        FontSize: "14px",
        FontWeight: "600",
        LineHeight: "150%",
        LetterSpacing: "0",
        FontVariant: "none",
      },
      AllCaps: {
        FontFamily: "Montserrat",
        FontSize: "14px",
        FontWeight: "600",
        LineHeight: "150%",
        LetterSpacing: "0.05em",
        FontVariant: "all-small-caps",
      },
    },
    Mobile: {
      L1: {
        Default: {
          FontFamily: "Montserrat",
          FontSize: "16px",
          FontWeight: "600",
          LineHeight: "27px",
          LetterSpacing: "0",
          FontVariant: "none",
        },
        AllCaps: {
          FontFamily: "Montserrat",
          FontSize: "16px",
          FontWeight: "600",
          LineHeight: "27px",
          LetterSpacing: "0.24em",
          FontVariant: "all-small-caps",
        },
        AllCapsUnspaced: {
          FontFamily: "Montserrat",
          FontSize: "16px",
          FontWeight: "600",
          LineHeight: "27px",
          LetterSpacing: "0.05em",
          FontVariant: "all-small-caps",
        },
        LightWeight: {
          FontFamily: "Montserrat",
          FontSize: "16px",
          FontWeight: "500",
          LineHeight: "27px",
          LetterSpacing: "0",
          FontVariant: "none",
        },
      },
      L2: {
        Default: {
          FontFamily: "Montserrat",
          FontSize: "12px",
          FontWeight: "600",
          LineHeight: "27px",
          LetterSpacing: "0",
          FontVariant: "none",
        },
        AllCaps: {
          FontFamily: "Montserrat",
          FontSize: "12px",
          FontWeight: "600",
          LineHeight: "27px",
          LetterSpacing: "0.0",
          FontVariant: "all-small-caps",
        },
      },
    },
  },
  Bundler: function (attr: TextStyle) {
    return `
      font-family: ${attr.FontFamily};
      font-size: ${attr.FontSize};
      font-weight:  ${attr.FontWeight};
      line-height: ${attr.LineHeight};
      letter-spacing: ${attr.LetterSpacing};
      font-variant: ${attr.FontVariant};
      `;
  },
};

export const Shadows = {
  Elevation2: "0px 2px 40px rgba(0, 0, 0, 0.05)",
  Elevation1: {
    Default: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    HoverAndActive: "0px 2px 12px rgba(0, 0, 0, 0.08)",
  },
};
