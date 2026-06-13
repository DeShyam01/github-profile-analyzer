import { UserProfile } from "@/types/profiles";

const ProfileHeader = ({avatar_url, name, username, bio}: {avatar_url: string, name: string, username: string, bio: string}) => {
  return (
    <div className="p-2 flex justify-around">
      <div className="">
        <img
          src={`${avatar_url}`}
          alt="avatar"
          className="rounded-full w-25 md:w-30 lg:w-50"
        />
      </div>
      <div className="ml-6">
        {name && (<h1 className="font-bold text-xl lg:text-3xl">{name}</h1>)}
        <a href={`https://github.com/${username}`} target="_blank" className="text-blue-600/90 text-interactive text-base">@{username}</a>
        <p className="mt-4 text-[14px]">Bio:</p>
        <p
          className={`text-[10.81px] ${!bio ? "text-card-foreground/75" : "text-secondary-foreground"}`}
        >
          {bio ? bio : "Not provided"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
