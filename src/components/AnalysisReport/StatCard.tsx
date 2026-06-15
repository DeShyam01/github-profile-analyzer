import Image from "next/image";
import { Card, CardContent, CardTitle } from "../ui/card";

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
    <Card className="justify-between items-center">
      <CardTitle className="flex gap-1 sm:flex-col sm:items-center">
        <Image
          src={`${iconSrc}`}
          alt={`icon`}
          width={18}
          height={18}
          className="sm:size-8 lg:size-12"
        />
        <p className="text-card-foreground/90">{`${title}`}</p>
      </CardTitle>
      <CardContent>
        <p className="font-bold text-2xl text-center">{`${value}`}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
