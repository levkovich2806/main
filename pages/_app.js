import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
  return <div style={{height: "100vh", width: "100vw"}}><Component {...pageProps} /></div>
}