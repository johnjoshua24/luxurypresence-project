import { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoadingBarFBack from "./components/LoadingBarFBack";

const About = lazy(() => import("./components/About"));
const GetItSold = lazy(() => import("./components/GetItSold"));
const Listings = lazy(() => import("./components/Listings"));
const Gallery = lazy(() => import("./components/Gallery"));
const Masonry = lazy(() => import("./components/Masonry"));
const Services = lazy(() => import("./components/Services"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Suspense fallback={<LoadingBarFBack />}>
        <About />
        <GetItSold />
        <Listings />
        <Gallery />
        <Masonry />
        <Services />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
