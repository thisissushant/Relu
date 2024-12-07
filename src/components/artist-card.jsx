/* eslint-disable react/prop-types */
import {} from "react";

export default function ArtistCard({
  backgroundImage,
  avatarSrc,
  name,
  username,
}) {
  return (
    <div className="w-[244px] h-[126px] relative overflow-hidden rounded-lg shadow-md">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white mr-3">
          <img
            src={avatarSrc}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Username */}
        <div className="text-white">
          <h3 className="font-bold text-sm leading-tight">{name}</h3>
          <p className="text-xs opacity-80">@{username}</p>
        </div>
      </div>
    </div>
  );
}
