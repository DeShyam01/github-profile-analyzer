"use client";

import { useState } from "react";
import { UserProfile } from "@/types/profiles";
import { fetchGitHubProfile } from "@/services/github";
import AnalysisReport from "./AnalysisReport/AnalysisReport";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const GithubAnalyzer = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [username, setUsername] = useState<string>("");

  const handleAnalyze = async () => {
    try {
      if (!username.trim()) {
        alert("Enter username");
        return;
      }

      const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;

      if (!githubUsernameRegex.test(username.trim())) { 
        alert("Invalid username enter correct username");
        return;
      }
      const data = await fetchGitHubProfile(username);
      setUserData(data);
    } catch (e) {
      alert("Failed to fetch User");
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-150 p-2">
        {!userData && (
          <>
            <h1 className="font-bold text-2xl sm:text-3xl text-center">
              Analyze any GitHub Profile
            </h1>
            <p className="text-sm sm:text-[16px] text-center mb-4 mt-3 text-secondary-foreground">
              Enter a GitHub username to analyze their profile and repositories
            </p>
          </>
        )}
        <form
          className="flex justify-evenly items-center gap-1"
          onSubmit={(e) => {
            e.preventDefault();
            handleAnalyze();
          }}
        >
          <Input
            placeholder="Enter GitHub username (e.g. octocat)"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <Button size="lg" onClick={handleAnalyze}>
            Analyze
          </Button>
        </form>
      </div>
      {userData && <AnalysisReport userData={userData} />}
    </div>
  );
};

export default GithubAnalyzer;
