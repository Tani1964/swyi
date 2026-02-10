import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-8">
      <div className="section-shell py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Strategic Women & Youth Institute logo"
              className="w-12 h-12 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.28)]"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Strategic Women
              </p>
              <p className="text-lg font-bold text-white">& Youth Institute</p>
            </div>
          </div>
          <p className="text-slate-300 max-w-2xl leading-relaxed">
            An international consortium of professionals generating
            opportunities for women and young people through economic
            empowerment, advocacy, and transformational learning.
          </p>
          <p className="text-slate-400 text-sm">
            Plot 27, Block 74 Emmanuel Abimbola Cole Street, Lekki, Lagos,
            Nigeria 105102
          </p>
          <div className="flex gap-3 text-sm text-slate-300">
            <a
              className="hover:text-amber-300"
              href="https://ng.linkedin.com/company/swyi"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="hover:text-amber-300"
              href="https://www.instagram.com/swyinstitute_/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="hover:text-amber-300"
              href="https://swyi.org/"
              target="_blank"
              rel="noreferrer"
            >
              swyi.org
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>
              <Link to="/about" className="hover:text-amber-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-amber-300">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/initiatives" className="hover:text-amber-300">
                Initiatives
              </Link>
            </li>
            <li>
              <Link to="/get-involved" className="hover:text-amber-300">
                Get Involved
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Legal</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>
              <Link to="/terms" className="hover:text-amber-300">
                Terms of Use
              </Link>
            </li>
            <li>
              <a
                href="https://directory.swyi.org/privacy-policy/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-300"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="https://directory.swyi.org/contact-us/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-300"
              >
                Directory
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Strategic Women & Youth Institute. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
