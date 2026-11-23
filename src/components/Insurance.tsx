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
            Most commercial plans have a policy that covers TMS for major
            depression, usually after other treatments haven&rsquo;t helped. If
            your plan doesn&rsquo;t cover it, we&rsquo;ll tell you plainly and
            explain the self-pay options first.
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
                  <Image src={insurer.logo} alt={insurer.name} sizes="160px" />
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
