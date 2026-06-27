"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastContext = createContext({ showToast: () => {}, showComingSoon: () => {} });

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const counter = useRef(0);

  const showToast = useCallback(({ title, message, type = "info", duration = 3500 }) => {
    const id = ++counter.current;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const showComingSoon = useCallback((featureName = "This feature") => {
    showToast({
      title: "Coming Soon 🚀",
      message: `${featureName} is under active development and will be available in the next release.`,
      type: "soon",
    });
  }, [showToast]);

  const dismiss = (id) => setToasts((prev) => prev.filter((t) => t.id !== id));

  const iconMap = {
    info:  { icon: "info",           bg: "bg-secondary-container",   text: "text-on-secondary-container" },
    soon:  { icon: "rocket_launch",  bg: "bg-primary-container",     text: "text-on-primary-container"   },
    error: { icon: "error",          bg: "bg-error-container",       text: "text-on-error-container"     },
  };

  return (
    <ToastContext.Provider value={{ showToast, showComingSoon }}>
      {children}

      {/* Toast stack */}
      <div className="fixed bottom-xl right-xl z-[9999] flex flex-col gap-sm pointer-events-none">
        {toasts.map((toast) => {
          const { icon, bg, text } = iconMap[toast.type] || iconMap.info;
          return (
            <div
              key={toast.id}
              className="pointer-events-auto flex items-start gap-md p-md rounded-xl shadow-2xl border border-outline-variant backdrop-blur-sm max-w-xs animate-in slide-in-from-bottom-4"
              style={{
                background: "var(--toast-bg, rgba(18,33,49,0.95))",
                animation: "toastIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both",
              }}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${bg}`}>
                <span className={`material-symbols-outlined text-sm ${text}`}>{icon}</span>
              </div>
              <div className="flex-grow min-w-0">
                <p className="font-label-md text-label-md text-on-surface font-bold">{toast.title}</p>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs leading-snug">{toast.message}</p>
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                className="text-on-surface-variant hover:text-on-surface transition-colors flex-shrink-0 mt-xs"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
