// import Banner from "./components/Banner";
// import BestSelling from "./components/BestSelling";
// import Category from "./components/Category";
// import CustomerSupport from "./components/CustomerSupport";
// import Explore from "./components/Explore";
import CoreCollection from "./components/CoreCollection";
// import FlashSale from "./components/FlashSale";
import Hero from "./components/Hero";
import LimitedOfferPopup from "./components/LimitedOffer";
import Volume from "./components/Volume";
 

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreCollection />
      <Volume/>
      {/* <FlashSale/> */}
      {/* <Category/> */}
      {/* <BestSelling/> */}
      {/* <Banner/> */}
      {/* <Explore/> */}
      
      {/* <CustomerSupport/> */}
      <LimitedOfferPopup />
    </div>
  );
}
