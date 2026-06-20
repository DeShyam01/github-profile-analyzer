"use client";

import AnalysisReport from "@/components/AnalysisReport/AnalysisReport";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { fetchGitHubProfile } from "@/services/github";
import { UserProfile } from "@/types/profiles";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { sampleUsers } from "../../lib/constants";
import { HoleBackground } from "@/components/animate-ui/components/backgrounds/hole";

export default function Home() {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [username, setUsername] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAnalyze = async (targetUsername?: string) => {
    try {
      targetUsername = targetUsername ?? username;
      setLoading(true);

      if (!targetUsername.trim()) {
        setLoading(false);
        toast.dismiss();
        toast.warning("Enter username");
        return;
      }

      inputRef.current?.blur();

      const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

      if (!githubUsernameRegex.test(targetUsername.trim())) {
        setLoading(false);
        toast.dismiss();
        toast.error("Enter valid username");
        return;
      }
      const data = await fetchGitHubProfile(targetUsername);
      if (!data) {
        setLoading(false);
        toast.dismiss();
        toast.error("User not found");
        return;
      }
      toast.dismiss();
      toast.success("Found user data");
      setUserData(data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      toast.dismiss();
      toast.error("Something went wrong");
    }
  };

  const handleSuggestion = (username: string) => {
    setUsername(username);
  };

  return (
    <div className="min-h-screen">
      {/* ------------ Search bar --------------- */}
      <div className="h-full w-full flex flex-col items-center justify-center px-4 pt-40">
        <HoleBackground
          strokeColor="#73737325" // blur
          className="absolute h-full w-full -z-1"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
          }}
        />
        {!userData && (
          <>
            <h1 className="font-bold text-2xl sm:text-3xl text-center mt-16">
              Analyze any GitHub Profile
            </h1>
            <p className="text-sm sm:text-[16px] text-center mb-4 mt-3 text-secondary-foreground">
              Enter any GitHub username to analyze their profile and find
              insights about them
            </p>
          </>
        )}
        <div className="mx-auto w-full mt-4 max-w-2xl p-2">
          <form
            className="flex justify-evenly items-center gap-1"
            onSubmit={(e) => {
              e.preventDefault();
              handleAnalyze();
            }}
          >
            <Input
              ref={inputRef}
              value={username}
              placeholder="Enter GitHub username (e.g. octocat)"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <Button disabled={isLoading} size="lg">
              {isLoading ? <Spinner className="size-6" /> : "Analyze"}
            </Button>
          </form>
        </div>
      </div>
      {!isLoading && !username && (
        <>
          <p className="text-secondary-foreground/80 text-sm text-center mt-4">
            Try analyzing these profiles:
          </p>
          <div className="mt-2 mx-auto w-full max-w-md flex flex-wrap justify-center gap-2">
            {sampleUsers.map((user, index) => (
              <Badge
                key={index}
                variant="outline"
                className="hover:bg-primary hover:text-primary-foreground text-sm"
                onClick={() => {
                  setUsername(user);
                  handleAnalyze(user);
                }}
              >
                {user}
              </Badge>
            ))}
          </div>
        </>
      )}
      <p className="mt-10 text-muted-foreground text-sm text-center">
        Free tool - Analyze any Profile
      </p>
      {userData && <AnalysisReport userData={userData} />}
    </div>
  );
}
