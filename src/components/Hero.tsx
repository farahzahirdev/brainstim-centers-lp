import Image from "next/image";
import { BookButton, CallButton, QualifyButton } from "@/components/CTAButtons";
import {
  ChartIcon,
  ClockIcon,
  PinIcon,
  ShieldIcon,
  TargetIcon,
  WaveIcon,
} from "@/components/Icons";
import { HERO_CHIPS, IMAGES, TRUST_ITEMS } from "@/lib/constants";

const ICONS = {
  shield: ShieldIcon,
  target: TargetIcon,
  clock: ClockIcon,
  chart: ChartIcon,
  wave: WaveIcon,
  pin: PinIcon,
} as const;

export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero-media" aria-hidden="true">
        <Image
          quality={95}
          src={IMAGES.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          className="hero-img"
        />
        <span className="hero-overlay" />
      </div>

      <div className="wrap hero-inner">
        <div className="hero-copy">
          <p className="hero-tagline">Neuro-navigated TMS in California</p>

          <h1 id="hero-heading">
            If medication hasn&rsquo;t helped,{" "}
            <em>there&rsquo;s another way.</em>
          </h1>

          <p className="hero-lead">
            Drug-free, FDA-cleared TMS, targeted to your own brain. Every
            treatment is planned on your own MRI and every plan is reviewed by
            neurosurgeon Dr. Mark Liker before it starts.
          </p>

          <ul className="hero-chips" aria-label="Treatment highlights">
            {HERO_CHIPS.map((chip) => {
              const Icon = ICONS[chip.icon];
              return (
                <li key={chip.label}>
                  <Icon className="icon-sm" />
                  {chip.label}
                </li>
              );
            })}
          </ul>

          <div className="hero-ctas">
            <BookButton variant="amber" />
            <CallButton variant="white" />
            <QualifyButton variant="outline-light" />
          </div>
        </div>
      </div>

      <div className="wrap">
        <ul className="trust" aria-label="Why BrainStim">
          {TRUST_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <li key={item.title}>
                <Icon className="icon-md" />
                <div>
                  <p className="trust-title">{item.title}</p>
                  <p className="trust-subtitle">{item.subtitle}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
