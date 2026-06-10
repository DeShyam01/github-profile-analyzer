"use client";

import { UserProfile } from "@/types/profiles";
import ProfileHeader from "./ProfileHeader";
import ProfileInfoGrid from "./ProfileInfoGrid";
import StatsGrid from "./StatsGrid";
import Summary from "./Summary";

const AnalysisReport = ({ userData }: { userData: UserProfile }) => {
  return (
    <div className="w-full h-full p-8">
      <div className="flex justify-between bg-surface rounded-xl mb-4 border-theme p-6">
        <ProfileHeader
          avatar_url={userData.avatar_url}
          name={userData.name}
          username={userData.username}
          bio={userData.bio}
        />
        <ProfileInfoGrid
          location={userData.location}
          company={userData.company}
          blog={userData.blog}
          top_language={userData.top_language}
          github_created_at={userData.github_created_at}
          github_updated_at={userData.github_updated_at}
          className="hidden lg:grid lg:grid-cols-2"
        />
      </div>
      <StatsGrid
        public_repos={userData.public_repos}
        followers={userData.followers}
        following={userData.following}
      />
      <ProfileInfoGrid
        location={userData.location}
        company={userData.company}
        blog={userData.blog}
        top_language={userData.top_language}
        github_created_at={userData.github_created_at}
        github_updated_at={userData.github_updated_at}
        className="grid grid-cols-1 lg:hidden"
      />
      <Summary user={userData}/>
    </div>
  );
};

export default AnalysisReport;
