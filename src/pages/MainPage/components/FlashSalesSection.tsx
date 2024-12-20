import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/product-card";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
import GamePadImg from "@/assets/images/gamepad.png";
import Countdown from "react-countdown";

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-center items-center space-x-4">
        <div className="text-center">
          <p className="text-sm">Days</p>
          <span className="text-3xl font-bold">
            {String(days).padStart(2, "0")}
          </span>
        </div>
        <span className="text-red-400">:</span>

        <div className="text-center">
          <p className="text-sm">Hours</p>
          <span className="text-3xl font-bold">
            {String(hours).padStart(2, "0")}
          </span>
        </div>
        <span className="text-red-400">:</span>

        <div className="text-center">
          <p className="text-sm">Minutes</p>
          <span className="text-3xl font-bold">
            {String(minutes).padStart(2, "0")}
          </span>
        </div>
        <span className="text-red-400">:</span>

        <div className="text-center">
          <p className="text-sm">Seconds</p>
          <span className="text-3xl font-bold">
            {String(seconds).padStart(2, "0")}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white text-black py-6">
      <Countdown
        date={Date.now() + 1000 * 60 * 60 * 24 * 3}
        renderer={renderer}
      />
    </div>
  );
};

const FlashSalesSection = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<null | SwiperCore>(null);

  return (
    <section className="mt-[140px] pb-[60px] border-b">
      <div className="flex items-center gap-x-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <p className="text-red-600 text-base font-semibold">
          {t("labels.todays")}
        </p>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row gap-x-[87px] items-center">
          <h2 className="text-[24px] md:text-[36px] font-semibold">
            {t("labels.flash_sales")}
          </h2>
          <Timer />
        </div>
        <div className="flex gap-x-2 mt-4 md:mt-0">
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
      <div className="flex justify-between w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full mt-10"
          spaceBetween={24}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide>
            <ProductCard
              discountPercent={40}
              price={120}
              discountPrice={160}
              title="HAVIT HV-G92 Gamepad"
              imageUrl={GamePadImg}
              rating={4}
              feedbacksQuantity={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              discountPercent={40}
              price={120}
              discountPrice={160}
              title="HAVIT HV-G92 Gamepad"
              imageUrl={GamePadImg}
              rating={5}
              feedbacksQuantity={50}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              discountPercent={40}
              price={120}
              discountPrice={160}
              title="HAVIT HV-G92 Gamepad"
              imageUrl={GamePadImg}
              rating={4.5}
              feedbacksQuantity={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              discountPercent={40}
              price={120}
              discountPrice={160}
              title="HAVIT HV-G92 Gamepad"
              imageUrl={GamePadImg}
              rating={3}
              feedbacksQuantity={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              discountPercent={40}
              price={120}
              discountPrice={160}
              title="HAVIT HV-G92 Gamepad"
              imageUrl={GamePadImg}
              rating={3.5}
              feedbacksQuantity={40}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard
              discountPercent={40}
              price={120}
              discountPrice={160}
              title="HAVIT HV-G92 Gamepad"
              imageUrl={GamePadImg}
              rating={4}
              feedbacksQuantity={40}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="text-center mt-[60px]">
        <Button className="bg-red-600 rounded-sm hover:bg-red-600 text-white">
          {t("actions.view_all_products")}
        </Button>
      </div>
    </section>
  );
};

export default FlashSalesSection;
