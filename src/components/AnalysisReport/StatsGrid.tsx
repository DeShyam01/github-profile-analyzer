import StatCard from "./StatCard"

const StatsGrid = ({public_repos, followers, following}:{public_repos: number, followers: number, following: number}) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4">
      <StatCard iconSrc="/icons/repository.svg" title="Repositories" value={public_repos} />
      <StatCard iconSrc="/icons/followers.svg" title="Followers" value={followers} />
      <StatCard iconSrc="/icons/following.svg" title="Followings" value={following} />
    </div>
  )
}

export default StatsGrid
