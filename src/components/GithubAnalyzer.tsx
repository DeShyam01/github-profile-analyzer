"use client";
// import searchIcon from '@/assets/searchIcon.svg'

const GithubAnalyzer = () => {
  return (
    <div className="w-150 h-max relative top-[40%] left-[50%] -translate-x-1/2 -translate-y-[40%]">
      <h1 className="font-bold text-3xl text-center text-primary">Analyze any GitHub Profile</h1>
      <p className="text-[16px] text-center mb-4 mt-3 text-secondary">Enter a GitHub username to analyze their profile and repositories</p>
      <form className="flex justify-evenly">
        <input type="text" placeholder="Enter GitHub username (e.g. octocat)" className="rounded p-2 w-[85%] border-theme border-2" />
        <input type="submit" value="Analyze" className="font-bold p-2 rounded text-center btn-primary" />
      </form>
    </div>
  );
};

export default GithubAnalyzer;
