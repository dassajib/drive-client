"use client"

import { Card, CardContent } from "@/components/ui/card"
import { EllipsisVertical, Folder } from "lucide-react"
import { useEffect, useState } from "react"
import axios from "axios"

type Folder = {
  id: string
  folder_name: string
}

export default function MainContent() {
  const [folders, setFolders] = useState<Folder[]>([])

  useEffect(() => {
    const fetchFoldersData = async () => {
      try {
        const res = await axios.get('/data/folder.json');
        setFolders(res.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchFoldersData();
  }, []);

  return (
    <main className="p-6 flex flex-wrap gap-4">
      {folders.map((folders) => (
        <Card key={folders.id} className="w-64 h-20 hover:shadow-md">
          <CardContent className="p-4 text-center font-medium flex justify-between items-center">
            <Folder />
            <span>{folders.folder_name}</span>
            <EllipsisVertical className="cursor-pointer" />
          </CardContent>
        </Card>
      ))}
    </main>
  )
}