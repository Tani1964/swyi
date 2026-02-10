import { type FormEvent, useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
    setStatus("Thanks! Your note has been recorded. We will reach out soon.");
    setTimeout(() => setStatus(""), 3500);
  };

  return (
    <div className="section-shell space-y-10 pb-16 pt-12">
      <div className="space-y-3">
        <p className="section-kicker">Contact</p>
        <h1 className="text-4xl text-white">Let’s build together.</h1>
        <p className="text-slate-200 max-w-3xl leading-relaxed">
          Share how you’d like to collaborate or what support you need. We will
          respond with the best pathway—whether that is a program slot, a
          partnership conversation, or a referral.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="glass-panel p-8 space-y-4 lg:col-span-2">
          <h2 className="text-2xl text-white">Send a message</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm text-slate-200 mb-2">
                  Name
                </label>
                <input
                  name="name"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white"
                  required
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-200 mb-2">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white"
                  required
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-200 mb-2">
                What would you like to discuss?
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white"
                placeholder="Partnerships, volunteering, program interest..."
                required
              />
            </div>
            <button type="submit" className="button-primary">
              Submit
            </button>
            {status && <p className="text-emerald-200 text-sm">{status}</p>}
          </form>
        </div>

        <div className="space-y-4">
          <div className="glass-panel p-6 space-y-2">
            <p className="text-sm text-slate-300">Address</p>
            <p className="text-white font-semibold">
              Plot 27, Block 74 Emmanuel Abimbola Cole Street, Lekki, Lagos,
              Nigeria 105102
            </p>
          </div>
          <div className="glass-panel p-6 space-y-2">
            <p className="text-sm text-slate-300">Social</p>
            <a
              href="https://ng.linkedin.com/company/swyi"
              className="block text-amber-200"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/swyinstitute_/?hl=en"
              className="block text-amber-200"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://swyi.org/"
              className="block text-amber-200"
              target="_blank"
              rel="noreferrer"
            >
              swyi.org
            </a>
          </div>
          <div className="glass-panel p-6 space-y-2">
            <p className="text-sm text-slate-300">Directory & resources</p>
            <a
              href="https://directory.swyi.org/"
              className="block text-amber-200"
              target="_blank"
              rel="noreferrer"
            >
              SWYI Directory
            </a>
            <a
              href="https://directory.swyi.org/term-of-services/"
              className="block text-amber-200"
              target="_blank"
              rel="noreferrer"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
