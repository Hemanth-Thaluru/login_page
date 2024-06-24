import './globals.css';

import { GeistSans } from 'geist/font/sans';

let title = 'TrexQuant Login';
let description =
  'This is example Login/Signup page for TrexQuant Client.';

export const metadata = {
  title,
  description,
  twitter: {
    card: '',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={GeistSans.variable}>
        {children}</body>
    </html>
  );
}
