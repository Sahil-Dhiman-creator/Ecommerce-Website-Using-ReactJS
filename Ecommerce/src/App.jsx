import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from "react"
import Banner from "./Components/Banner/Banner.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Products from "./Components/Products/Products.jsx";
import TopProducts from "./Components/TopProduct/TopProducts.jsx";
import Email from "./Components/Email/Email.jsx";
import Testimonials from "./Components/Testimonials/Testimonials.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {
    const [orderPopup, setOrderPopup] = useState(false);
    const handleOrderPopup = () => {
     setOrderPopup(!orderPopup);
    }
    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
    }, [])
  return (
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar handleOrderPopup={handleOrderPopup}/>
          <Hero handleOrderPopup={handleOrderPopup}/>
          <Products />
          <TopProducts handleOrderPopup={handleOrderPopup}/>
          <Banner />
          <Email />
          <Testimonials />
          <Footer />
      </div>
  )
}

export default App
