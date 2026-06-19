import { UserProfile } from "@/types/profiles";
import Image from "next/image";

const Summary = ({ user }: { user: UserProfile }) => {
  const timestamp = new Date().toLocaleString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="w-full text-card-foreground">
      <div className="bg-card border border-border p-2 mb-4 rounded-xl flex">
        <div className="bg-accent border border-green-600/50 rounded-full w-10 h-10 flex justify-center align-middle m-2">
          <Image src="/icons/bulb.svg" width={32} height={32} alt="" />
        </div>
        <div className="w-[75%]">
          <h1 className="text-base text-green-400 mb-2 font-semibold">
            Analysis Summary
          </h1>
          <p className="text-xs text-card-foreground">
            {user.name ? user.name : "This user"} has {`${user.public_repos}`}{" "}
            public repositories and is followed by {`${user.followers}`} users.
            They Primiarly work with {user.top_language || "not available"}.
          </p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between rounded-2xl">
        <p className="text-sm text-primary/90">Analysis Completed</p>
        <p className="text-xs text-muted-foreground">{timestamp}</p>
      </div>
    </div>
  );
};

export default Summary;
