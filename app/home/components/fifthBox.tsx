import Image from "next/image";
import TestimonialCard from "../../../components/testimonialCard";

const testimonials = [
  {
    avatar: "/test1.svg",
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    avatar: "/test2.svg",
    name: "James L.",
    role: "Lifelong Learner",
    quote: "I have tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    avatar: "/test3.svg",
    name: "Alex B.",
    role: "Inspired Creator",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It is fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function FifthBox() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f8fbff]">
      <Image src="/TestimonialBg.png" alt="" fill className="pointer-events-none -z-10 object-cover object-center" />

      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <h2 className="max-w-[520px] text-4xl font-semibold leading-[1.08] text-[#111827] sm:text-5xl">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-sm leading-6 text-[#6f7682] sm:text-base">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
