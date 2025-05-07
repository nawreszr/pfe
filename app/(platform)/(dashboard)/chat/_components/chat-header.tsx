"use client";

import { Button } from "@/components/ui/button";
import { UIChat } from "@/types";
import { User, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ChatHeaderProps {
  selectedChatData: UIChat;
  showProfile: boolean;
  setShowProfile: (show: boolean) => void;
  showSearch: boolean;
  setShowSearch: (show: boolean) => void;
}

export default function ChatHeader({
  selectedChatData,
  showProfile,
  setShowProfile,
  showSearch,
  setShowSearch,
}: ChatHeaderProps) {
  const handleToggleProfile = () => {
    if (showProfile) {
      // If ProfilePanel is open (ChevronRight is visible), close both panels
      setShowProfile(false);
      setShowSearch(false);
    } else if (showSearch) {
      // If SearchPanel is open, close it and don't open ProfilePanel
      setShowSearch(false);
      setShowProfile(false);
    } else {
      // If neither panel is open, open ProfilePanel
      setShowProfile(true);
      setShowSearch(false);
    }
  };

  return (
    <div className="bg-white border-b px-4 py-1">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={handleToggleProfile}
        >
          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
            {selectedChatData.recipientPhoto ? (
              <Image
                width={40}
                height={40}
                src={selectedChatData.recipientPhoto || "/placeholder.svg"}
                alt={`${selectedChatData.recipientFirstName} ${selectedChatData.recipientLastName}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={20} className="text-gray-600" />
            )}
          </div>
          <div className="ml-3">
            <h2 className="font-medium">
              {selectedChatData.recipientFirstName} {selectedChatData.recipientLastName}
            </h2>
            <p className="text-sm text-gray-500">En ligne</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleToggleProfile}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          {showProfile || showSearch ? <ChevronRight size={20} /> : <User size={20} />}
        </Button>
      </div>
    </div>
  );
}