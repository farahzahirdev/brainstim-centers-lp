import Image from "next/image";
import Reveal from "@/components/Reveal";
import { QualifyButton } from "@/components/CTAButtons";
import { ShieldIcon } from "@/components/Icons";
import {
  INSURANCE_SECTION_ID,
  INSURANCE_STEPS,
  INSURERS,
} from "@/lib/constants";

export default function Insurance() {
  return (
    <section id={INSURANCE_SECTION_ID} className="section">
      <div className="wrap insurance">
        <Reveal className="insurance-copy">
          <p className="eyebrow">Insurance</p>
          <h2>We check your coverage before anything is booked.</h2>
          <p className="lead">
            Daily TMS treatment is covered by most major commercial insurance,
            as long as you meet your insurer&rsquo;s criteria. Accelerated TMS
            is not currently accepted by insurance and is paid out of pocket.
            Either way, we&rsquo;ll tell you plainly what to expect first.
          </p>

          <ol className="steps">
            {INSURANCE_STEPS.map((step, index) => (
              <li key={step.title}>
                <span className="steps-num">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={2} className="plans">
          <div className="plans-head">
            <span className="plans-icon">
              <ShieldIcon className="icon-md" />
            </span>
            <div>
              <h3>Plans we work with</h3>
              <p>Every plan is different, so we check yours specifically.</p>
            </div>
          </div>
          <ul className="plans-list">
            {INSURERS.map((insurer) => (
              <li key={insurer.name}>
                {insurer.logo ? (
                  <Image
                    src={insurer.logo}
                    alt={insurer.name}
                    quality={95}
                    sizes="280px"
                  />
                ) : (
                  <span>{insurer.name}</span>
                )}
              </li>
            ))}
          </ul>
          <p className="plans-note">
            Don&rsquo;t see yours? Send us your details anyway. A benefits check
            isn&rsquo;t a guarantee of payment. Your insurer makes the final
            decision.
          </p>
          <QualifyButton variant="navy" className="btn-block" />
        </Reveal>
      </div>
    </section>
  );
}
