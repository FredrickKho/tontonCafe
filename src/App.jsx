import React from 'react';
import './App.css';
import ProductPage from './page/product-page/product.page';
import {Routes,Route} from 'react-router-dom';
import Header from './page/header-page/header.page';
import Footer from './page/footer-page/footer.page';
import Home from './page/home.page/home.page';
import Login from './page/login-register.page/login-register.page';
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route index element={<Home/>}/>
          <Route path='/product' element={<ProductPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
