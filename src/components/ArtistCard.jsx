/* eslint-disable react/prop-types */
import {} from "react";
import Background from "../assets/pexels-ekaterina-12203460.png";
import Avtar2 from "../assets/pexels-antoni-shkraba-4442005.png";

export default function ArtistCard({ name, username }) {
  return (
    <div className="w-[244px] h-[126px] relative overflow-hidden rounded-lg shadow-md">
      <div className="absolute inset-0 bg-cover bg-center" />
      <img
        src={Background}
        alt={`${name}'s avatar`}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-30" />

      <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white mr-3">
          <img
            src={Avtar2}
            alt={`${name}'s avatar`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-white">
          <h3 className="font-bold text-sm leading-tight">{name}</h3>
          <p className="text-xs opacity-80">@{username}</p>
        </div>
      </div>
    </div>
  );
}
