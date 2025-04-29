import { useColorScheme } from 'react-native';

export const useAppTheme = () => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return {
    isDark,
    colors: {
      background: isDark ? '#121212' : '#ffffff',
      text: isDark ? '#ffffff' : '#000000',
      card: isDark ? '#1e1e1e' : '#f2f2f2',
    },
  };
};
