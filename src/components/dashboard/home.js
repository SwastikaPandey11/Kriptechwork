import React from 'react';
import './home.css';
import Navbar from './navbar';
import Footer from './footer';
import Main from './Main';
const Home = () => {
  return (
    <div classname='half'>
        <div>
          <Navbar />
        </div>
        <div className='main'>
         <Main />
        </div>
        <div className='foot'>
          <Footer />
        </div>
    </div>
  )
}

export default Home;