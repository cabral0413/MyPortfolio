"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 relative z-0 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-8 place-self-center text-center lg:text-left p-4 sm:p-8"
          >
            <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Hello, I&apos;m{" "}
              </span>
              <br />
              Nipuni
            </h1>
            <div className="mb-4 lg:mb-8 text-xl sm:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  1000,
                  "Project Manager",
                  1000,
                  "UI/UX Designer",
                  1000,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
              />
            </div>
            <p className="text-[#ADB7BE] text-sm sm:text-base lg:text-lg mb-6 lg:text-xl leading-relaxed">
              Welcome! I&apos;m Nipuni Cabral, a final year IT undergraduate passionate about project
              management and web development. With skills in Java, HTML, CSS, React, JavaScript,
              React Native, MySQL, and MongoDB, I excel in teamwork, leadership, and creativity.
              I am actively seeking internship opportunities in project management or
              web development to further my growth and contribute to innovative projects.
              Let&apos;s connect and create something amazing together!
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
              >
                Hire Me
              </Link>
              <Link
                href="/cv-un.pdf"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              >
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-4 mt-4 lg:mt-0 relative z-10"
          >
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] mx-auto">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full w-[90%] h-[100%] animate-spin-slow"></div>
              </div>
              <div className="relative z-10 rounded-full w-full h-full">
                <Image
                  src="/images/hero.png" // Replace with your image path
                  alt="Nipuni Cabral"
                  layout="fill"
                  style={{ objectFit: 'cover' }}
                  className="rounded-full" // Optional: Add classes to style the image
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

