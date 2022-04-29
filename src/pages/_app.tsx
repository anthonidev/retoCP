import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { AnimatePresence } from 'framer-motion';


function MyApp({ Component, pageProps ,router}: AppProps) {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps}  key={router.route}/>
      </AnimatePresence>

    </Provider>
  )
}

export default MyApp
