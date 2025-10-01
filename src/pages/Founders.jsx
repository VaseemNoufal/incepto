import React from "react";
import vaseemimage from '../assets/vaseemblur3.jpg'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


export default function Founders(){
    return(
        <div className="flex flex-col align-center justify-center pt-20">
            <TextGenerateEffectDemo />
            <br />
            <AnimatedTestimonialsDemo />
        </div>
    )
}


export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Vaseem Noufal",
      designation: "COO & Senior Dev at Incepto",
      src: vaseemimage,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Razique",
      designation: "CEO at Incepto",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Faizan",
      designation: "Developer at Incepto",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}


const words = `Meet Our Wonderfull 
Devs and Owners.`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
