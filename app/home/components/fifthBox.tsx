"use client"
import Image from "next/image";
import TestimonialCard from "../../../components/testimonialCard";
import {useEffect, useState, useRef} from "react"
import { communityStories } from "../text-files/fifthBox";

export default function FifthBox() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative isolate overflow-hidden bg-[#f8fbff] ${
        isVisible ? "animate-fifth-box" : ""
      }`}
    >
      <Image src="/testimonials/TestimonialBg.png" alt="" fill className="pointer-events-none -z-10 object-cover object-center" />

      <div className="hero-card mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16" data-tutorial="community-stories">
          <h2 className="max-w-[520px] text-4xl font-semibold leading-[1.08] text-[#111827] sm:text-5xl">
            {communityStories.heading}
          </h2>
          <p className="max-w-[580px] text-sm leading-6 text-[#6f7682] sm:text-base">
            {communityStories.description}
          </p>
        </div>

        <div className="hero-bottom-cards mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" data-tutorial="testimonial-cards">
          {communityStories.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
