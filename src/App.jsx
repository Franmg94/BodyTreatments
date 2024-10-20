import { FormProvider } from "./components/FormContext";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ReserveSection from "./components/ReserveSection";
import SlidingForm from "./components/SlidingForm";
import TreatmentsSection from "./components/TreatmentsSection";

function App() {
  return (
    <>
      <FormProvider>
        <Navbar />
        <SlidingForm />
        <Hero />
        <ReserveSection />
        <TreatmentsSection />
      </FormProvider>
    </>
  );
}

export default App;
