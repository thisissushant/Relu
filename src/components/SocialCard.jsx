/* eslint-disable react/prop-types */
import { useState } from "react";
import { MoreVertical, Heart, MessageCircle, Share2 } from "lucide-react";

export default function SocialCard({
  name,
  username,
  avatarSrc,
  text,
  imageSrc,
  likes,
  comments,
  shares,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-[620px] h-[600px] bg-white rounded-lg shadow-md flex flex-col">
      <div className="flex-shrink-0 flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <div className="h-12 w-12 rounded-full overflow-hidden mr-3">
            <img
              src={avatarSrc}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">@{username}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-grow overflow-hidden p-4">
        <div className="mb-4">
          {isExpanded ? (
            <p className="text-sm">{text}</p>
          ) : (
            <>
              <p className="text-sm line-clamp-2">{text}</p>
              {text.length > 100 && (
                <button
                  className="text-sm text-blue-500 mt-1"
                  onClick={() => setIsExpanded(true)}
                >
                  Read More
                </button>
              )}
            </>
          )}
        </div>
        <div className="w-[560px] h-[306px] bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={imageSrc}
            alt="Post image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex-shrink-0 flex justify-between items-center p-4 border-t">
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <Heart className="mr-2 h-5 w-5" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <MessageCircle className="mr-2 h-5 w-5" />
          <span>{comments}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-gray-700">
          <Share2 className="mr-2 h-5 w-5" />
          <span>{shares}</span>
        </button>
      </div>
    </div>
  );
}
