export const primaryColor = {
  50: "#e0fff3",
  100: "#b8f6df",
  200: "#8eefc7",
  300: "#63e8ad",
  400: "#3be2a1",
  500: "#22c893",
  600: "#179c7b",
  700: "#0b6f5f",
  800: "#01443e",
  900: "#001814",
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
    main: primaryColor[400],
    light: primaryColor[100],
    dark: primaryColor[700],
  },
};
