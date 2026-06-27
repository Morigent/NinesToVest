"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

/**
 * AppShell — shared client wrapper for all authenticated pages.
 * Manages the mobile sidebar open/close state so Sidebar and TopBar
 * can communicate without prop-drilling through Server Components.
 *
 * Usage:
 *   <AppShell searchPlaceholder="Search...">
 *     {children}
 *   </AppShell>
 */
export default function AppShell({ children, searchPlaceholder }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="flex-grow flex flex-col md:ml-64 w-full h-screen overflow-y-auto bg-background">
        <TopBar
          searchPlaceholder={searchPlaceholder}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {children}
      </div>
    </div>
  );
}
