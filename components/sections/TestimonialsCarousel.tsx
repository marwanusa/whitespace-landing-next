"use client";
import React from "react";
import Testimonials from "@/components/Testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/data/data";

const TestimonialsCarousel = () => {
  return (
    <section className="mainSection xl:h-[700px] lg:h-[760px] md:h-[630px] h-[710px]">
      <main className="mainContainer">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {testimonialsData.map((item, index) => (
              <CarouselItem key={index} className="basis-full lg:basis-1/3">
                <Testimonials {...item} type={item.type as "dark" | "light"} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </main>
    </section>
  );
};

export default TestimonialsCarousel;
