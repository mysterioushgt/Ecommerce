import Checkout from "./Component/Checkout"
import Contact from "./Component/Contact"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Index from "./Component/Index"
import Shop from "./Component/Shop"
import Shopdetails from "./Component/Shopdetails"
import Shoppincart from "./Component/Shoppincart"
import {Routes , Route} from "react-router-dom"

function App() {
   

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/index" element={<Index/> } />
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/shopdet" element={<Shopdetails/>}/>
        <Route path="/shopcart" element={<Shoppincart/>}/>
        <Route path="/check" element={<Checkout/>}/>
        </Routes>
       <Footer/>
    </>
  )
}

export default App
