import ErrorBoundary from "./components/ErrorBoundary";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Model from "./components/Model";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <ErrorBoundary>      
      <main className="bg-black">
        <Navbar/>
        <Hero/>
        <Highlights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        <Footer/>
      </main>
    </ErrorBoundary>
  )
}
