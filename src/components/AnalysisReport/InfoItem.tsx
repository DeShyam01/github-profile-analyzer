import Image from "next/image";

const InfoItem = ({
  iconSrc,
  label,
  value,
}: {
  iconSrc: String;
  label: String;
  value: String;
}) => {
  return (
    <div className="h-max m-2 grid grid-cols-2 lg:flex lg:flex-col lg:gap-1">
      <span className="flex gap-2">
        <Image
          src={`${iconSrc}`}
          alt=""
          width={16}
          height={16}
        />
        <p className="text-[12px] text-secondary">{label}</p>
      </span>
      <p className="text-[12px] text-primary">{value}</p>
    </div>
  );
};

export default InfoItem;
