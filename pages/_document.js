import React from "react";

import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {

    // console.log(window);

    return (
      <Html lang="ru-RU" dir="ltr">
        <Head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="IE=edge"/>
          <meta name="title" content="Sergey Levkovich"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
          <meta name="description"
                content={`Personal page. Sergey Levkovich - web developer.`}
          />
          <link rel="preconnect" href="//fonts.gstatic.com"/>
          <link href="//fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic" rel="stylesheet"/>
          <link rel="icon" type="image/png" href={"/favicon.ico"}/>
          <meta
            property="og:description"
            content={`Personal page. Sergey Levkovich - software developer.`}
          />
          <meta
            property="og:url"
            content="//levkovich.dev/"
          />
          <meta
            property="og:type"
            content="website"
          />
          <meta
            property="og:title"
            content="Sergey Levkovich"
          />
          <meta
            property="og:image"
            content="//levkovich.dev/levkovich.png"
          />
          <meta property="og:image:width" content="200"/>
          <meta property="og:image:height" content="200"/>

          <meta
            property="twitter:card"
            content="//levkovich.dev/levkovich.png"
          />
          <meta
            property="twitter:url"
            content="//levkovich.dev/"
          />
          <meta
            property="twitter:title"
            content="Sergey Levkovich"
          />
          <meta
            property="twitter:description"
            content="Personal page. Sergey Levkovich - web developer."
          />
          <meta
            property="twitter:image"
            content="//levkovich.dev/levkovich.png"
          />

        </Head>
        <body>
        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
