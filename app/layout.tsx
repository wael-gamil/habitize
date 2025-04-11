import type { Metadata } from 'next';
import { inter, orbitron } from './ui/fonts';
import './globals.css';
import './reset.css';

export const metadata: Metadata = {
  title: 'Habitize – Gamify Your Growth',
  description:
    'Transform your daily routines into epic quests. Level up your life with our gamified habit tracking system.',
  keywords: [
    'habit tracker',
    'gamified habits',
    'Habitize',
    'build habits',
    'level up',
    'XP tracker',
  ],
  authors: [
    { name: 'Wael Gamil', url: 'https://www.linkedin.com/in/wael-gamil/' },
    {
      name: 'Mahmoud Ali Hammad',
      url: 'https://www.linkedin.com/in/mahmoud-ali-hammad',
    },
  ],
  icons: {
    icon: 'public/favicon.ico',
  },
  openGraph: {
    title: 'Habitize – Gamify Your Growth',
    description:
      'Transform your daily routines into epic quests. Level up your life with our gamified habit tracking system.',
    //todo: update the url
    url: '',
    siteName: 'Habitize',
    images: [
      {
        url: '',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}
