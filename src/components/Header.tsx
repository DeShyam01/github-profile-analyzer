import ThemeToggle from "@/components/ThemeToggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full h-16 px-4 bg-surface text-theme border-theme">
      <h1 className="text-xl font-bold flex align-middle justify-center">Github Analyzer</h1>
      <ThemeToggle />
    </div>
  )
}

export default Header
