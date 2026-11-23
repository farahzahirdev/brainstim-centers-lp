const ITEMS = [
  "Drug-free",
  "FDA-cleared TMS",
  "Targeted to your own MRI",
  "Neurosurgeon-reviewed plans",
  "No anesthesia",
  "Depression",
  "Anxiety",
  "OCD",
  "PTSD",
  "Insurance checked first",
  "Free consultation",
  "Progress you can measure",
] as const;

/** Decorative scrolling band. The same content appears as real text elsewhere on the page. */
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div key={group} className="marquee-group">
            {ITEMS.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
