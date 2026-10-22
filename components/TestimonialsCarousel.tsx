"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/site";
import { ChevronLeft } from "./icons";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = TESTIMONIALS.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(() => go(1), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, go]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="carousel-slide"
              aria-hidden={i !== index}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              <div className="quote-card">
                <span className="quote-mark" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote>{t.quote}</blockquote>
                <div className="who">{t.name}</div>
                <div className="who-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        type="button"
        className="carousel-nav prev"
        onClick={() => go(-1)}
        aria-label="Previous testimonial"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        className="carousel-nav next"
        onClick={() => go(1)}
        aria-label="Next testimonial"
      >
        <span style={{ display: "inline-flex", transform: "scaleX(-1)" }}>
          <ChevronLeft />
        </span>
      </button>
      <div className="carousel-dots" role="tablist" aria-label="Choose testimonial">
        {TESTIMONIALS.map((t, i) => (
          <button
            key={t.name}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Testimonial from ${t.name}`}
            className={i === index ? "on" : ""}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
