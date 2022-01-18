import '../styles/globals.css'
import { useEffect } from "react";
import "tw-elements/dist/css/index.min.css"


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("tw-elements");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
