import { UserProfile } from "@/types/profiles";

const ProfileHeader = ({avatar_url, name, username, bio}: {avatar_url: String, name: String, username: String, bio: String}) => {
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
        <h1 className="font-bold text-xl lg:text-3xl">{name}</h1>
        <p className="text-interactive text-[18.54px]">@{username}</p>
        <p className="mt-4 text-[14px]">Bio:</p>
        <p
          className={`text-[10.81px] ${bio === null ? "text-muted" : "text-secondary"}`}
        >
          {bio ? bio : "Not provided"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHeader;
