import Image from "next/image";
import React, { AnchorHTMLAttributes } from "react";

const InfoItem = ({
  iconSrc,
  label,
  value,
}: {
  iconSrc: string;
  label: string;
  value: string | React.ReactElement<HTMLAnchorElement>;
}) => {
  return (
    <div className="h-max m-2 grid grid-cols-2 lg:grid-cols-1">
      <span className="flex gap-2">
        <Image
          src={`${iconSrc}`}
          alt=""
          width={16}
          height={16}
        />
        <p className="text-card-foreground/85 text-[12px]">{label}</p>
      </span>
      {typeof value === "string" ? (<p className="text-[12px]">{value}</p>) : (value)}
    </div>
  );
};

export default InfoItem;
