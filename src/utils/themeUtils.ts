const themes = [
  'Vintage',
  'Futuristic',
  'Minimalistic',
  'Abstract',
  'Geometric',
  'Retro',
];

export function generateRandomTheme(): string {
  return themes[Math.floor(Math.random() * themes.length)];
}