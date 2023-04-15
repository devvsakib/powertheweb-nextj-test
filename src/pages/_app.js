import '../styles/globals.css'
import '../styles/Hero.css'
import '../styles/Navbar.css'
import '../styles/Projects.css'
import ScrollToTop from '../components/Button/ScrollToTop';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "../components/Navbar/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
