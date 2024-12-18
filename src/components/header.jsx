import {} from "react";
import { Search, Filter } from "lucide-react";
import Avtar1 from "../assets/istockphoto-1092844736-612x612.jpg";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full h-20 bg-white ">
      <div className="w-[260px] h-20 flex items-center justify-center ">
        <img src={Avtar1} alt="Logo" className="h-10" />
      </div>

      <div className="w-[620px] h-20 flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-12 pl-10 pr-12  focus:outline-none "
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="w-[260px] h-20 flex items-center justify-center bg-[#88C2BB] mr-2">
        <button className="text-white font-semibold text-lg hover:underline">
          Become a Seller
        </button>
      </div>
    </header>
  );
}
