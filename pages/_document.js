import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=David+Libre:wght@400;500;700&family=Homemade+Apple&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-gradient-to-b from-yellow-50 to-amber-50 via-red-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
