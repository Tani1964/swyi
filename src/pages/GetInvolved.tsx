import { Link } from "react-router-dom";

const actions = [
  {
    title: "Partner",
    body: "Sponsor a cohort, offer internships or jobs, or fund our wellbeing campaigns. We co-design with you.",
    cta: "Talk to us",
    link: "/contact",
  },
  {
    title: "Volunteer / Mentor",
    body: "Share expertise in career development, entrepreneurship, mental health, or legal support for our members.",
    cta: "Become a mentor",
    link: "/contact",
  },
  {
    title: "Donate",
    body: "Every contribution powers scholarships, emergency support, and program delivery for women and youth.",
    cta: "Donate now",
    link: "/contact",
  },
];

const GetInvolved = () => {
  return (
    <div className="section-shell space-y-12 pb-16 pt-12">
      <div className="space-y-3">
        <p className="section-kicker">Get involved</p>
        <h1 className="text-4xl text-white">
          Help us widen the circle of opportunity.
        </h1>
        <p className="text-slate-200 max-w-3xl leading-relaxed">
          Whether you are an employer, funder, professional, or advocate, there
          is room for you at SWYI. Together we can move more women and youth
          into spaces where they thrive.
        </p>
      </div>

      <div className="card-grid">
        {actions.map((item) => (
          <div key={item.title} className="glass-panel p-7 space-y-4">
            <h3 className="text-2xl text-white">{item.title}</h3>
            <p className="text-slate-200 leading-relaxed">{item.body}</p>
            <Link
              to={item.link}
              className="text-amber-200 font-semibold inline-flex items-center gap-2"
            >
              {item.cta}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="glass-panel p-8 space-y-3">
        <p className="section-kicker">Where we are</p>
        <h2 className="text-3xl text-white">
          Plot 27, Block 74 Emmanuel Abimbola Cole Street, Lekki, Lagos, Nigeria
          105102
        </h2>
        <p className="text-slate-200 leading-relaxed">
          We work hybrid—online and on-ground—so we can reach communities across
          Africa. Let’s plan a session for your team or community.
        </p>
      </div>
    </div>
  );
};

export default GetInvolved;
