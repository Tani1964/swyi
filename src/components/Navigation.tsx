import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/programs", label: "Programs" },
  { path: "/initiatives", label: "Initiatives" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/team", label: "Team" },
  { path: "/contact", label: "Contact" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur border-b border-white/5 py-4">
      <div className="section-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Strategic Women & Youth Institute logo"
            className="w-14 h-14 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
          />
          <div className="leading-tight">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400 font-semibold">
              Strategic Women
            </p>
            <p className="text-lg font-bold text-white">& Youth Institute</p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-2 text-sm font-semibold text-slate-200">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-full transition hover:text-white hover:bg-white/10 ${
                location.pathname === link.path
                  ? "text-amber-300 bg-white/5"
                  : "text-slate-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/get-involved" className="ml-2 button-primary">
            Donate / Partner
          </Link>
        </nav>

        <button
          onClick={handleToggle}
          className="lg:hidden w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/95">
          <div className="section-shell py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 ${
                  location.pathname === link.path
                    ? "text-amber-300"
                    : "text-slate-100"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-involved"
              onClick={() => setOpen(false)}
              className="button-primary justify-center"
            >
              Donate / Partner
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
