const values = [
  {
    title: "Access",
    body: "We democratize information about scholarships, grants, and roles so women and youth are never left out.",
  },
  {
    title: "Dignity",
    body: "Our work centres wellbeing, safety, and mental health, ensuring every participant feels seen and protected.",
  },
  {
    title: "Excellence",
    body: "We set a high bar for delivery, quality, and accountability to the communities we serve.",
  },
  {
    title: "Collaboration",
    body: "We convene professionals, partners, and mentors to co-create solutions that scale.",
  },
  {
    title: "Impact",
    body: "We measure progress—skills gained, jobs landed, businesses launched—not just attendance.",
  },
];

const milestones = [
  "Launched SWYI directory to surface opportunities across Africa.",
  "Activated Youth Ambassador Forum to amplify young civic leaders.",
  "Scaled wellbeing campaigns on mental health, drug abuse, and safeguarding.",
  "Formed partnerships with employers and grant-makers for direct placements.",
];

const About = () => {
  return (
    <div className="space-y-16 pb-16">
      <section className="section-shell pt-12 space-y-6">
        <p className="section-kicker">About SWYI</p>
        <h1 className="text-4xl md:text-5xl text-white max-w-3xl">
          We exist to unlock prosperity, safety, and agency for women and young
          people.
        </h1>
        <p className="text-lg text-slate-200 max-w-3xl leading-relaxed">
          Strategic Women & Youth Institute (SWYI) is an international
          consortium of professionals founded by Mrs. Ngozi Oyewole. From our
          base in Lekki, Lagos, we mobilize knowledge, networks, and resources
          so women and youth across Africa can access opportunities that change
          their lives.
        </p>
      </section>

      <section className="section-shell grid gap-10 md:grid-cols-2">
        <div className="glass-panel p-8 space-y-4">
          <p className="section-kicker">Our Mission</p>
          <h2 className="text-3xl text-white">Economic empowerment at scale</h2>
          <p className="text-slate-200 leading-relaxed">
            We generate pathways to quality education, dignified work,
            entrepreneurship, and wellbeing. Through advocacy, training, and
            curated opportunities, we enable women and youth to lead, earn, and
            transform their communities.
          </p>
        </div>
        <div className="glass-panel p-8 space-y-4">
          <p className="section-kicker">Our Vision</p>
          <h2 className="text-3xl text-white">
            A continent where potential meets possibility
          </h2>
          <p className="text-slate-200 leading-relaxed">
            We envision African women and youth connected to global
            opportunities, backed by strong communities, and equipped with the
            skills and wellbeing to thrive.
          </p>
        </div>
      </section>

      <section className="section-shell space-y-6">
        <p className="section-kicker">Values</p>
        <h2 className="text-3xl text-white">How we choose to work</h2>
        <div className="card-grid">
          {values.map((value) => (
            <div key={value.title} className="glass-panel p-6">
              <h3 className="text-2xl text-white mb-2">{value.title}</h3>
              <p className="text-slate-200 leading-relaxed">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 md:grid-cols-2 items-start">
        <div className="glass-panel p-8 space-y-3">
          <p className="section-kicker">Our approach</p>
          <h2 className="text-3xl text-white">
            Community + coaching + capital
          </h2>
          <p className="text-slate-200 leading-relaxed">
            SWYI blends immersive learning, curated opportunities, and
            intentional wellbeing support. We work with employers, funders, and
            policy allies to connect our community to jobs, grants, and safer
            environments.
          </p>
          <ul className="list-disc list-inside text-slate-200 space-y-2">
            <li>
              Curate actionable opportunities: scholarships, grants,
              fellowships, jobs.
            </li>
            <li>
              Deliver programs that build leadership, digital skills, and
              resilience.
            </li>
            <li>Advocate for safeguarding, inclusion, and mental wellbeing.</li>
          </ul>
        </div>
        <div className="glass-panel p-8 space-y-3">
          <p className="section-kicker">Recent milestones</p>
          <h2 className="text-3xl text-white">Momentum we are proud of</h2>
          <ul className="space-y-3 text-slate-200 leading-relaxed">
            {milestones.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="text-amber-300">●</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About;
