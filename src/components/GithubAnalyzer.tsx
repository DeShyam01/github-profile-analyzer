"use client";

import { useState } from "react";
import { UserProfile } from "@/types/profiles";
import { fetchGitHubProfile } from "@/services/github";
import AnalysisReport from "./AnalysisReport/AnalysisReport";

const GithubAnalyzer = () => {
  const [userData, setUserData] = useState<UserProfile | null>(null);
  const [username, setUsername] = useState<string>("");

  const handleAnalyze = async () => {
    try {
      if (!username) {
        alert("Enter username");
        return;
      }
      const data = await fetchGitHubProfile(username);
      setUserData(data);
    } catch (e) {
      console.error('Failed to fetch User');
    }
  };

  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-150 p-2">
        {!userData && (
          <>
            <h1 className="font-bold text-2xl sm:text-3xl text-center text-primary">
              Analyze any GitHub Profile
            </h1>
            <p className="text-sm sm:text-[16px] text-center mb-4 mt-3 text-secondary">
              Enter a GitHub username to analyze their profile and repositories
            </p>
          </>
        )}
        <form
          className="flex justify-evenly"
          onSubmit={(e) => {
            e.preventDefault();
            handleAnalyze();
          }}
        >
          <input
            type="text"
            placeholder="Enter GitHub username (e.g. octocat)"
            className="rounded p-2 border-theme border-2 outline-0 w-[75%] sm:w-[85%]"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
          <input
            type="button"
            value="Analyze"
            className="font-bold p-2 rounded text-center btn-primary"
            onClick={handleAnalyze}
          />
        </form>
      </div>
      {userData && <AnalysisReport userData={userData} />}
    </div>
  );
};

export default GithubAnalyzer;
