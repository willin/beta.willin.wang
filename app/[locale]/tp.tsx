'use client';
import { themes } from '@/lib/config';
import { ThemeProvider } from '@wits/next-themes';

export function ThemeClientProvider({ children }: { children: React.ReactNode; theme: string }) {
  return (
    <ThemeProvider attribute='class' themes={themes.map((x) => x.id)} defaultTheme='light'>
      {children}
    </ThemeProvider>
  );
}
