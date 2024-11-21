import Sidebar from "../components/Sidebar";
import SkillTest from "../components/SkillTest";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8">
        <SkillTest />
      </main>
    </div>
  );
}
