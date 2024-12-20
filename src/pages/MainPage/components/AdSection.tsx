import JBLAd from "@/assets/images/jbl_ad.png";
import Countdown from "react-countdown";

const Timer = () => {
  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-start items-center gap-4">
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
          <span className="text-xl font-bold">
            {String(days).padStart(2, "0")}
          </span>
          <span className="text-sm">Days</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
          <span className="text-xl font-bold">
            {String(hours).padStart(2, "0")}
          </span>
          <span className="text-sm">Hours</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
          <span className="text-xl font-bold">
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-sm">Minutes</span>
        </div>
        <div className="flex flex-col items-center justify-center w-20 h-20 bg-white text-black rounded-full">
          <span className="text-xl font-bold">
            {String(seconds).padStart(2, "0")}
          </span>
          <span className="text-sm">Seconds</span>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black text-white">
      <Countdown
        date={Date.now() + 1000 * 60 * 60 * 24 * 5}
        renderer={renderer}
      />
    </div>
  );
};
const AdSection = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-black w-full py-10 px-4 md:px-[44px] flex flex-col md:flex-row justify-between items-center">
      <div className="text-center md:text-left">
        <p className="text-[#00FF66] text-base font-semibold">
          {t("labels.categories")}
        </p>
        <h2 className="text-2xl md:text-[48px] font-semibold max-w-full md:max-w-[443px] text-white mt-4 md:mt-8">
          {t("labels.enhance_music")}
        </h2>
        <div className="text-white mt-4 md:mt-8">
          <Timer />
        </div>
        <Link
          to="#"
          className="inline-flex justify-center items-center bg-[#00FF66] rounded w-full md:w-[171px] h-[56px] mt-6 md:mt-10 text-white"
        >
          {t("actions.buy_now")}
        </Link>
      </div>
      <div className="mt-6 md:mt-0">
        <img src={JBLAd} alt="" className="w-full md:w-auto" />
      </div>
    </section>
  );
};

export default AdSection;
