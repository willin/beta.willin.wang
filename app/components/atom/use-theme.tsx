import { createContext, useContext, useEffect, useState } from 'react';

export const themes = [
  {
    name: '🌝  light',
    id: 'light'
  },
  {
    name: '🌚  dark',
    id: 'dark'
  },
  {
    name: '🧁  cupcake',
    id: 'cupcake'
  },
  {
    name: '🐝  bumblebee',
    id: 'bumblebee'
  },
  {
    name: '✳️  Emerald',
    id: 'emerald'
  },
  {
    name: '🏢  Corporate',
    id: 'corporate'
  },
  {
    name: '🌃  synthwave',
    id: 'synthwave'
  },
  {
    name: '👴  retro',
    id: 'retro'
  },
  {
    name: '🤖  cyberpunk',
    id: 'cyberpunk'
  },
  {
    name: '🌸  valentine',
    id: 'valentine'
  },
  {
    name: '🎃  halloween',
    id: 'halloween'
  },
  {
    name: '🌷  garden',
    id: 'garden'
  },
  {
    name: '🌲  forest',
    id: 'forest'
  },
  {
    name: '🐟  aqua',
    id: 'aqua'
  },
  {
    name: '👓  lofi',
    id: 'lofi'
  },
  {
    name: '🖍  pastel',
    id: 'pastel'
  },
  {
    name: '🧚‍♀️  fantasy',
    id: 'fantasy'
  },
  {
    name: '📝  Wireframe',
    id: 'wireframe'
  },
  {
    name: '🏴  black',
    id: 'black'
  },
  {
    name: '💎  luxury',
    id: 'luxury'
  },
  {
    name: '🧛‍♂️  dracula',
    id: 'dracula'
  },
  {
    name: '🖨  CMYK',
    id: 'cmyk'
  },
  {
    name: '🍁  Autumn',
    id: 'autumn'
  },
  {
    name: '💼  Business',
    id: 'business'
  },
  {
    name: '💊  Acid',
    id: 'acid'
  },
  {
    name: '🍋  Lemonade',
    id: 'lemonade'
  },
  {
    name: '🌙  Night',
    id: 'night'
  },
  {
    name: '☕️  Coffee',
    id: 'coffee'
  },
  {
    name: '❄️  Winter',
    id: 'winter'
  }
];

type ThemeContextType = [
  string | null,
  React.Dispatch<React.SetStateAction<string | null>>
];

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

ThemeContext.displayName = 'ThemeContext';

const prefersLightMQ = '(prefers-color-scheme: light)';

export function ThemeProvider({
  children,
  themeAction = '/api/theme',
  specifiedTheme
}: {
  children: ReactNode;
  themeAction: string;
  specifiedTheme: string | null;
}) {
  const [theme, setTheme] = useState<string | null>(() => {
    if (specifiedTheme) {
      return themes.map((x) => x.id).includes(specifiedTheme)
        ? specifiedTheme
        : null;
    }

    if (typeof window !== 'object') return null;
    return window.matchMedia(prefersLightMQ).matches ? 'cupcake' : 'retro';
  });

  const mountRun = React.useRef(false);

  useEffect(() => {
    if (!mountRun.current) {
      mountRun.current = true;
      return;
    }
    if (!theme) return;

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetch(`${themeAction}`, {
      method: 'POST',
      body: JSON.stringify({ theme })
    });
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'cupcake' : 'retro');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
