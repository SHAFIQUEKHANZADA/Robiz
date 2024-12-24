// import Banner from "./components/Banner";
// import BestSelling from "./components/BestSelling";
// import Category from "./components/Category";
// import CustomerSupport from "./components/CustomerSupport";
// import Explore from "./components/Explore";
import CoreCollection from "./components/CoreCollection";
import Featured from "./components/Featured";
// import FlashSale from "./components/FlashSale";
import Hero from "./components/Hero";
import LimitedOfferPopup from "./components/LimitedOffer";
 

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreCollection />
      {/* <FlashSale/> */}
      {/* <Category/> */}
      {/* <BestSelling/> */}
      {/* <Banner/> */}
      {/* <Explore/> */}
      <Featured />
      {/* <CustomerSupport/> */}
      <LimitedOfferPopup />
    </div>
  );
}
