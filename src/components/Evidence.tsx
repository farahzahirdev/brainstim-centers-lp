import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, QualifyLink } from "@/components/CTAButtons";
import { EVIDENCE_SECTION_ID, IMAGES } from "@/lib/constants";

export default function Evidence() {
  return (
    <section id={EVIDENCE_SECTION_ID} className="section evidence">
      <div className="wrap evidence-grid">
        <Reveal className="evidence-copy">
          <p className="eyebrow eyebrow-light">The evidence</p>
          <h2>
            <em>84%</em> of our patients see their symptoms reduced by 50%.
          </h2>
          <p className="lead">
            Across age and gender, 84% of BrainStim patients have a 50%
            reduction in symptoms. We measure progress with standard
            questionnaires, asked again during treatment and at the end, so the
            change is recorded against where you began.
          </p>
          <div className="evidence-ctas">
            <BookButton variant="amber" />
            <QualifyLink light />
          </div>
          <p className="fineprint fineprint-light">
            Source: BrainStim Centers patient outcomes. Individual
            results vary and no result can be guaranteed.
          </p>
        </Reveal>

        <Reveal delay={2} className="evidence-media">
          <div className="evidence-photo">
            <Image
              quality={95}
              src={IMAGES.evidence}
              alt="Three clinicians around a table, discussing brain scans on a screen."
              fill
              sizes="(max-width: 960px) 100vw, 840px"
              placeholder="blur"
            />
          </div>
          <div className="evidence-stat">
            <strong>84%</strong>
            <span>of our patients, across age and gender</span>
          </div>
          <div className="evidence-stat evidence-stat-b">
            <strong>50%</strong>
            <span>reduction in symptoms</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
