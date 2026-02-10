const programs = [
  {
    name: "Youth Ambassador Forum",
    desc: "A flagship platform where young leaders design and launch civic projects with mentorship, peer support, and showcase opportunities.",
    outcomes: [
      "Confidence & public speaking",
      "Policy literacy & advocacy",
      "Project design & delivery",
    ],
  },
  {
    name: "Economic Empowerment Labs",
    desc: "Short, hands-on labs that connect participants to employability coaching, entrepreneurship playbooks, and capital partners.",
    outcomes: [
      "Resume & interview readiness",
      "Business model sprints",
      "Capital and job referrals",
    ],
  },
  {
    name: "Skills & Career Accelerator",
    desc: "Upskilling pathways in digital, creative, and technical fields with mentors from industry and project-based portfolios.",
    outcomes: [
      "In-demand digital skills",
      "Portfolio-worthy projects",
      "Mentor-led career mapping",
    ],
  },
  {
    name: "Wellbeing & Safety Series",
    desc: "Mental health, anti-drug abuse, and safeguarding campaigns delivered alongside trusted clinicians and advocates.",
    outcomes: [
      "Psychological safety practices",
      "Access to support resources",
      "Community accountability",
    ],
  },
  {
    name: "Social Impact Fellowship",
    desc: "A cohort-based program that pairs fellows with communities to prototype solutions in education, health, and livelihoods.",
    outcomes: [
      "Human-centered design",
      "Impact measurement basics",
      "Implementation coaching",
    ],
  },
  {
    name: "Opportunity Directory",
    desc: "A curated stream of scholarships, grants, fellowships, and jobs shared with our community across Africa.",
    outcomes: [
      "Timely access to opportunities",
      "Guidance on applications",
      "Network effects for referrals",
    ],
  },
];

const Programs = () => {
  return (
    <div className="section-shell space-y-12 pb-16 pt-12">
      <div className="space-y-3">
        <p className="section-kicker">Programs</p>
        <h1 className="text-4xl text-white">
          Designed for momentum, built for scale.
        </h1>
        <p className="text-slate-200 max-w-3xl leading-relaxed">
          Our programs combine learning, mentorship, and direct access to
          opportunities. Whether you are launching a career, building a venture,
          or advocating for change, SWYI provides the structure and community to
          help you thrive.
        </p>
      </div>

      <div className="card-grid">
        {programs.map((program) => (
          <div key={program.name} className="glass-panel p-7 space-y-4">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl text-white">{program.name}</h3>
            </div>
            <p className="text-slate-200 leading-relaxed">{program.desc}</p>
            <div className="flex flex-wrap gap-2">
              {program.outcomes.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-white/5 text-sm text-amber-200 border border-white/10"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
