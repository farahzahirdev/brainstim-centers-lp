import Reveal from "@/components/Reveal";
import { BookButton, CallButton, QualifyLink } from "@/components/CTAButtons";

export default function FinalCta() {
  return (
    <section className="final">
      <div className="final-bg" aria-hidden="true" />
      <div className="wrap">
        <Reveal className="final-inner">
          <p className="eyebrow eyebrow-light">Whenever you&rsquo;re ready</p>
          <h2>Feeling out of options doesn&rsquo;t mean you are.</h2>
          <p className="lead">
            Tell us what&rsquo;s been happening. We&rsquo;ll listen, check your
            coverage, and tell you honestly whether neuro-navigated TMS could
            help. The first conversation is free.
          </p>
          <div className="final-ctas">
            <BookButton variant="amber" className="btn-lg" />
            <CallButton variant="outline-light" className="btn-lg" />
          </div>
          <QualifyLink light />
        </Reveal>
      </div>
    </section>
  );
}
