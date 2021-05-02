import React, {useEffect} from 'react'

import Header from '../Layout/Header'
import Footer from "../Layout/Footer";

// Обертка для всего сайта
const PageTemplate = (props) => {
  return (
    <div className='page'>
      <Header />
      <main>{props.children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default PageTemplate