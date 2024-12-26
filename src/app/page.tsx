import CoreCollection from "./components/CoreCollection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LimitedOfferPopup from "./components/LimitedOffer";
import Volume from "./components/Volume";
 

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CoreCollection />
      <Volume/>
      <LimitedOfferPopup />
      <Footer />
    </div>
  );
}
