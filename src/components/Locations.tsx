import Reveal from "@/components/Reveal";
import { ArrowIcon, PinIcon } from "@/components/Icons";
import { HOURS_LABEL, LOCATIONS, LOCATIONS_SECTION_ID } from "@/lib/constants";

export default function Locations() {
  return (
    <section id={LOCATIONS_SECTION_ID} className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Locations</p>
          <h2>Five clinics, one way of caring.</h2>
          <p className="lead">
            Four clinics across Southern California and one in Fremont. Every
            clinic is open {HOURS_LABEL}. Not sure which is nearest? Tell us
            where you are and we&rsquo;ll suggest the easiest one.
          </p>
        </Reveal>

        <ul className="locations">
          {LOCATIONS.map((place, index) => (
            <li key={place.city}>
              <Reveal delay={((index % 3) + 1) as 1 | 2 | 3}>
                <a
                  href={place.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-card"
                >
                  <span className="location-pin">
                    <PinIcon className="icon-sm" />
                  </span>
                  <span className="location-region">{place.region}</span>
                  <strong>{place.city}</strong>
                  <span className="location-address">
                    {place.lines[0]}
                    <br />
                    {place.lines[1]}
                  </span>
                  <span className="location-link">
                    Get directions <ArrowIcon className="btn-arrow" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
