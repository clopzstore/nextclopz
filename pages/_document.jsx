import { Html, Head, Main, NextScript } from "next/document";
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/png" href="/image/fav.png" />
        <link rel="stylesheet" href="/css/core.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <Script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer strategy="lazyOnload"/>
      </Head>
      <body>
      <div class="elfsight-app-eb63cfe2-444f-4aa1-b32d-0a297e3186fe"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};