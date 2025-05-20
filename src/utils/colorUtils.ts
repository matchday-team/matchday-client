export const hexColorAlpha = (colorHex: string, alphaDec: number) => {
  const alphaHex = alphaDec.toString(16).padStart(2, '0');

  return `${colorHex}${alphaHex}`;
};
