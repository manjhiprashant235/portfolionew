import './globals.css';

export const metadata = {
  title: 'Devjoti Kundu - Biotechnology Undergraduate',
  description: 'Resume of Devjoti Kundu, Biotechnology Undergraduate focusing on computational biology and bioinformatics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
