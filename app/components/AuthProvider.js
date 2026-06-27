"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

const STORAGE_KEY = "oripiofin-auth";

// ─── Context ───────────────────────────────────────────────────────────────
const AuthContext = createContext({
  isLoggedIn: false,
  isLoading:  true,
  user:       null,
  login:      () => {},
  logout:     () => {},
});

// ─── Provider ──────────────────────────────────────────────────────────────
export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [session,   setSession]   = useState(null); // { user, loggedIn, loginTime }

  // Hydrate from localStorage once on mount (client-only)
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.loggedIn) setSession(parsed);
      }
    } catch {
      // Ignore parse errors — treat as logged out
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback((userData = {}) => {
    const newSession = {
      loggedIn:  true,
      loginTime: new Date().toISOString(),
      user: {
        name:  userData.name  || "Alex Sterling",
        email: userData.email || "alex@oripiofin.com",
        initials: (userData.name || "Alex Sterling")
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()
          .slice(0, 2),
      },
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSession));
    setSession(newSession);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setSession(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        isLoggedIn: !!session?.loggedIn,
        user:       session?.user ?? null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────────────────────────
export function useAuth() {
  return useContext(AuthContext);
}
