import Image from "next/image";
import Reveal from "@/components/Reveal";
import { BookButton, QualifyButton } from "@/components/CTAButtons";
import { CheckIcon, PlayIcon, XIcon } from "@/components/Icons";
import VideoTrigger from "@/components/VideoTrigger";
import {
  COMPARE,
  SERVICES,
  SERVICES_SECTION_ID,
  VIDEO_ROW,
} from "@/lib/constants";

export default function Services() {
  return (
    <section id={SERVICES_SECTION_ID} className="section services">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">TMS treatments</p>
          <h2>TMS therapy, targeted to your own brain.</h2>
          <p className="lead">
            TMS (transcranial magnetic stimulation) is a non-invasive,
            drug-free, FDA-cleared treatment. At BrainStim it is guided by your
            own MRI, and every plan is reviewed by a neurosurgeon before it
            starts.
          </p>
        </Reveal>

        <div className="service-rows">
          {SERVICES.map((service, index) => (
            <article
              key={service.id}
              id={service.id}
              className={`service${index % 2 === 1 ? " is-flipped" : ""}`}
            >
              <Reveal className="service-media-wrap">
                <div className="service-media">
                  <Image
                    quality={95}
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 960px) 100vw, 840px"
                    className="service-img"
                    style={{ objectPosition: service.imagePosition }}
                    placeholder="blur"
                  />
                  <span className="service-badge">{service.badge}</span>
                </div>
              </Reveal>

              <Reveal delay={2} className="service-copy">
                <p className="eyebrow">{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <ul className="service-points">
                  {service.points.map((point) => (
                    <li key={point}>
                      <span className="mark mark-yes">
                        <CheckIcon className="icon-xs" />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                <dl className="service-facts">
                  {service.facts.map((fact) => (
                    <div key={fact.label}>
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="service-actions">
                  <BookButton variant="navy" />
                  <QualifyButton variant="outline" />
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal className="glance">
          <div className="glance-head">
            <p className="eyebrow">At a glance</p>
            <h3>Why navigation matters</h3>
            <p>
              Most TMS finds its spot from general landmarks on the outside of
              the head. We start from an MRI of your own brain.
            </p>
          </div>
          <div className="compare">
            <div className="compare-card">
              <h4>{COMPARE.standard.title}</h4>
              <ul>
                {COMPARE.standard.points.map((point) => (
                  <li key={point}>
                    <span className="mark mark-no">
                      <XIcon className="icon-xs" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare-card compare-card-best">
              <h4>{COMPARE.navigated.title}</h4>
              <ul>
                {COMPARE.navigated.points.map((point) => (
                  <li key={point}>
                    <span className="mark mark-yes">
                      <CheckIcon className="icon-xs" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="glance-note">
            We treat with Nexstim and MagVenture TMS systems, operated by
            trained TMS specialists.
          </p>
        </Reveal>

        <div className="videos">
          <Reveal className="videos-head">
            <p className="eyebrow">See it explained</p>
            <h3>Watch how TMS works, and what it changed for one patient.</h3>
          </Reveal>
          <ul className="videos-row">
            {VIDEO_ROW.map((video, index) => (
              <li key={video.id}>
                <Reveal delay={(index + 1) as 1 | 2 | 3}>
                  <VideoTrigger
                    videoId={video.id}
                    title={video.title}
                    className="video-card"
                  >
                    <span className="video-thumb">
                      <Image
                        quality={95}
                        src={video.thumb}
                        alt=""
                        fill
                        sizes="(max-width: 760px) 100vw, 600px"
                        placeholder="blur"
                      />
                      <span className="play-disc play-disc-lg">
                        <PlayIcon className="icon-md" />
                      </span>
                    </span>
                    <span className="video-cap">
                      <strong>{video.title}</strong>
                      <small>{video.meta}</small>
                    </span>
                  </VideoTrigger>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="fineprint">
            Each patient story is one person&rsquo;s own experience. Results
            vary.
          </p>
        </div>
      </div>
    </section>
  );
}
