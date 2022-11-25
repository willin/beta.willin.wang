import '@/styles/dist.css';
// import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
