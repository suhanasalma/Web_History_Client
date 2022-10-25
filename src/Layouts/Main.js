import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/SharedPages/Header/Header.js'
import Footer from '../Pages/SharedPages/Footer/Footer'

const Main = () => {
   return (
     <div>
       <Header></Header>
       <Outlet></Outlet>
       <Footer></Footer>
     </div>
   );
};

export default Main;