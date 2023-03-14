import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from "react";
import AspComponent from './components';

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <AspComponent />
      <Component {...pageProps} />
      <style jsx global>{`
        body {
          background: ${isDark ? "darkslategray" : "white"};
        }
      `}</style>
    </>
  )
}
