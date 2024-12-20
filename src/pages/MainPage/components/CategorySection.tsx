import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/ui/category-card";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { Swiper as SwiperCore } from "swiper";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import { CiHeadphones } from "react-icons/ci";
import { LuGamepad } from "react-icons/lu";

const categories = [
  {
    icon: <IoIosPhonePortrait className="!w-14 !h-14 text-black" />,
    title: "Phones",
  },
  {
    icon: <HiOutlineDesktopComputer className="!w-14 !h-14 text-black" />,
    title: "Computers",
  },
  {
    icon: <BsSmartwatch className="!w-14 !h-14 text-black" />,
    title: "SmartWatch",
  },
  { icon: <FiCamera className="!w-14 !h-14 text-black" />, title: "Camera" },
  {
    icon: <CiHeadphones className="!w-14 !h-14 text-black" />,
    title: "HeadPhones",
  },
  { icon: <LuGamepad className="!w-14 !h-14 text-black" />, title: "Gaming" },
  {
    icon: <IoIosPhonePortrait className="!w-14 !h-14 text-black" />,
    title: "Phones",
  },
  {
    icon: <HiOutlineDesktopComputer className="!w-14 !h-14 text-black" />,
    title: "Computers",
  },
];
const CategorySection = () => {
  const { t } = useTranslation();
  const swiperRef = useRef<null | SwiperCore>(null);

  return (
    <section className="mt-20 pb-[60px] border-b">
      <div className="flex items-center gap-x-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <p className="text-red-600 text-base font-semibold">
          {t("labels.categories")}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-[36px] font-semibold">
          {t("labels.browse_by_category")}
        </h2>
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
      <div className="flex justify-between w-full">
        <Swiper
          modules={[Pagination]}
          slidesPerView={6}
          className="w-full mt-10"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={24}
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
            1536: {
              slidesPerView: 6,
              spaceBetween: 24,
            },
          }}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.title}>
              <CategoryCard title={category.title} icon={category.icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CategorySection;
