import { CircleHelp, LayoutGrid, Search, Settings } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2 cursor-pointer">
        <Image src="/drive-logo.png" alt="Drive Logo" width={30} height={30} />
        <h1 className="text-[#444746] font-medium text-xl">Drive</h1>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 rounded-full w-full max-w-2xl bg-[#E9EEF6] focus-within:bg-white focus-within:border-b-4 transition-colors duration-200 border">
        <Search className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search in Drive"
          className="outline-none flex-1 bg-transparent"
        />
      </div>

      <div className="flex items-center gap-5 cursor-pointer select-none">
        <div className="relative w-9 h-9 rounded-full overflow-hidden hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-sm">
          <CircleHelp size={20} />
        </div>
        <div className="relative w-9 h-9 rounded-full overflow-hidden hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-sm">
          <Settings size={20} />
        </div>
        <div className="relative w-9 h-9 rounded-full overflow-hidden hover:bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-sm">
          <LayoutGrid size={20} />
        </div>
        <div className="relative w-9 h-9 rounded-full overflow-hidden bg-gray-300 flex items-center justify-center text-gray-700 font-semibold text-sm">
          User
        </div>
      </div>
    </header>
  );
}
