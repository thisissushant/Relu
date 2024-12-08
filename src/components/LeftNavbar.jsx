import {} from "react";
import {
  Home,
  Bell,
  ShoppingBag,
  MessageCircle,
  Wallet,
  Star,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const navItems = [
  { name: "Home", icon: Home },
  { name: "Notification", icon: Bell },
  { name: "Shop", icon: ShoppingBag },
  { name: "Conversation", icon: MessageCircle },
  { name: "Wallet", icon: Wallet },
  { name: "Subscription", icon: Star },
  { name: "Profile", icon: User },
  { name: "Setting", icon: Settings },
];

export default function LeftNavbar() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <nav className="w-[260px] h-[707px] bg-white flex flex-col justify-between">
      <ul className="space-y-2 pt-4">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              href="#"
              className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <item.icon className="h-6 w-6" />
              <span className="font-medium">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className="pb-4">
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 w-full text-left"
        >
          <LogOut className="h-6 w-6" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </nav>
  );
}
