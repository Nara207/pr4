// import './App.css'
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import HomePage from "./pages/HomePage/HomePage"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import ProductPage from "./pages/ProductPage/ProductPage"
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import UserPage from "./pages/UserPage/UserPage"

export default function App() {

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/catalog" element={<CatalogPage/>}></Route>
        <Route path="/catalog/:id" element={<ProductPage/>}></Route>
        <Route path="/about_us" element={<AboutUsPage/>}></Route>
        <Route path="/users" element={<UserPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}
