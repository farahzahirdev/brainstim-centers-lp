import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, CallButton } from "@/components/CTAButtons";
import { CheckIcon } from "@/components/Icons";
import { DOCTOR_CREDENTIALS, DOCTOR_SECTION_ID, IMAGES } from "@/lib/constants";

export default function Doctor() {
  return (
    <section id={DOCTOR_SECTION_ID} className="section">
      <div className="wrap doctor">
        <Reveal className="doctor-media">
          <div className="doctor-photo">
            <Image
              quality={95}
              src={IMAGES.doctor}
              alt="Dr. Mark Liker, neurosurgeon and founder of BrainStim Centers."
              sizes="(max-width: 960px) 100vw, 660px"
              placeholder="blur"
            />
          </div>
          <div className="doctor-badge">
            <strong>20+ years</strong>
            operating on the brain
          </div>
        </Reveal>

        <Reveal delay={2} className="doctor-copy">
          <p className="eyebrow">Neurosurgeon-led care</p>
          <blockquote>
            &ldquo;Every patient&rsquo;s brain is different.&rdquo;
          </blockquote>
          <p className="doctor-name">
            Dr. Mark Liker, neurosurgeon and founder
          </p>
          <p className="lead">
            For more than two decades Dr. Liker has operated on the brain. He
            founded BrainStim on a simple idea: understand the person first. He
            reviews what we learn about you, decides with you whether treatment
            is right, and reviews every plan himself.
          </p>
          <ul className="check-list">
            {DOCTOR_CREDENTIALS.map((item) => (
              <li key={item}>
                <span className="mark mark-yes">
                  <CheckIcon className="icon-xs" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="cta-row">
            <BookButton variant="navy" />
            <CallButton variant="outline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
