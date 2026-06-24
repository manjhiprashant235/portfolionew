import './globals.css';

export const metadata = {
  title: 'Prashant Kumar Manjhi - Clinical Microbiologist',
  description: 'Portfolio of Prashant Kumar Manjhi, Aspiring Research Scientist and Clinical Microbiologist.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
