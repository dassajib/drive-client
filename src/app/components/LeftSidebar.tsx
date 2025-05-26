"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Clock3,
  FilePlus2,
  FolderPlus,
  FolderUp,
  HardDrive,
  House,
  Star,
  Trash2,
  Users,
} from "lucide-react";

export default function LeftSidebar() {
  const [openPrimaryModal, setOpenPrimaryModal] = useState(false);
  const [openNewFolderModal, setOpenNewFolderModal] = useState(false);

  return (
    <aside className="w-64 bg-white border-r p-4 overflow-y-auto">
      <Button
        onClick={() => setOpenPrimaryModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-full px-6 py-2 cursor-pointer"
      >
        + New
      </Button>

      {/* Primary Modal */}
      <Dialog open={openPrimaryModal} onOpenChange={setOpenPrimaryModal}>
        <DialogContent className="left-4 top-20 w-72 absolute translate-x-0 translate-y-0 shadow-lg">
          <DialogHeader>
            <DialogTitle>Upload</DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            <Button
              onClick={() => {
                setOpenPrimaryModal(false);
                setOpenNewFolderModal(true);
              }}
              variant="outline"
              className="w-full justify-start cursor-pointer hover:bg-gray-300"
            >
              <FolderPlus /> 
              <span>New Folder</span>
            </Button>
            <Button variant="outline" className="w-full justify-start cursor-pointer hover:bg-gray-300">
              <FilePlus2 />
              <span>Upload File</span>
            </Button>
            <Button variant="outline" className="w-full justify-start cursor-pointer hover:bg-gray-300">
              <FolderUp />
              <span>Upload Folder</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* New Folder Modal */}
      <Dialog open={openNewFolderModal} onOpenChange={setOpenNewFolderModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>New Folder</DialogTitle>
          </DialogHeader>
          <Input type="text" placeholder="Folder Name" />
          <DialogFooter className="flex justify-end gap-2 mt-4">
            <Button
              variant="outline"
              className="text-blue-700 hover:text-blue-700 cursor-pointer"
              onClick={() => setOpenNewFolderModal(false)}
            >
              Cancel
            </Button>
            <Button variant="outline" className="text-blue-700 hover:text-blue-700 cursor-pointer">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Sidebar nav */}
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

function SidebarItem({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <p className="hover:text-blue-600 hover:bg-gray-200 rounded-lg px-2 py-2 cursor-pointer flex gap-3 items-center">
      <Icon size={18} />
      <span>{label}</span>
    </p>
  );
}
