import CoreCollection from "./components/CoreCollection";
import EasternWear from "./components/EasternWear";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LimitedOfferPopup from "./components/LimitedOffer";
import Volume from "./components/Volume";
import WinnterCollection from "./components/winnterCollection";
import WinterWear from "./components/WinterWear";
 

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <CoreCollection />
      <WinterWear/>
      <WinnterCollection/>
      <Volume/>
      <LimitedOfferPopup />
      <EasternWear/>
      <Footer />
    </div>
  );
}
