import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../app/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default App