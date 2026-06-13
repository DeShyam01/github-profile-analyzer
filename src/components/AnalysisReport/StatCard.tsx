import Image from "next/image";

const StatCard = ({
  iconSrc,
  title,
  value,
}: {
  iconSrc: string;
  title: string;
  value: number;
}) => {
  return (
    <div className="bg-card border border-border flex flex-col items-center rounded-xl justify-around p-2 sm:p-4">
      <Image src={`${iconSrc}`} alt={`icon`} width={32} height={32} className="hidden sm:block" />
      <span className="flex gap-1 sm:block">
        <Image src={`${iconSrc}`} alt={`icon`} width={16} height={16} className="inline sm:hidden" />
        <p className="text-card-foreground/90 text-xs sm:text-lg inline sm:block">{`${title}`}</p>
      </span>
      <p className="font-bold text-2xl">{`${value}`}</p>
    </div>
  );
};

export default StatCard;
