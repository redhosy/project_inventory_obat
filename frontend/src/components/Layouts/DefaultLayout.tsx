"use client";
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      {/* ===== Page Wrapper Start ===== */}
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
        {/* ===== Sidebar Start ===== */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* ===== Sidebar End ===== */}

        {/* ===== Content Area Start ===== */}
        <div className="relative flex flex-1 flex-col transition-all duration-300 lg:ml-72">
          {/* ===== Header Start ===== */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {/* ===== Header End ===== */}

          {/* ===== Main Content Start ===== */}
          <main className="flex-1 overflow-y-auto bg-white dark:bg-gray-800">
            <div className="container mx-auto p-4 sm:p-6 lg:p-8">
              {children}
            </div>
          </main>
          {/* ===== Main Content End ===== */}
        </div>
        {/* ===== Content Area End ===== */}
      </div>
      {/* ===== Page Wrapper End ===== */}
    </>
  );
}
