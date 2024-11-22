"use client";
import "jsvectormap/dist/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
// import "../css/satoshi.css";
// import "../css/style.css";
import "../css/global.css";
import React, { useEffect, useState } from "react";
import Loader from "../components/common/Loader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
  <body suppressHydrationWarning={true}>
    <div className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-300">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        children
      )}
    </div>
  </body>
</html>
  );
}
