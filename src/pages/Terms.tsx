const Terms = () => {
  return (
    <div className="section-shell space-y-8 pb-16 pt-12">
      <div className="space-y-3">
        <p className="section-kicker">Terms</p>
        <h1 className="text-4xl text-white">Website terms of use</h1>
        <p className="text-slate-200 max-w-3xl leading-relaxed">
          This summary is for the public SWYI site. For legal terms that govern
          the SWYI Directory, please review the canonical policy at
          directory.swyi.org.
        </p>
      </div>

      <div className="glass-panel p-7 space-y-4">
        <div>
          <h2 className="text-2xl text-white">Use of content</h2>
          <p className="text-slate-200 leading-relaxed">
            Content is provided for personal, non-commercial use. Do not copy,
            republish, or mirror materials without written permission.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-white">No warranties</h2>
          <p className="text-slate-200 leading-relaxed">
            Information is provided “as is”. SWYI does not guarantee
            completeness or accuracy and may update materials without notice.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-white">Links</h2>
          <p className="text-slate-200 leading-relaxed">
            External links (including the SWYI Directory) are provided for
            convenience. SWYI is not responsible for third-party content.
          </p>
        </div>
        <div>
          <h2 className="text-2xl text-white">Governing law</h2>
          <p className="text-slate-200 leading-relaxed">
            Use of this site is governed by the laws of Nigeria. By using the
            site you accept these terms.
          </p>
        </div>
        <p className="text-sm text-slate-400">
          For full legal language, reference the official terms:
          directory.swyi.org/term-of-services/.
        </p>
      </div>
    </div>
  );
};

export default Terms;
