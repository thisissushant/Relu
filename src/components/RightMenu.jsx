import { useState } from "react";
import ArtistCard from "./ArtistCard";

const artists = [
  {
    id: 1,
    name: "Jane Doe",
    username: "janedoe",
    backgroundImage: "/placeholder.svg?height=126&width=244",
    avatarSrc: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "John Smith",
    username: "johnsmith",
    backgroundImage: "/placeholder.svg?height=126&width=244",
    avatarSrc: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    name: "Alice Johnson",
    username: "alicej",
    backgroundImage: "/placeholder.svg?height=126&width=244",
    avatarSrc: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 4,
    name: "Bob Williams",
    username: "bobw",
    backgroundImage: "/placeholder.svg?height=126&width=244",
    avatarSrc: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 5,
    name: "Emma Brown",
    username: "emmab",
    backgroundImage: "/placeholder.svg?height=126&width=244",
    avatarSrc: "/placeholder.svg?height=48&width=48",
  },
];

export default function RightMenu() {
  const [selectedTab, setSelectedTab] = useState("artists");

  return (
    <div className="w-[260px] h-[707px] bg-white shadow-lg flex flex-col mr-2">
      <div className="flex ">
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            selectedTab === "artists" ? "text-green-600 " : "text-gray-500"
          }`}
          onClick={() => setSelectedTab("artists")}
        >
          Artists
        </button>
        <button
          className={`flex-1 py-2 px-4 text-sm font-medium ${
            selectedTab === "photographers"
              ? "text-green-600 "
              : "text-gray-500"
          }`}
          onClick={() => setSelectedTab("photographers")}
        >
          Photographers
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {selectedTab === "artists" ? (
          <div className="space-y-4">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} {...artist} />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-center">
              No photographers available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
