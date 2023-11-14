export const primaryColor = {
  50: "#E6FFFA",
  100: "#B2F5EA",
  200: "#81E6D9",
  300: "#4FD1C5",
  400: "#38B2AC",
  500: "#319795",
  600: "#2C7A7B",
  700: "#285E61",
  800: "#234E52",
  900: "#1D4044",
};

const secondaryColor = {
  50: "#FFF5F7",
  100: "#FED7E2",
  200: "#FBB6CE",
  300: "#F687B3",
  400: "#ED64A6",
  500: "#D53F8C",
  600: "#B83280",
  700: "#97266D",
  800: "#702459",
  900: "#521B41",
};

export const colors = {
  neutral: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923",
  },
  primary: {
    ...primaryColor,
    main: primaryColor[500],
    light: primaryColor[100],
    dark: primaryColor[700],
  },
  secondary: {
    ...secondaryColor,
    main: secondaryColor[500],
    light: secondaryColor[100],
    dark: secondaryColor[700],
  },
};
