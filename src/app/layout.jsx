import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export const metadata = {
  title: 'Ryan Njoroge — Designer & Developer',
  description: 'Ryan Njoroge is a digital product designer and frontend developer specializing in modern, beautiful web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RXVG6HTCSV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RXVG6HTCSV');
          `}
        </Script>
      </head>
      <body className="bg-bg text-text font-sans antialiased m-0 overflow-x-hidden">
        <div id="root" className="w-full mx-auto min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
