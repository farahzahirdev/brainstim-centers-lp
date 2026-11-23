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
            When medication hadn&rsquo;t worked, <em>58 in 100</em> responded to
            TMS.
          </h2>
          <p className="lead">
            In a study of 307 people with depression treated at 42 US clinics,
            all of whom had already tried antidepressants, more than half
            responded to TMS. 37 in 100 were close to symptom-free by the end of
            treatment.
          </p>
          <div className="evidence-ctas">
            <BookButton variant="amber" />
            <QualifyLink light />
          </div>
          <p className="fineprint fineprint-light">
            Source: Carpenter et al., 2012, Depression and Anxiety.
            Clinician-rated outcomes in routine clinical practice. Individual
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
            <strong>58 in 100</strong>
            <span>responded to TMS after medication hadn&rsquo;t helped</span>
          </div>
          <div className="evidence-stat evidence-stat-b">
            <strong>37 in 100</strong>
            <span>were close to symptom-free</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
