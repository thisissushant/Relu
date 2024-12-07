import {} from "react";
import { Search, Filter } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20 bg-gray-100 ">
      {/* Left section - Logo */}
      <div className="w-[260px] h-20 flex items-center justify-center ">
        <img
          src="/placeholder.svg?height=40&width=120"
          alt="Logo"
          className="h-10"
        />
      </div>

      {/* Middle section - Search */}
      <div className="w-[620px] h-20 flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 pl-10 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Right section - Become a Seller */}
      <div className="w-[260px] h-20 flex items-center justify-center bg-[#88C2BB] mr-2">
        <button className="text-white font-semibold text-lg hover:underline">
          Become a Seller
        </button>
      </div>
    </header>
  );
}
