import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProfileHeader = ({
  avatar_url,
  name,
  username,
  bio,
}: {
  avatar_url: string;
  name: string;
  username: string;
  bio: string;
}) => {
  return (
    <div className="flex justify-around items-center">
      <Avatar className="size-25 sm:size-32">
        <AvatarImage src={avatar_url} />
        <AvatarFallback>Profile</AvatarFallback>
      </Avatar>
      <div className="ml-6">
        {name && <h1 className="font-bold text-xl lg:text-3xl">{name}</h1>}
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          className="text-blue-600/90 text-interactive text-base flex items-center gap-1"
        >
          @{username} <FaExternalLinkAlt size={14} />{" "}
        </a>
        <p className="mt-4 text-[14px]">Bio:</p>
        <p
          className={`text-[10.81px] md:w-[75%] ${!bio ? "text-card-foreground/75" : "text-secondary-foreground"}`}
        >
          {bio ? bio : "Not provided"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
