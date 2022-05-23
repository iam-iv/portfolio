import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <style>
          @import
          url(https://fonts.googleapis.com/css2?family==Montserrat:ital,wght@0,200;0,400;0,700;1,500&display=swap);
        </style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
