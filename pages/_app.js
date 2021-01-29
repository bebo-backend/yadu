import { PageTransition } from 'next-page-transitions'

import { SWRConfig } from 'swr'
import {getFetch} from '../lib/ax-fetch'

import 'react-dropzone-uploader/dist/styles.css'
import "../public/vendors/styles/icon-font.min.css"

import "../public/css/feather.css"
import "../public/css/select2.css"
import "../public/css/app-light.css"
import "../public/vendors/styles/core.css"
import "../public/vendors/styles/style.css"  
import "antd/dist/antd.css"

import "../category.css"

if (typeof window !== "undefined") {
  require("jquery");
  require("popper.js");
  require("bootstrap");
}






import Loader from '../components/Loader'

const TIMEOUT = 400

export default function MyApp({ Component, pageProps }) {
  return (
  
         <SWRConfig value={{
        fetcher: getFetch,
        onError: (err) => {
          console.error(err)
        },
      }}>
      <Component {...pageProps} />
    </SWRConfig>

  )
}









