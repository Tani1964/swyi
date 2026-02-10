const initiatives = [
  {
    title: "Safeguarding & Wellbeing",
    detail:
      "Campaigns that spotlight mental health, anti-drug abuse, and protection for women and youth. Includes webinars, toolkits, and referrals to licensed professionals.",
  },
  {
    title: "Opportunity Broadcasts",
    detail:
      "Weekly curation of scholarships, fellowships, grants, accelerators, and jobs distributed to our community across Africa.",
  },
  {
    title: "Community of Practice",
    detail:
      "An international consortium of professionals volunteering mentorship, pro bono consulting, and placements for our members.",
  },
  {
    title: "Leadership Showcases",
    detail:
      "Events that feature youth-led projects and women innovators, linking them to funders, partners, and media exposure.",
  },
  {
    title: "Corporate Learning Labs",
    detail:
      "Custom training for organizations seeking to empower their workforce with inclusive leadership, wellbeing, and diversity practices.",
  },
  {
    title: "Policy Advocacy",
    detail:
      "Collaborative briefs and roundtables that elevate gender equity, youth employment, and safeguarding policies.",
  },
];

const Initiatives = () => {
  return (
    <div className="section-shell space-y-10 pb-16 pt-12">
      <div className="space-y-3">
        <p className="section-kicker">Initiatives</p>
        <h1 className="text-4xl text-white">Movements we are driving</h1>
        <p className="text-slate-200 max-w-3xl leading-relaxed">
          SWYI programs are supported by ongoing initiatives that keep our
          community informed, safe, and connected. These movements ensure impact
          lives beyond a single event.
        </p>
      </div>

      <div className="card-grid">
        {initiatives.map((item) => (
          <div key={item.title} className="glass-panel p-7 space-y-3">
            <h3 className="text-2xl text-white">{item.title}</h3>
            <p className="text-slate-200 leading-relaxed">{item.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Initiatives;
