"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "./AuthProvider";

export default function TopBar({ searchPlaceholder = "Search markets, assets...", onMenuClick }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleLogout() {
    setDropdownOpen(false);
    logout();
    router.replace("/");
  }

  const initials = user?.initials ?? "JS";
  const name     = user?.name    ?? "Alex Sterling";
  const email    = user?.email   ?? "alex@ninestovest.com";

  return (
    <header className="flex items-center justify-between px-xl w-full sticky top-0 z-50 bg-surface/80 backdrop-blur-md h-16 border-b border-outline-variant">
      {/* Left: Hamburger (mobile) + Search */}
      <div className="flex items-center gap-md w-full max-w-md">
        {/* Hamburger — visible only on mobile */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors flex-shrink-0"
          aria-label="Open navigation menu"
          id="mobile-menu-btn"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        {/* Search input */}
        <div className="relative w-full hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant rounded-full py-2 pl-10 pr-4 text-body-md focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            placeholder={searchPlaceholder}
            type="text"
          />
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-md">
        <button
          className="hover:bg-surface-container-highest rounded-full p-2 text-on-surface-variant transition-colors relative"
          aria-label="Notifications"
        >
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
        </button>
        <button
          className="hover:bg-surface-container-highest rounded-full p-2 text-on-surface-variant transition-colors"
          aria-label="Help"
        >
          <span className="material-symbols-outlined">help</span>
        </button>
        <div className="h-8 w-px bg-outline-variant mx-2" />

        {/* User avatar + dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            className="flex items-center gap-sm cursor-pointer hover:bg-surface-container-high p-1 rounded-full pr-3 transition-colors"
            aria-label="User menu"
            aria-expanded={dropdownOpen}
          >
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container">
              {initials}
            </div>
            <span className="font-label-md text-label-md text-on-surface hidden lg:block">{name}</span>
            <span className="material-symbols-outlined text-on-surface-variant text-sm hidden lg:block">
              {dropdownOpen ? "expand_less" : "expand_more"}
            </span>
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 bg-surface-container-high border border-outline-variant rounded-xl shadow-2xl z-50 overflow-hidden animate-in slide-in-from-top-2"
              style={{ animation: "dropIn 0.15s ease-out both" }}
            >
              {/* User info */}
              <div className="px-md py-md border-b border-outline-variant">
                <p className="font-label-md text-label-md text-on-surface font-bold">{name}</p>
                <p className="font-body-md text-body-md text-on-surface-variant text-[11px] truncate">{email}</p>
              </div>

              {/* Menu items */}
              <div className="py-xs">
                <button className="w-full flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined text-sm">person</span>
                  Profile
                </button>
                <button className="w-full flex items-center gap-md px-md py-sm text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface transition-colors font-label-md text-label-md">
                  <span className="material-symbols-outlined text-sm">settings</span>
                  Settings
                </button>
                <div className="h-px bg-outline-variant mx-md my-xs" />
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-md px-md py-sm text-error hover:bg-error/10 transition-colors font-label-md text-label-md"
                >
                  <span className="material-symbols-outlined text-sm">logout</span>
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)     scale(1);    }
        }
      `}</style>
    </header>
  );
}
