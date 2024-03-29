import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Lora:wght@700&display=swap" rel="stylesheet"></link>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
