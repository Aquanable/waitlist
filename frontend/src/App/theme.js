import _ from "lodash";

const globals = {
  font: {
    family:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    monospaceFamily:
      'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  logo: {},
};

const theme = {
  light: _.merge({}, globals, {
    colors: {
      background: "#ffffff",
      text: "#4a4a4a",
      active: "#000000",
      lumFactor: 1,

      outline: "hsla(213, 100%, 40%, 0.2)",
      modal: "hsla(0, 0%, 0%, 0.80)",
      shadow: "hsla(0, 0%, 0%, 0.2)",

      input: {
        color: "transparent",
        text: "#4a4a4a",
        accent: "transparent",
        disabled: "#cccccc",
      },
      success: {
        color: "#48c774",
        text: "white",
        accent: "#3ec46d",
        disabled: "#92ddac",
      },
      warning: {
        color: "#ffdd57",
        text: "#4a4a4a",
        accent: "#ffda47",
        disabled: "#cccccc",
      },
      danger: {
        color: "#f14668",
        text: "white",
        accent: "#f03a5f",
        disabled: "#f8a5b6",
      },
      primary: {
        color: "#47afff",
        text: "white",
        accent: "#38a9ff",
        disabled: "#addcff",
      },
      secondary: {
        color: "#e6e6e6",
        text: "#4a4a4a",
        accent: "#dbdbdb",
        disabled: "#cccccc",
      },

      accent1: "#fafafa",
      accent2: "#dbdbdb",
      accent3: "#999999",
      accent4: "#666666",

      tdfShields: {
        red: "#d60015",
        green: "#19b915",
        blue: "#0076c2",
        yellow: "#d2bd00",
        purple: "#8b00c7",
        neutral: "#4b4b4b",
        text: "#ffffff",
      },
    },
  }),
  dark: _.merge({}, globals, {
    logo: {
      filter: "invert(1)",
    },
    colors: {
      background: "#1f1f1f",
      text: "#cccccc",
      active: "#eeeeee",
      lumFactor: 0.6,

      outline: "hsla(213, 100%, 40%, 0.2)",
      modal: "hsla(0, 0%, 0%, 0.80)",
      shadow: "hsla(0, 0%, 0%, 0.5)",

      input: {
        color: "transparent",
        text: "#cccccc",
        accent: "transparent",
        disabled: "#999999",
      },
      success: {
        color: "#1f6538",
        text: "white",
        accent: "#226d3c",
        disabled: "#133e22",
      },
      warning: {
        color: "#ad8b00",
        text: "white",
        accent: "#b89300",
        disabled: "#574500",
      },
      danger: {
        color: "#661425",
        text: "white",
        accent: "#6f1628",
        disabled: "#330a12",
      },
      primary: {
        color: "#005ca3",
        text: "white",
        disabled: "#cccccc",
        accent: "#002e52",
      },
      secondary: {
        color: "#404040",
        text: "white",
        accent: "#454545",
        disabled: "#202020",
      },

      accent1: "#2e2e2e",
      accent2: "#454545",
      accent3: "#757575",
      accent4: "#ababab",

      tdfShields: {
        red: "#9a121f",
        green: "#21861e",
        blue: "#105b8b",
        yellow: "#968912",
        purple: "#69118e",
        neutral: "#777777",
        text: "#cccccc",
      },
    },
  }),
};

theme.ninjaholic = _.merge({}, theme.dark, {
  colors: {
    background: "#290052",
    accent1: "#380070",
    accent2: "#4f009e",
    accent3: "#8c1aff",
    accent4: "#bf80ff",

    secondary: {
      color: "#55008a",
      text: "white",
      accent: "#6e00b3",
      disabled: "#31084a",
    },
  },
});

theme["Midnight Blue"] = _.merge({}, theme.dark, {
  colors: {
    background: "#0a0a2c",
    accent1: "#0e0e54",
  },
});

theme["Elite GOLD"] = _.merge({}, theme.light, {
  logo: {
    filter:
      "invert(1) sepia(1) saturate(10000%) hue-rotate(-15deg) drop-shadow(1px 1px 0.5px #a67c00) contrast(90%)",
  },
});

theme.verydark = _.merge({}, theme.dark, {
  colors: {
    background: "#000000",
  },
});

export default theme;
