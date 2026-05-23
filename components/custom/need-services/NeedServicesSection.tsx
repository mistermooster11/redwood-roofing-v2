"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";

export default function NeedServicesSection() {
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
        gsap.from(".need-services__inner > *", {
          y: 35, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
        });
      });
    })();
    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <section className="need-services" ref={sectionRef}>
      <div className="need-services__inner">
        <h2 className="need-services__heading">
          Need a Roof Inspection or Repair
          <br />in Redwood City?
        </h2>
        <p className="need-services__text">
          Call (650) 822-1222 or submit a request online. Free inspections, written estimates,
          and <br />no surprise charges — serving Redwood City &amp; San Mateo County.
        </p>
        <Link href="/contact-us/" className="need-services__btn">
          Free Inspection
        </Link>
      </div>
    </section>
  );
}
