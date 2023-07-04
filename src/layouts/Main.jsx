import React from 'react'
import TopMenu from '../components/TopMenu'
import Footer from '../components/Footer'

const Main = ({children}) => {
  return (
    <>
        <TopMenu/>
        {children}
        <Footer/>
    </>
  )
}

export default Main