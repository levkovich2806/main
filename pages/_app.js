import React, {useEffect} from "react"
import Head from 'next/head'
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
      </Head>
      <div style={{height: "100vh", width: "100vw"}}><Component {...pageProps} /></div>
    </>
  )
}
