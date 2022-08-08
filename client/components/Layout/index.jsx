import React from 'react'
import Head from 'next/head';
import { Navbar } from '../navbar';
// import Footer from './Footer';
// import Navbar from './Navbar/index';
import Footer from './../footer/index';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Hand2Mart - Buy/Sell Cars & Bikes in one go!
        </title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default Layout