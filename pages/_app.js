import React from "react"
import Head from 'next/head'
import '../styles.css'
import { YMInitializer } from 'react-yandex-metrika'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
  return (
    <>
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
      {process.env.NODE_ENV !== 'development' && (
        <YMInitializer accounts={[73370383]} options={{webvisor: true}} version="2"/>
      )}
      <div style={{height: "100vh", width: "100vw"}}><Component {...pageProps} /></div>
    </>
  )
}
