"use client";

import { fetchGitHubProfile } from "@/services/github";
import {useState} from 'react';

const GithubAnalyzer = () => {
  const [username, setUsername] = useState('');

  const handleAnalyze = async () => {
    const data = await fetchGitHubProfile(username);
    console.log(data);
  };

  return (
    <div className="h-max relative top-[40%] left-[50%] -translate-x-1/2 translate-y-[-40%] w-[90%] sm:w-150">
      <h1 className="font-bold text-2xl sm:text-3xl text-center text-primary">Analyze any GitHub Profile</h1>
      <p className="text-sm sm:text-[16px] text-center mb-4 mt-3 text-secondary">Enter a GitHub username to analyze their profile and repositories</p>
      <form className="flex justify-evenly">
        <input type="text" placeholder="Enter GitHub username (e.g. octocat)" className="rounded p-2 border-theme border-2 outline-0 w-[75%] sm:w-[85%]" 
          onChange={(e)=>{
            setUsername(e.target.value);
          }}
        />
        <input type="button" value="Analyze" className="font-bold p-2 rounded text-center btn-primary"
          onClick={handleAnalyze}
        />
      </form>
    </div>
  );
};

export default GithubAnalyzer;
