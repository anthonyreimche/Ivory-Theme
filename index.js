// Ivory — warm paper-white light theme with a terracotta accent.
export function activate(api) {
  api.registerTheme({
    id: "theme-ivory.theme",
    name: "Ivory",
    colorScheme: "light",
    vars: {
      "--color-surface-0": "#faf7f0",
      "--color-surface-1": "#f1ede3",
      "--color-surface-2": "#e7e2d5",
      "--color-surface-3": "#d9d3c3",
      "--color-surface-4": "#c9c2b0",
      "--color-border": "#b8b09b",
      "--color-border-subtle": "#ddd7c9",
      "--color-text-primary": "#2a2620",
      "--color-text-secondary": "#6b6354",
      "--color-text-muted": "#a39a87",
      "--color-accent": "#b3593a",
      "--color-accent-hover": "#a04c2e",
      "--color-slider-fill": "#8d8472",
    },
  });
}
