import '../styles/globals.css'
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("tw-elements");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
