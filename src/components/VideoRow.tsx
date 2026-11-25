"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";
import { PlayIcon } from "@/components/Icons";
import { VIDEO_ROW } from "@/lib/constants";

/** Video cards that play in place. The player loads on click, one video at a time. */
export default function VideoRow() {
  const [playing, setPlaying] = useState<string | null>(null);

  return (
    <ul className="videos-row">
      {VIDEO_ROW.map((video, index) => (
        <li key={video.id}>
          <Reveal delay={((index % 3) + 1) as 1 | 2 | 3}>
            <div className="video-card">
              {playing === video.id ? (
                <div className="video-thumb">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <button
                  type="button"
                  className="video-thumb video-thumb-btn"
                  aria-label={`Play video: ${video.title}`}
                  onClick={() => setPlaying(video.id)}
                >
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
                </button>
              )}
              <div className="video-cap">
                <strong>{video.title}</strong>
                <small>{video.meta}</small>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
