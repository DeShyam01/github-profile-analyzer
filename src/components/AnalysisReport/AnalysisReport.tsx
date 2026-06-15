"use client";

import { UserProfile } from "@/types/profiles";
import ProfileHeader from "./ProfileHeader";
import ProfileInfoGrid from "./ProfileInfoGrid";
import StatsGrid from "./StatsGrid";
import Summary from "./Summary";
import { Card, CardContent } from "../ui/card";

const AnalysisReport = ({ userData }: { userData: UserProfile }) => {
  return (
    <div className="w-full h-full p-4 sm:p-8">
      <div className="text-card-foreground bg-card border border-border mb-4 p-6 gap-2 flex justify-between rounded-xl">
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
      <Card className="mb-4 lg:hidden">
        <CardContent>
          <ProfileInfoGrid
            location={userData.location}
            company={userData.company}
            blog={userData.blog}
            top_language={userData.top_language}
            github_created_at={userData.github_created_at}
            github_updated_at={userData.github_updated_at}
            className="grid grid-cols-1"
          />
        </CardContent>
      </Card>
      <Summary user={userData} />
    </div>
  );
};

export default AnalysisReport;
