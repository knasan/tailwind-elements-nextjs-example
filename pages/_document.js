import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
            integrity='sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA=='
            crossOrigin='anonymous'
            referrerPolicy='no-referrer'
          /> */}
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src='https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;