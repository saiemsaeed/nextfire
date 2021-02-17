import '../styles/globals.css';
import NavBar from '../components/NavBar';
import { Toaster } from 'react-hot-toast';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
