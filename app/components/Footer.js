export default function Footer() {
  return (
    <footer className="w-full mt-auto flex flex-col md:flex-row justify-between items-center px-xl gap-lg py-lg bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col items-center md:items-start gap-xs">
        <span className="font-label-md text-label-md font-bold text-on-surface">NinesToVest</span>
        <p className="font-body-md text-on-surface-variant text-[11px] opacity-80">
          © 2024 NinesToVest. Institutional Precision.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-lg">
        {["Product", "Legal", "Support", "Terms of Service", "Privacy Policy"].map((item) => (
          <a
            key={item}
            href="#"
            className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <div className="flex gap-md">
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
          language
        </span>
      </div>
    </footer>
  );
}
