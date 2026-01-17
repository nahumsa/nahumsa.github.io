"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Nahum Sá
          </h1>
          <p className="text-white-100 text-lg mb-4 lg:text-xl">
            I&apos;m a Data and ML Engineer focused on architecting and delivering high-impact, production-grade data platforms. My expertise lies in translating ambiguous data science objectives into scalable, reliable, and cost-optimized cloud infrastructure.
            My career path has equipped me to engage stakeholders, define technical requirements, and implement end-to-end data solutions across diverse client domains, such as Supply Chain, Law, Oil and Gas, Industrial Asset Management.
          </p>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/programmer-image.png"
              alt="image"
              width={300}
              height={300}
              className="mx-auto rounded-lg overflow-hidden absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
