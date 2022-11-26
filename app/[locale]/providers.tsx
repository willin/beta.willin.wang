'use client';

import { I18nProvider, i18n } from '@/i18n';

export function Providers({ children, locale }: { children: React.ReactNode; locale: string }) {
  i18n.locale(locale);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}

// import { ThemeProvider } from 'next-themes';
// import { themes } from './themes';

// export function Providers({ children }: { children: React.ReactNode }) {
//   return (
//     <ThemeProvider attribute='class' themes={themes.map((x) => x.id)}>
//       {children}
//     </ThemeProvider>
//   );
// }
