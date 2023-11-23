import "./App.css";
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Layout from './pages/Layout'
// import { Home, Login } from '@mui/icons-material'
// import SignUp from './pages/SignUp'
// import Cart from './pages/Cart'
// import Products from './pages/Products'
// import Product from './pages/Product'
import Imag from "./pages/product/image";
// import Details from './pages/product/Details'
// import Details1 from "./pages/product/details1";

function App() {
  return (
    <>
      {/* <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/product' element={<Product/>}/>
      </Route>
    </Routes>
    </BrowserRouter> */}
      <Imag product={{
  id: 1,
  title: "Infinix INBOOK",
  image: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  price: 1099,
  description:
    "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
  category: "laptops",
  clickCount: 4.54,
  quantity: 96,
  attributes: [
    {
      key: "Processor",
      value: "Intel Core i3",
    },
    {
      key: "RAM",
      value: "8GB",
    },
    {
      key: "Storage",
      value: "256GB SSD",
    },
    {
      key: "Warranty",
      value: "1 Year",
    },
  ],
}} key={Date.now() * Math.random()}/>
    </>
  );
}

export default App;
