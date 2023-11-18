import NavbarPurple from "./Components/NavbarPurple";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Sec1 from "./Components/Sec1";
// import About from "./Components/About";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ServicesSwiper from "./Components/ServicesSwiper";
import DeskSwiper from "./Components/DeskSwiper";
import MobileSwiper from "./Components/MobileSwiper";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <NavbarPurple />
      <Navbar />
      <Header />
      <Sec1 />
      <AboutUs />

      <div className="md:hidden">
      <Services/>

      </div>
      <div className="hidden md:block">
      <ServicesSwiper />

      </div>

      <div className="hidden md:block">
        <DeskSwiper />
      </div>
      <div className="md:hidden">
        <MobileSwiper />
      </div>
      <Form />

      <Footer />
    </>
  );
}

export default App;
