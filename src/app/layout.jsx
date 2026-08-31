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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M5VWT9PL');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-bg text-text font-sans antialiased m-0 overflow-x-hidden">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M5VWT9PL"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div id="root" className="w-full mx-auto min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
