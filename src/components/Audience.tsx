import Image from "next/image";
import Reveal from "@/components/Reveal";
import { AUDIENCES } from "@/lib/constants";

export default function Audience() {
  return (
    <section className="section section-cream">
      <div className="wrap">
        <Reveal className="section-head">
          <p className="eyebrow">Who we help</p>
          <h2>Wherever you&rsquo;re starting from.</h2>
          <p className="lead">
            Most people come to us after trying other things first. If you feel
            out of options, you&rsquo;re exactly who we built this for.
          </p>
        </Reveal>

        <div className="audience">
          {AUDIENCES.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index + 1) as 1 | 2 | 3}
              className="audience-card"
            >
              <Image
                quality={95}
                src={item.image}
                alt={item.alt}
                sizes="(max-width: 760px) 100vw, 600px"
                placeholder="blur"
              />
              <div className="audience-body">
                <span className="audience-kicker">{item.kicker}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
