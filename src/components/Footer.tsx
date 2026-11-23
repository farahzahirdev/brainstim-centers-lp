import Image from "next/image";
import {
  HOURS_LABEL,
  LOCATIONS,
  LOGO_LIGHT_URL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p className="crisis">
          <strong>In crisis or thinking about suicide?</strong> Call or text{" "}
          <a href="tel:988">988</a>, any time, day or night.
        </p>

        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src={LOGO_LIGHT_URL}
              alt={SITE_NAME}
              width={304}
              height={70}
            />
            <p>
              Neurosurgeon-led, neuro-navigated TMS in Southern California and
              the Bay Area.
            </p>
          </div>

          <div>
            <h3>Contact</h3>
            <p>
              <a href={PHONE_HREF}>{PHONE_NUMBER}</a>
              <br />
              {HOURS_LABEL}
            </p>
          </div>

          <div>
            <h3>Clinics</h3>
            <p>{LOCATIONS.map((place) => place.city).join(" · ")}</p>
          </div>
        </div>

        <p className="footer-legal">
          TMS is FDA-cleared for major depressive disorder, anxious depression
          and obsessive-compulsive disorder in adults. Other uses described on
          this page, including PTSD, are off-label. This page is for general
          information and is not medical advice. Individual results vary.
          Treatment is provided only after a clinical evaluation.
        </p>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </span>
          <span className="footer-links">
            <a
              href={`${SITE_URL}/privacy.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
            <a
              href={`${SITE_URL}/terms.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
            <a
              href={`${SITE_URL}/disclaimer.html`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Disclaimer
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
