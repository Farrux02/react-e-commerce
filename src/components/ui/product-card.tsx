import { IoIosHeartEmpty } from "react-icons/io";
import { Button } from "./button";
import { IoEyeOutline } from "react-icons/io5";
import StarRating from "react-star-ratings";

interface IComponentProps {
  imageUrl: string | React.ReactNode;
  discountPercent?: number;
  discountPrice?: number;
  price: number;
  title: string;
  rating: number;
  feedbacksQuantity: number;
}

const ProductCard = ({
  feedbacksQuantity,
  imageUrl,
  price,
  rating,
  title,
  discountPercent,
  discountPrice,
}: IComponentProps) => {
  return (
    <div className="max-w-[270px] w-full h-[350px]">
      <div className="bg-[#f5f5f5] w-full h-[250px] relative rounded-sm flex items-center justify-center">
        {discountPercent && (
          <div className="w-[55px] h-[26px] rounded bg-red-600 text-white text-sm flex justify-center items-center absolute top-3 left-3">
            -{discountPercent}%
          </div>
        )}
        <img src={imageUrl} alt={title} className="rounded-sm" />
        <Button className="p-0 h-[34px] w-[34px] rounded-full bg-white hover:bg-gray-100 top-3 right-3 absolute">
          <IoIosHeartEmpty className="!w-5 !h-5 text-black" />
        </Button>
        <Button className="p-0 h-[34px] w-[34px] rounded-full bg-white hover:bg-gray-100 top-[54px] right-3 absolute">
          <IoEyeOutline className="!w-5 !h-5 text-black" />
        </Button>
      </div>
      <h4 className="mt-4 text-base font-medium">{title}</h4>
      <div className="mt-2 text-base font-medium flex items-center gap-x-3">
        <p className="text-red-600">${price}</p>
        {discountPrice && (
          <p className="text-gray-400 line-through">${discountPrice}</p>
        )}
      </div>
      <div className="flex items-center gap-x-2">
        <StarRating
          numberOfStars={5}
          rating={rating}
          name="rating"
          starDimension="20px"
          starSpacing="0"
          starRatedColor="#FFAD33"
        />
        <p className="text-[14px] font-semibold">({feedbacksQuantity})</p>
      </div>
    </div>
  );
};

export default ProductCard;
