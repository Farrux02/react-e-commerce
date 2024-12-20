import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SliderBg from "@/assets/images/big-slider-bg.png";
import { FaChevronRight } from "react-icons/fa6";

const TopSection = () => {
  return (
    <section className="max-w-[1170px] mx-auto flex flex-col md:flex-row">
      <div className="border-r pr-4">
        <ul className="pt-10 flex flex-col gap-y-4 w-full md:w-[217px]">
          <li>
            <Link
              to="#"
              className="text-base flex items-center justify-between"
            >
              Woman's Fashion
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="text-base flex items-center justify-between"
            >
              Man's Fashion
              <FaChevronRight />
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Home & Lifestyle
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Medicine
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Sports & Outdoor
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Baby's & Toys
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Groceries & Pets
            </Link>
          </li>
          <li>
            <Link to="#" className="text-base">
              Health & Beauty
            </Link>
          </li>
        </ul>
      </div>
      <div className="ml-0 mt-10 md:ml-[45px]">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="max-w-full md:max-w-[892px] h-[344px] big-slider relative"
        >
          {Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
              <img
                src={SliderBg}
                alt="slider-bg"
                className="object-cover h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopSection;
