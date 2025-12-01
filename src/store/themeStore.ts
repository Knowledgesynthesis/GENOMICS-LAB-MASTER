import { create } from 'zustand';

interface ThemeState {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: 'dark',
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      if (newTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', newTheme);
      return { theme: newTheme };
    }),
  setTheme: (theme) =>
    set(() => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
      return { theme };
    }),
}));

// Initialize theme from localStorage or default to dark
const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
if (storedTheme) {
  useThemeStore.getState().setTheme(storedTheme);
} else {
  useThemeStore.getState().setTheme('dark');
}
