import AdSection from "./components/AdSection";
import BestSellersSection from "./components/BestSellersSection";
import CategorySection from "./components/CategorySection";
import FlashSalesSection from "./components/FlashSalesSection";
import NewArrivalSection from "./components/NewArrivalSection";
import OurProducts from "./components/OurProducts";
import PrivelegesSection from "./components/PrivelegesSection";
import TopSection from "./components/TopSection";

const MainPage = () => {
  return (
    <>
      <TopSection />
      <FlashSalesSection />
      <CategorySection />
      <BestSellersSection />
      <AdSection />
      <OurProducts />
      <NewArrivalSection />
      <PrivelegesSection />
    </>
  );
};

export default MainPage;
