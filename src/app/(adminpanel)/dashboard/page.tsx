"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SidebarMenu from "../admincomponents/SidebarMenu";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check if the user is authenticated when the component mounts
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (loggedIn === "true") {
      setIsAuthenticated(true); // User is authenticated
    } else {
      router.push("/"); // Redirect to login page if not authenticated
    }
  }, [router]);

  // Function to handle the toggle of the menu
  const toggleMenu = (menuId: number) => {
    if (activeMenu === menuId) {
      setActiveMenu(null); // Close if the same menu is clicked again
    } else {
      setActiveMenu(menuId); // Open the clicked menu
    }
  };

  // Toggle sidebar visibility for mobile
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  if (!isAuthenticated) {
    return null; // Prevent rendering of the dashboard if not authenticated
  }

  return (
    <div className="relative bg-[#070b18] h-full min-h-screen font-[sans-serif]">
      <div className="flex items-start">
        {/* Sidebar */}
        <SidebarMenu />

        {/* Content Area */}
        <main
          className={`ml-[270px] max-lg:ml-0 max-lg:w-full p-6 bg-[#070b18] min-h-screen w-full ${
            sidebarOpen ? "max-lg:ml-[240px]" : "max-lg:ml-0"
          }`}
        >
          
          <div className="grid grid-cols-3 gap-6 mt-6">
           
          </div>
        </main>
      </div>
    </div>
  );
}
