import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './layouts/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './layouts/Main'
import ProductList from './pages/ProductList'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import SignIn from './pages/SignIn'

function App() {
  //로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  //로그인한 사용자 id 관리
  const [username, setUsername] = useState('');

  //로그인 핸들러
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  }

  //로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <>
      <section className="app">
        <BrowserRouter>
          <Header 
            isLoggedIn={isLoggedIn}
            username={username}
            onLogout={handleLogout}
          />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/products' element={<ProductList />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/add-product' element={<AddProduct />} />
            <Route path='/signin' element={<SignIn onLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App
