const CategoryCard = ({
  icon,
  title,
}: {
  icon: string | React.ReactNode;
  title: string;
}) => {
  return (
    <div className="w-[170px] h-[145px] rounded border flex flex-col items-center justify-between py-6">
      <div>{icon}</div>
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
