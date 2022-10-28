import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  return (
    <div className="p-10">
      <p className="font-bold text-lg mb-10">قالوا عنا</p>
      <div className="flex gap-6">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
