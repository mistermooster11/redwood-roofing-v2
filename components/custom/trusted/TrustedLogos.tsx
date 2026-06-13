"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function TrustedLogos() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.fromTo(
          ".trusted__heading",
          { y: 24, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out", clearProps: "all",
            scrollTrigger: { trigger: ".trusted__heading", start: "top 92%", once: true },
          }
        );
        gsap.fromTo(
          ".trusted__logo-item",
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.12, clearProps: "all",
            scrollTrigger: { trigger: ".trusted__logos", start: "top 92%", once: true },
          }
        );
      }, sectionRef);
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="trusted" ref={sectionRef}>
      <div className="trusted__inner">
        <h2 className="trusted__heading">
          Trusted by Redwood City &amp; San Mateo County
        </h2>
        <div className="trusted__logos">
          <div className="trusted__logo-item">
            <Image
              src="/images/logo-oracle.svg"
              alt="Oracle — Redwood City, CA"
              width={160}
              height={48}
              style={{ height: "44px", width: "auto", opacity: 0.75 }}
            />
          </div>
          <div className="trusted__logo-item">
            <Image
              src="/images/logo-ea.svg"
              alt="Electronic Arts — Redwood City, CA"
              width={80}
              height={48}
              style={{ height: "44px", width: "auto", opacity: 0.75 }}
            />
          </div>
          <div className="trusted__logo-item">
            <Image
              src="/images/logo-box.svg"
              alt="Box — Redwood City, CA"
              width={100}
              height={48}
              style={{ height: "44px", width: "auto", opacity: 0.75 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
