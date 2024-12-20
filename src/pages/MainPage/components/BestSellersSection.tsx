import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import GamePadImg from "@/assets/images/gamepad.png";

const BestSellersSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-20 pb-[60px]">
      <div className="flex items-center gap-x-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <p className="text-red-600 text-base font-semibold">
          {t("labels.this_month")}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-[36px] font-semibold">
          {t("labels.best_selling_products")}
        </h2>
        <div className="flex gap-x-2">
          <Button className="bg-red-600 rounded-sm hover:bg-red-600 text-white">
            {t("actions.view_all")}
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between mt-[60px] gap-4">
        <ProductCard
          price={120}
          title="HAVIT HV-G92 Gamepad"
          imageUrl={GamePadImg}
          rating={4}
          feedbacksQuantity={50}
        />
        <ProductCard
          price={120}
          title="HAVIT HV-G92 Gamepad"
          imageUrl={GamePadImg}
          rating={4}
          feedbacksQuantity={50}
        />
        <ProductCard
          price={120}
          title="HAVIT HV-G92 Gamepad"
          imageUrl={GamePadImg}
          rating={4}
          feedbacksQuantity={50}
        />
        <ProductCard
          price={120}
          title="HAVIT HV-G92 Gamepad"
          imageUrl={GamePadImg}
          rating={4}
          feedbacksQuantity={50}
        />
      </div>
    </section>
  );
};

export default BestSellersSection;
