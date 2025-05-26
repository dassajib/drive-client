import { CircleChevronRight } from "lucide-react";

export default function RightSidebar() {
  return (
    <aside className="w-20 bg-white border-l p-4 overflow-y-auto flex flex-col justify-end">
      <p className="text-sm text-gray-600 cursor-pointer">
        <CircleChevronRight size={24} />
      </p>
    </aside>
  );
}
