"use client"
import { useState } from "react";
import SidebarMenu from "../admincomponents/SidebarMenu";

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  return (
    <>
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
            <h1 className="text-white text-3xl font-semibold">Welcome back, John</h1>
            <div className="grid grid-cols-3 gap-6 mt-6">
              <div className="bg-[#0a1729] p-4 rounded-md">
                <h3 className="text-gray-400 text-sm">Used</h3>
                <p className="text-2xl text-white font-bold">25 GB</p>
                <p className="text-sm text-gray-400">of 50 GB</p>
              </div>
              <div className="bg-[#0a1729] p-4 rounded-md">
              <h3 className="text-gray-400 text-sm">Storage</h3>
                <p className="text-2xl text-white font-bold">2.5 TB</p>
              </div>
              <div className="bg-[#0a1729] p-4 rounded-md">
                <h3 className="text-gray-400 text-sm">Storage</h3>
                <p className="text-2xl text-white font-bold">500 GB</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
