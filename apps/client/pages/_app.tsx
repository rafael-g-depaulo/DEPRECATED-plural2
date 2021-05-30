import React from 'react'
import { AppProps } from 'next/app'

import './styles.css'

import Wireframe from '../components/Wireframe'

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
