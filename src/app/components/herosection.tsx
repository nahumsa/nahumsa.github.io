import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Nahum Sá
          </h1>
          <p className="text-white-100 text-lg mb-4 lg:text-xl">
            Data Scientist and Engineer experienced in creating solutions that have scalability and consistency in mind.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">Github</button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Linkedin</button>
          </div>
          </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img 
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
  )
}

export default HeroSection;
