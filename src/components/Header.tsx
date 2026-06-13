import {ThemeToggle} from "@/components/ThemeToggle";

const Header = () => {
  return (
    <div className="bg-card border border-border flex items-center justify-between w-full h-16 px-4 sticky top-0 left-0 shrink-0">
      <h1 className="text-xl font-bold flex align-middle justify-center">Github Analyzer</h1>
      <ThemeToggle />
    </div>
  )
}

export default Header
