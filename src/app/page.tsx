import Header from "@/components/Header";
import GithubAnalyzer from "@/components/GithubAnalyzer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <GithubAnalyzer />
      </main>
      <Footer />
    </div>
  );
}
