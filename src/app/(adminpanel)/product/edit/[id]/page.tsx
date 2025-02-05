"use client"
import { useState } from "react";
import SidebarMenu from "../../../admincomponents/SidebarMenu";

export default function Product() {
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
          <SidebarMenu/>

          {/* Content Area */}
          <main
            className={`ml-[270px] max-lg:ml-0 max-lg:w-full p-6 bg-[#070b18] min-h-screen w-full ${
              sidebarOpen ? "max-lg:ml-[240px]" : "max-lg:ml-0"
            }`}
          >
            <h1 className="text-white text-3xl font-semibold">Product Page</h1>


            {/* Contact Form */}
            <div className="p-4 mx-auto max-w-xl bg-white font-[sans-serif] mt-8">
              <h1 className="text-2xl text-gray-800 font-bold text-center">Product Add</h1>
              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full py-2.5 px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm outline-none transition-all"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 text-gray-800 bg-gray-100 border focus:border-black focus:bg-transparent text-sm pt-3 outline-none transition-all"
                ></textarea>
                <button
                  type="button"
                  className="text-white bg-black hover:bg-gray-900 tracking-wide text-sm px-4 py-2.5 w-full outline-none"
                >
                  Send
                </button>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
