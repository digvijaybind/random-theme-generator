export function generateRandomColor(): string {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export function generateColorPalette(): string[] {
  const palette = [];
  for (let i = 0; i < 5; i++) {
    palette.push(generateRandomColor());
  }
  return palette;
}