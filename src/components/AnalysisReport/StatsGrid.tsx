import StatCard from "./StatCard"

const StatsGrid = ({public_repos, followers, following}:{public_repos: number, followers: number, following: number}) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-4 h-25 sm:h-35">
      <StatCard iconSrc="/icons/repository.svg" title="Public Repositories" value={public_repos} />
      <StatCard iconSrc="/icons/followers.svg" title="Followers" value={followers} />
      <StatCard iconSrc="/icons/following.svg" title="Following" value={following} />
    </div>
  )
}

export default StatsGrid
