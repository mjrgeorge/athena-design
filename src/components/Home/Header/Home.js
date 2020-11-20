import React from 'react';
import HeaderMain from './Header';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import Price from '../../Price/Price';
import Services from '../../Services/Services';
import Project from '../../Project/Project';
import Footer from '../../Footer/Footer';
import Achievements from '../../Achievements/Achievements';
import Subscribe from '../../Subscribe/Subscribe';
import Header from './Header';

const Home = () => {
  return (
    <main>
      <div className='header-container'>
        <Navbar />
        <Header />
      </div>
      <Services />
      <Project />
      <Achievements />
      <Price />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Home;
