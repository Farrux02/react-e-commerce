import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Swiper as SwiperCore } from "swiper";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GamePadImg from "@/assets/images/gamepad.png";

const OurProducts = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<null | SwiperCore>(null);
  return (
    <section className="mt-[140px] pb-[60px]">
      <div className="flex items-center gap-x-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <p className="text-red-600 text-base font-semibold">
          {t("labels.todays")}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-[36px] font-semibold">{t("labels.flash_sales")}</h2>
        <div className="flex gap-x-2">
          <Button
            className="w-[46px] h-[46px] rounded-full bg-[#f5f5f5] hover:bg-[#f5f5f5]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <IoArrowBack className="!w-6 !h-6 text-black" />
          </Button>
          <Button
            className="w-[46px] h-[46px] rounded-full bg-[#f5f5f5] hover:bg-[#f5f5f5]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <IoArrowForward className="!w-6 !h-6 text-black" />
          </Button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Pagination, Grid]}
          slidesPerView={1}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="w-full mt-10"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          grid={{
            rows: 2,
            fill: "row",
          }}
          spaceBetween={24}
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                price={120}
                title="HAVIT HV-G92 Gamepad"
                rating={4}
                feedbacksQuantity={50}
                imageUrl={GamePadImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="text-center mt-[60px]">
        <Button className="bg-red-600 rounded-sm hover:bg-red-600 text-white mx-auto">
          {t("actions.view_all_products")}
        </Button>
      </div>
    </section>
  );
};

export default OurProducts;
