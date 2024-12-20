import PS5Img from "@/assets/images/ps5slim.png";


const NewArrivalSection = () => {
  const { t } = useTranslation();
  return (
    <section className="mt-[80px]">
      <div className="flex items-center gap-x-4">
        <div className="w-5 h-10 bg-red-600 rounded"></div>
        <p className="text-red-600 text-base font-semibold">
          {t("labels.todays")}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <h2 className="text-[36px] font-semibold">{t("labels.flash_sales")}</h2>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 gap-[30px] max-h-[600px] mt-[60px]">
        <div
          className="col-span-2 row-span-2 bg-black text-white rounded-lg p-6 h-[600px] max-md:h-[300px] grid content-end"
          style={{
            backgroundImage: `url(${PS5Img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
          }}
        >
          <h2 className="text-xl font-bold">PlayStation 5</h2>
          <p className="text-sm mb-4">
            Black and White version of the PS5 coming out on sale.
          </p>
          <Link to="#" className="text-white underline font-semibold">
            Shop Now
          </Link>
        </div>

        <div
          className="col-span-2 bg-black text-white rounded-lg p-6 grid content-end"
          style={{
            backgroundImage: `url(${PS5Img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            backgroundPositionX: "right",
          }}
        >
          <h2 className="text-xl font-bold">Women's Collections</h2>
          <p className="text-sm mb-4">
            Featured woman collections that give you another vibe.
          </p>
          <Link to="#" className="text-white underline font-semibold">
            Shop Now
          </Link>
        </div>

        <div
          className="bg-black text-white rounded-lg p-6 grid content-end"
          style={{
            backgroundImage: `url(${PS5Img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            backgroundPositionX: "center",
          }}
        >
          <h2 className="text-xl font-bold">Speakers</h2>
          <p className="text-sm mb-4">Amazon wireless speakers.</p>
          <Link to="#" className="text-white underline font-semibold">
            Shop Now
          </Link>
        </div>

        <div
          className="bg-black text-white rounded-lg p-6 grid content-end"
          style={{
            backgroundImage: `url(${PS5Img})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPositionY: "bottom",
            backgroundPositionX: "center",
          }}
        >
          <h2 className="text-xl font-bold">Perfume</h2>
          <p className="text-sm mb-4">GUCCI INTENSE OUD EDP.</p>
          <Link to="#" className="text-white underline font-semibold">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivalSection;
