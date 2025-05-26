import { Button } from "@/components/ui/button";
import { Clock3, HardDrive, House, Star, Trash2, Users } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4 overflow-y-auto">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full px-6 py-2 cursor-pointer">
        + New
      </Button>
      <nav className="space-y-3 text-sm font-medium pt-4">
        <SidebarItem icon={House} label="Home" />
        <SidebarItem icon={HardDrive} label="My Drive" />
        <SidebarItem icon={Users} label="Shared with me" />
        <SidebarItem icon={Clock3} label="Recent" />
        <SidebarItem icon={Star} label="Starred" />
        <SidebarItem icon={Trash2} label="Trash" />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon: Icon, label }: { icon: any, label: string }) {
  return (
    <p className="hover:text-blue-600 hover:bg-gray-200 rounded-lg px-2 py-2 cursor-pointer flex gap-3 items-center">
      <Icon size={18} />
      <span>{label}</span>
    </p>
  )
}