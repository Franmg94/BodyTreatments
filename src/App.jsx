import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import { FormProvider } from "./components/FormContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingDetails from "./components/PricingDetails";
import Booking from "./components/Booking";
import SlidingForm from "./components/SlidingForm";
import Treatments from "./components/Treatments";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <FormProvider>
        <Navbar />
        <SlidingForm />
        <Hero />
        <Booking />
        <Treatments />
        <PricingDetails />
        <Banner />
        <Testimonials />
        <About />
        <Contact />
      </FormProvider>
      <Footer />
    </>
  );
}

export default App;
