import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from "../components/layout/nav";
import Footer from "../components/layout/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <NavBar />
      <div className="pt-14 max-w-3xl m-auto">
        <Component {...pageProps} />
        <Footer/>
      </div>
    </main>
  )
}

export default MyApp
