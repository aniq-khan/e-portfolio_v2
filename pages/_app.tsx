import "../styles/globals.css";
import { Cabin } from "next/font/google";
import type { AppProps } from "next/app";

const font = Cabin({ subsets: ['latin'] })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={font.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
