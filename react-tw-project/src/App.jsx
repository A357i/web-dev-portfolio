import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Ecommerce from "./pages/Ecommerce"
import Cart from "./pages/Cart"
import Contact from "./pages/Contact"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Orders"
import Emails from "./pages/Emails"

import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shop" element={ <Shop /> } />
      <Route path="/Ecommerce/:id" element={ <Ecommerce /> } />
      <Route path="/cart" element={ <Cart /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/register" element={ <Register /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/dashboard" element={ <Dashboard /> } />
      <Route path="/orders" element={ <Orders /> } />
      <Route path="/emails" element={ <Emails /> } />
    </Routes>
    
    <Footer />
    </BrowserRouter>
  )
}

export default App
