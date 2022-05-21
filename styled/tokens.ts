import { TVariant } from "../typings/cssVariable";

const light: Record<TVariant, string> = {
  brightBg: "#dee2e6",
  mediumBg: "#c7d5e0",
  color: "#171a21",
  primaryColor: "#5c7cfa",
  primaryColorDark: "#364fc7",
  secondaryColor: "#94d82d",
  secondaryColorDark: "#5c940d",
  thirdColor: "#ff922b",
  thirdColorDark: "#d9480f",
  alert: "#e03131"
};

const dark: Record<TVariant, string> = {
  brightBg: "#2c3238",
  mediumBg: "#171a21",
  color: "#c7d5e0",
  primaryColor: "#364fc7",
  primaryColorDark: "#001991",
  secondaryColor: "#5c940d",
  secondaryColorDark: "#375e00",
  thirdColor: "#d9480f",
  thirdColorDark: "#a12e00",
  alert: "#ffa8a8"
};

export const colors = {
  light,
  dark
};

export const sizes = ["0.2rem", "0.5rem", "1rem", "1.5rem", "2rem", "2.5rem", "3rem"];

export const shadows = {
  sm: `62.6px 62.6px 10px rgba(0, 0, 0, 0.005),
  500px 500px 80px rgba(0, 0, 0, 0.01)`,
  md: `17.2px 17.2px 2.7px rgba(0, 0, 0, 0.003),
  43.4px 43.4px 6.9px rgba(0, 0, 0, 0.004),
  88.6px 88.6px 14.2px rgba(0, 0, 0, 0.006),
  182.5px 182.5px 29.2px rgba(0, 0, 0, 0.007),
  500px 500px 80px rgba(0, 0, 0, 0.01)`,
  lg: `7.8px 7.8px 1.2px rgba(0, 0, 0, 0.002),
  17.2px 17.2px 2.7px rgba(0, 0, 0, 0.003),
  28.8px 28.8px 4.6px rgba(0, 0, 0, 0.004),
  43.4px 43.4px 6.9px rgba(0, 0, 0, 0.004),
  62.6px 62.6px 10px rgba(0, 0, 0, 0.005),
  88.6px 88.6px 14.2px rgba(0, 0, 0, 0.006),
  125.7px 125.7px 20.1px rgba(0, 0, 0, 0.006),
  182.5px 182.5px 29.2px rgba(0, 0, 0, 0.007),
  281.3px 281.3px 45px rgba(0, 0, 0, 0.008),
  500px 500px 80px rgba(0, 0, 0, 0.01)`
};
