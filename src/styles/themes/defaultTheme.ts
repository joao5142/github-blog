export const defaultTheme = {
  colors: {
    blue: "#3294F8",
    "base-title": "#E7EDF4",
    "base-subtitle": "#C4D4E3",
    "base-text": "#AFC2D4",
    "base-span": "#7B96B2",
    "base-label": "#3A536B",
    "base-border": "#1C2F41",
    "base-post": "#112131",
    "base-profile": "#0B1B2B",
    "base-background": "#071422",
    "base-input": "#040F1A",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xxl: "1.5rem",
  },
} as const;

export type ColorsTypes = keyof typeof defaultTheme.colors;
export type FontSizeTypes = keyof typeof defaultTheme.fontSizes;
