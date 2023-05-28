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
          <link rel="preconnect" href="//fonts.gstatic.com"/>
          <link href="//fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic" rel="stylesheet"/>
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
