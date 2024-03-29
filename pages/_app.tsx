import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Script from 'next/script';
import Head from 'next/head';

config.autoAddCss = false;

const eventStructuredData = {
  '@context': 'http://schema.org',
  '@type': 'Event',
  name: 'PROVODÍNSKÁ ŠTRAPANDA 2023',
  startDate: '2023-06-17',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  eventStatus: 'https://schema.org/EventScheduled',
  location: {
    '@type': 'Place',
    name: 'Fotbalové, beach volejbalové hřiště a tenisový kurt Provodín',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Provodín',
      postalCode: '47167',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '50.615',
      longitude: '14.597',
    },
  },
  image: 'https://provodinska-strapanda.cz/social-cover-min.jpeg',
  description:
    'Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín',
  url: 'https://provodinska-strapanda.cz/',
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023</title>
        <meta
          name="title"
          content="PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023"
        />
        <meta
          name="description"
          content="Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="theme-color" content="#1e3f58" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://provodinska-strapanda.cz/" />
        <meta
          property="og:title"
          content="PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023"
        />
        <meta
          property="og:description"
          content="Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín"
        />
        <meta
          property="og:image"
          content="https://provodinska-strapanda.cz/social-cover-min.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://provodinska-strapanda.cz/"
        />
        <meta
          property="twitter:title"
          content="PROVODÍNSKÁ ŠTRAPANDA 2023 - Sobota 17. června 2023"
        />
        <meta
          property="twitter:description"
          content="Rádi bychom pozvali všechny příznivce turistiky na tradiční pochod Provodínská Štrapanda pořádaný od roku 1975. Pořádá ♥ KČT Česká Lípa, OÚ Provodín"
        />
        <meta
          property="twitter:image"
          content="https://provodinska-strapanda.cz/social-cover-min.jpeg"
        />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(eventStructuredData),
          }}
        />

        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WF4ZVQP')
      `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
