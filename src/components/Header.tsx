import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLang = useCallback(
    (lang: string) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    },
    [i18n]
  );

  return (
    <header className="w-full border-b pb-4">
      <div className="bg-black w-full py-3">
        <div className="flex flex-col md:flex-row max-w-[1170px] mx-auto">
          <p className="text-white text-center flex-1 text-[14px] mb-2 md:mb-0">
            {t("labels.summer_sale")}{" "}
            <Link to="#" className="font-semibold underline">
              {t("actions.shop_now")}
            </Link>
          </p>
          <Select value={i18n.language} onValueChange={changeLang}>
            <SelectTrigger className="w-[78px] p-0 h-6 bg-transparent border-none text-white">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto mt-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-2xl font-bold">Exclusive</p>
        </div>
        <ul className="flex flex-col md:flex-row gap-y-4 md:gap-x-12">
          <li>
            <NavLink to="/" className="text-base font-normal">
              {t("labels.home")}
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-base font-normal">
              {t("labels.contact")}
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-base font-normal">
              {t("labels.about")}
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="text-base font-normal">
              {t("labels.sign_up")}
            </NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5 mt-4 md:mt-0">
          <div>
            <Input
              placeholder={t("labels.looking_for")}
              className="rounded bg-[#f5f5f5] border-none w-full md:w-[243px] px-5 h-[38px] placeholder:text-opacity-50"
            />
          </div>
          <NavLink to="#">
            <IoIosHeartEmpty className="!w-8 !h-8 text-black" />
          </NavLink>
          <NavLink to="#">
            <IoCartOutline className="!w-8 !h-8 text-black" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
