

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import { Home, Login } from '@mui/icons-material'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'
import Products from './pages/Products'
import Product from './pages/Product'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<Product/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
