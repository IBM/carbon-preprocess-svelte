export const CarbonSvelte = {
  Components: "carbon-components-svelte",
  Icons: "carbon-icons-svelte",
  Pictograms: "carbon-pictograms-svelte",
} as const;

export const CARBON_PREFIX = /bx--/;

export const RE_EXT_SVELTE = /\.svelte$/;

export const RE_EXT_CSS = /\.css$/;

// Vite uses the decimal system for file sizes.
export const BITS_DENOM = 1_000;
