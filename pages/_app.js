import { useEffect } from "react";

import '../styles/globals.css'
// import "tw-elements/dist/css/index.min.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("tw-elements");
    import("tw-elements/dist/css/index.min.css");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
