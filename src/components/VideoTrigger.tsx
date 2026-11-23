"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { XIcon } from "@/components/Icons";

type Props = {
  videoId: string;
  title: string;
  className?: string;
  children: React.ReactNode;
};

/** A button that opens a YouTube video in a lightbox. The player only loads on click. */
export default function VideoTrigger({
  videoId,
  title,
  className,
  children,
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={`Play video: ${title}`}
        onClick={() => setOpen(true)}
      >
        {children}
      </button>

      {open
        ? createPortal(
            <div
              className="lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={() => setOpen(false)}
            >
              <div
                className="lightbox-inner"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="lightbox-close"
                  aria-label="Close video"
                  autoFocus
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="icon-md" />
                </button>
                <div className="lightbox-frame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="lightbox-title">{title}</p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
