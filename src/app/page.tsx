import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/RightSidebar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <LeftSidebar />
        <main className="flex-1 overflow-y-auto">
          <MainContent />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
