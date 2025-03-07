import { HeroUIProvider } from '@heroui/react';

import { Plus_Jakarta_Sans } from 'next/font/google';

import 'swiper/css';
import 'swiper/css/effect-cards';

import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta'
});

export const metadata = {
  title: 'Muslamul Haq',
  description: 'Progressive Video Crafter'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${jakarta.variable} relative overscroll-none scroll-smooth bg-[#010513] font-jakarta text-[#d4e8ffb3]`}
      >
        {/* <SmoothScroll> */}
        <HeroUIProvider>{children}</HeroUIProvider>
        {/* </SmoothScroll> */}
      </body>
    </html>
  );
}
