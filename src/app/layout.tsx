import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';
import type { Metadata } from 'next';
import { Noto_Sans_Thai } from 'next/font/google';
import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import ScrollTopButton from '@/components/ScrollTopButton';

const noto = Noto_Sans_Thai({ subsets: ['thai'] });

export const metadata: Metadata = {
  title: 'Fadlan | Personal Portfolio',
  description: 'Fadlan is a frontend web developer with 4 years of experience.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={noto.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <ScrollTopButton />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
