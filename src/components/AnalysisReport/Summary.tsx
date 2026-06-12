import { UserProfile } from "@/types/profiles";
import Image from "next/image";

const Summary = ({ user }: { user: UserProfile }) => {
  return (
    <div className="w-full">
      <div className="p-2 mb-4 bg-surface border-theme rounded-xl flex">
        <div className="bg-green-400/9.5 border border-green-600/50 rounded-full w-10 h-10 flex justify-center align-middle m-2">
          <Image src="/icons/bulb.svg" width={32} height={32} alt="" />
        </div>
        <div className="w-[75%]">
          <h1 className="text-base mb-2 text-green-400 font-semibold">
            Analysis Summary
          </h1>
          <p className="text-xs text-secondary">
            {user.name ? user.name : "This user"} has {`${user.public_repos}`} public repositories and is
            followed by {`${user.followers}`} users. They Primiarly work with{" "}
            {user.top_language || "not available"}.
          </p>
        </div>
      </div>
      <div className="bg-surface border-theme p-2 rounded-xl flex justify-between">
        <p className="text-sm text-primary flex items-center">Analysis Completed</p>
        <p className="text-xs text-secondary flex items-center">
          {new Date().toLocaleString("en-us",{
            month: "long",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
};

export default Summary;
