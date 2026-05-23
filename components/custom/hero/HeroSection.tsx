"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dividerRef = useRef<HTMLHRElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let tl: any;

    (async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return; // StrictMode unmounted before import resolved

      gsap.set([titleRef.current, dividerRef.current, descRef.current, buttonsRef.current], {
        opacity: 0,
      });

      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(titleRef.current,
          { y: -40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, clearProps: "all" }
        )
        .fromTo(dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: "left center", clearProps: "all" },
          "-=0.4"
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, clearProps: "all" },
          "-=0.3"
        )
        .fromTo(buttonsRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, clearProps: "all" },
          "-=0.4"
        );
    })();

    return () => {
      cancelled = true;
      tl?.kill();
    };
  }, []);

  return (
    <section className="hero">
      {/* Image background */}
      <div className="hero__video-bg">
        <img
          src="/images/roofing-crew-installing-shingles-aerial-view.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Content */}
      <div className="hero__content">
        <h1 className="hero__title" ref={titleRef}>
          Redwood City&apos;s
          <br />
          Trusted Roofing
          <br />
          Experts
        </h1>

        <hr className="hero__divider" ref={dividerRef} />

        <p className="hero__description" ref={descRef}>
          Full-service roof repair, replacement, and storm damage response throughout Redwood City and San Mateo County — free inspections, written estimates, licensed crew.
        </p>

        <div className="hero__buttons" ref={buttonsRef}>
          <Link href="/contact-us" className="hero__btn-primary">
            Free Inspection
          </Link>
          <Link href="/about-us" className="hero__btn-secondary">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
}