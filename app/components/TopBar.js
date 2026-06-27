"use client";

export default function TopBar({ searchPlaceholder = "Search markets, assets...", onMenuClick }) {
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
        <div className="flex items-center gap-sm cursor-pointer hover:bg-surface-container-high p-1 rounded-full pr-3 transition-colors">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-xs font-bold text-on-primary-container">
            JS
          </div>
          <span className="font-label-md text-label-md text-on-surface hidden lg:block">Alex Sterling</span>
        </div>
      </div>
    </header>
  );
}
