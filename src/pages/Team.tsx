const leaders = [
  {
    name: "Mrs. Ngozi Oyewole",
    role: "Founder & President",
    focus:
      "Strategic direction, partnerships, and advocacy for women and youth empowerment.",
  },
  {
    name: "Board Member (Placeholder)",
    role: "Chair, Governance",
    focus:
      "Oversight, accountability, and impact measurement. Replace with confirmed board profile.",
  },
  {
    name: "Board Member (Placeholder)",
    role: "Finance & Sustainability",
    focus:
      "Stewardship of resources, fundraising strategy, and donor relations.",
  },
  {
    name: "Board Member (Placeholder)",
    role: "Programs & Learning",
    focus: "Program quality, curriculum oversight, and mentor network growth.",
  },
];

const advisors = [
  "Youth Development Advisor (Placeholder)",
  "Mental Health Advisor (Placeholder)",
  "Legal & Policy Advisor (Placeholder)",
  "Community Mobilization Lead (Placeholder)",
];

const Team = () => {
  return (
    <div className="section-shell space-y-12 pb-16 pt-12">
      <div className="space-y-3">
        <p className="section-kicker">Leadership</p>
        <h1 className="text-4xl text-white">Board and team</h1>
        <p className="text-slate-200 max-w-3xl leading-relaxed">
          SWYI is guided by professionals and partners committed to equity,
          wellbeing, and excellence. Board and advisory seats are being
          formalized—placeholders are noted below.
        </p>
      </div>

      <div className="card-grid">
        {leaders.map((person) => (
          <div key={person.name} className="glass-panel p-7 space-y-3">
            <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10" />
            <div>
              <h3 className="text-2xl text-white">{person.name}</h3>
              <p className="text-amber-200 font-semibold">{person.role}</p>
            </div>
            <p className="text-slate-200 leading-relaxed">{person.focus}</p>
          </div>
        ))}
      </div>

      <div className="glass-panel p-7 space-y-3">
        <p className="section-kicker">Advisory (Placeholders)</p>
        <ul className="flex flex-wrap gap-2 text-slate-200">
          {advisors.map((item) => (
            <li
              key={item}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="text-slate-200 text-sm">
          Replace placeholders with confirmed profiles, photos, and bios once
          finalized.
        </p>
      </div>
    </div>
  );
};

export default Team;
