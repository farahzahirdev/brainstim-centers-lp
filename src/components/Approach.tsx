import Image from "next/image";
import Reveal from "@/components/Reveal";
import { APPROACH_SECTION_ID, APPROACH_STEPS } from "@/lib/constants";

export default function Approach() {
  return (
    <section id={APPROACH_SECTION_ID} className="section section-mist">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>More than a machine. A plan built around you.</h2>
          <p className="lead">
            Non-invasive and drug-free, from your first conversation to your
            last session. Here is what happens, step by step.
          </p>
        </Reveal>

        <ol className="bento">
          {APPROACH_STEPS.map((step, index) => (
            <li key={step.step} className={`bento-item bento-${index + 1}`}>
              <Reveal
                delay={((index % 3) + 1) as 1 | 2 | 3}
                className="bento-card"
              >
                <div className="bento-media">
                  <Image
                    quality={95}
                    src={step.image}
                    alt={step.alt}
                    sizes="(max-width: 760px) 100vw, 900px"
                    placeholder="blur"
                  />
                  <span className="bento-tag">{step.tag}</span>
                </div>
                <div className="bento-body">
                  <span className="bento-num">{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
