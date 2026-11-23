"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { BookButton, QualifyLink } from "@/components/CTAButtons";
import { CONDITIONS, CONDITIONS_SECTION_ID } from "@/lib/constants";

export default function Conditions() {
  const [active, setActive] = useState(0);
  // Tabs advance on their own while the section is on screen.
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const condition = CONDITIONS[active];

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setAuto(false);
      return;
    }
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // A click or key press holds the tabs still, then they resume after 5 quiet seconds.
  const resumeTimer = useRef<number | undefined>(undefined);
  const holdThenResume = () => {
    setAuto(false);
    window.clearTimeout(resumeTimer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    resumeTimer.current = window.setTimeout(() => setAuto(true), 5000);
  };

  useEffect(() => () => window.clearTimeout(resumeTimer.current), []);

  const advance = () => setActive((index) => (index + 1) % CONDITIONS.length);

  const onKeyDown = (event: React.KeyboardEvent) => {
    const delta =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? 1
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? -1
          : 0;
    if (!delta) return;
    event.preventDefault();
    holdThenResume();
    const next = (active + delta + CONDITIONS.length) % CONDITIONS.length;
    setActive(next);
    document.getElementById(`tab-${CONDITIONS[next].id}`)?.focus();
  };

  return (
    <section id={CONDITIONS_SECTION_ID} className="section section-mist">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">What we treat</p>
          <h2>Does any of this sound like you?</h2>
          <p className="lead">
            You don&rsquo;t need a diagnosis to talk to us. Start with what
            you&rsquo;re living with.
          </p>
        </Reveal>

        <Reveal>
          <div ref={rootRef} className={`cond${paused ? " is-paused" : ""}`}>
            <div
              className="cond-tabs"
              role="tablist"
              aria-label="Conditions"
              onKeyDown={onKeyDown}
            >
              {CONDITIONS.map((item, index) => (
                <button
                  key={item.id}
                  id={`tab-${item.id}`}
                  type="button"
                  role="tab"
                  aria-selected={index === active}
                  aria-controls="cond-panel"
                  tabIndex={index === active ? 0 : -1}
                  className={`cond-tab${index === active ? " is-active" : ""}`}
                  onClick={() => {
                    holdThenResume();
                    setActive(index);
                  }}
                >
                  <span className="cond-tab-name">{item.name}</span>
                  <span className="cond-tab-status">{item.status}</span>
                  {auto && inView && index === active ? (
                    <span
                      className="cond-tab-timer"
                      aria-hidden="true"
                      onAnimationEnd={advance}
                    />
                  ) : null}
                </button>
              ))}
            </div>

            <div
              id="cond-panel"
              role="tabpanel"
              aria-labelledby={`tab-${condition.id}`}
              className="cond-panel"
              key={condition.id}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
            >
              <span
                className={`pill${condition.cleared ? " pill-cleared" : " pill-offlabel"}`}
              >
                {condition.status}
              </span>
              <blockquote className="cond-quote">
                &ldquo;{condition.quote}&rdquo;
              </blockquote>
              <p className="cond-body">{condition.body}</p>

              <ul className="cond-stats">
                {condition.stats.map((stat) => (
                  <li key={stat.value + stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                    <cite>{stat.source}</cite>
                  </li>
                ))}
              </ul>

              <div className="cond-actions">
                <BookButton variant="navy" />
                <QualifyLink />
              </div>
            </div>
          </div>
        </Reveal>

        <p className="fineprint center">
          Individual results vary and no outcome can be guaranteed. We also see
          people for brain injury, memory decline, insomnia and more. Ask us at
          your consultation.
        </p>
      </div>
    </section>
  );
}
