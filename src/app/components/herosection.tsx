import React from "react";
import Link from 'next/link';
import {FaLinkedin, FaGithub} from 'react-icons/fa6';

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-emerald-200 mb-4 mt-4 text-4xl lg:text-6xl font-extrabold">
            Nahum Sá
          </h1>
          <p className="text-white-100 text-base sm:text-lg mb-4 lg:text-xl">
            Data and Machine Learning Engineer experienced in creating solutions that have scalability and consistency in mind.
          </p>
          <div className="place-self-center">
            <a target="_blank" href="https://www.linkedin.com/in/nahumsa/">
              <button className="h-12 px-6 m-2 text-lg text-white-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-emerald-300">
                <FaLinkedin />
              </button>
            </a>
            <a target="_blank" href="https://github.com/nahumsa">
              <button className="h-12 px-6 m-2 text-lg text-white-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-emerald-300">
                <FaGithub />
              </button>
            </a>
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
