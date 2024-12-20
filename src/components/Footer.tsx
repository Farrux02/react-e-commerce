import { Input } from "./ui/input";
import QrCode from "@/assets/images/qrcode.png";
import GPlay from "@/assets/images/gplay.png";
import AppStore from "@/assets/images/appstore.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-4">
      <div className="container mx-auto max-w-[1170px] px-4 flex flex-col md:flex-row gap-8 md:gap-[87px]">
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-4">Exclusive</h3>
          <p className="mb-4 text-xl font-medium">Subscribe</p>
          <p className="mb-6 text-base">Get 10% off your first order</p>
          <form className="flex items-center border border-white rounded py-3 px-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none text-sm p-0 h-6 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <button type="submit" className="text-white">
              ➤
            </button>
          </form>
        </div>
        <div className="flex-1 max-w-[175px]">
          <h3 className="text-xl font-medium mb-4">Support</h3>
          <p className="text-sm mb-4">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-sm mb-4">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        <div className="flex-1 w-[123px]">
          <h3 className="text-xl font-medium mb-4">Account</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-sm">
                My Account
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                Login / Register
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                Cart
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex-1 w-[109px]">
          <h3 className="text-xl font-medium mb-4">Quick Link</h3>
          <ul className="space-y-2">
            <li>
              <Link to="#" className="text-sm">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="#" className="text-sm">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-medium mb-4">Download App</h3>
          <p className="text-sm mb-4 text-[#fafafa]">
            Save $3 with App New User Only
          </p>
          <div className="flex gap-x-[10px]">
            <div className="mb-4 ">
              <img src={QrCode} alt="QR Code" className="mb-2" />
            </div>
            <div className="">
              <Link to="#">
                <img
                  src={GPlay}
                  alt="Google Play"
                  className="w-[110px] h-10 object-contain"
                />
              </Link>
              <Link to="#">
                <img
                  src={AppStore}
                  alt="App Store"
                  className="w-[110px] h-10 object-cover"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center border-t border-gray-700 mt-10 pt-4">
        <p className="text-sm">© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
