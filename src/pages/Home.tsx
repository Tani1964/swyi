import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  "/hero_section/one.png",
  "/hero_section/two.png",
  "/hero_section/three.png",
];

const impactStats = [
  {
    label: "Lives reached",
    value: "25k+",
    detail:
      "youth and women engaged through trainings, webinars, and campaigns.",
  },
  {
    label: "Communities",
    value: "30+",
    detail: "states and cities touched by SWYI-led outreach and partnerships.",
  },
  {
    label: "Opportunities shared",
    value: "2,000+",
    detail: "scholarships, grants, and fellowships circulated via our network.",
  },
];

const focusAreas = [
  {
    title: "Economic Empowerment",
    copy: "Upskilling women and young people with business labs, employability coaching, and access to capital partners.",
    color: "from-amber-400/40 to-orange-500/30",
  },
  {
    title: "Youth Development",
    copy: "Mentorship, leadership incubators, and STEM/creative pathways that help young Africans thrive globally.",
    color: "from-teal-300/30 to-emerald-400/25",
  },
  {
    title: "Wellbeing & Advocacy",
    copy: "Campaigns on mental health, anti-drug abuse, and policies that safeguard women and young people.",
    color: "from-blue-400/25 to-cyan-300/25",
  },
];

const programs = [
  {
    name: "Youth Ambassador Forum",
    summary:
      "Peer-led civic and social impact labs that strengthen confidence, advocacy, and project delivery.",
    link: "/programs",
  },
  {
    name: "Economic Empowerment Labs",
    summary:
      "Bootcamps on entrepreneurship, employability, and digital skills to unlock income opportunities.",
    link: "/programs",
  },
  {
    name: "Wellbeing & Safety Campaigns",
    summary:
      "Mental health, anti-drug abuse, and safeguarding drives delivered with trusted experts and allies.",
    link: "/initiatives",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length),
      6500,
    );
    return () => clearInterval(id);
  }, []);

  // Simple log to trace which hero slide is active (remove if not needed)
  useEffect(() => {
    console.log(`Hero slide index: ${currentSlide}`);
  }, [currentSlide]);

  return (
    <div className="space-y-20 -mt-4 pb-20">
      {/* Hero with background slider */}
      <section className="relative overflow-hidden min-h-[78vh] flex items-center py-12 md:py-16 lg:py-20">
        {heroSlides.map((image, idx) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(120deg, rgba(12,23,77,0.78), rgba(12,23,77,0.35)), " +
                `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="section-shell relative py-12 md:py-20 lg:py-24">
          <div className="max-w-4xl space-y-6">
            <p className="section-kicker text-amber-200">
              Strategic Women & Youth Institute
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
              Building economic power for women and young people across Africa.
            </h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-3xl drop-shadow-[0_3px_16px_rgba(0,0,0,0.4)]">
              Founded by Mrs. Ngozi Oyewole, SWYI is an international consortium
              of professionals generating opportunities, resources, and
              community for women and youth. We blend advocacy, training, and
              partnerships to unlock potential at scale.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/get-involved" className="button-primary">
                Partner / Donate
              </Link>
              <Link to="/programs" className="button-ghost">
                Explore programs
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {impactStats.map((item) => (
              <div key={item.label} className="glass-panel p-4">
                <p className="text-3xl font-bold text-amber-300">
                  {item.value}
                </p>
                <p className="text-sm text-slate-200 font-semibold">
                  {item.label}
                </p>
                <p className="text-xs text-slate-100 leading-relaxed mt-2">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-6">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? "w-8 bg-amber-300" : "w-3 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Focus */}
      <section className="section-shell space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker">What we focus on</p>
            <h2 className="text-3xl md:text-4xl text-white">
              Three levers for lasting impact
            </h2>
          </div>
          <Link to="/initiatives" className="button-ghost">
            See initiatives
          </Link>
        </div>
        <div className="card-grid">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded-2xl border border-white/10 bg-gradient-to-br ${item.color}`}
            >
              <h3 className="text-2xl text-white mb-2">{item.title}</h3>
              <p className="text-slate-100 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="section-shell space-y-6 mb-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker">Programs</p>
            <h2 className="text-3xl md:text-4xl text-white">
              Action that moves people forward
            </h2>
          </div>
          <Link to="/programs" className="button-primary">
            View all
          </Link>
        </div>
        <div className="card-grid">
          {programs.map((program) => (
            <div
              key={program.name}
              className="glass-panel p-6 flex flex-col gap-3"
            >
              <h3 className="text-2xl text-white">{program.name}</h3>
              <p className="text-slate-200 leading-relaxed">
                {program.summary}
              </p>
              <Link
                to={program.link}
                className="text-amber-200 font-semibold inline-flex items-center gap-2"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-shell py-4 mt-8">
        <div className="glass-panel p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <p className="section-kicker">Join the movement</p>
            <h3 className="text-3xl text-white">
              Your partnership fuels access, dignity, and opportunity.
            </h3>
            <p className="text-slate-200 max-w-2xl">
              Sponsor a cohort, host a learning lab, or provide grants and jobs
              to our community. Let’s design empowerment pathways together.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/get-involved" className="button-primary">
              Partner with SWYI
            </Link>
            <Link to="/contact" className="button-ghost">
              Talk to the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
