"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import JavaLogo from "/public/images/Skills/java.png";
import HTMLLogo from "/public/images/Skills/html.png";
import MLLogo from "/public/images/Skills/ML.png";
import CSSLogo from "/public/images/Skills/css.png";
import REACTLogo from "/public/images/Skills/react.png";
import JSLogo from "/public/images/Skills/javascript.png";
import MongoLogo from "/public/images/Skills/mongodb.png";
import SQLLogo from "/public/images/Skills/mysql.png";
import PythonLogo from "/public/images/Skills/python.png";
import NativeLogo from "/public/images/Skills/react-native.png";
import TrelloLogo from "/public/images/Skills/trello.png";
import APILogo from "/public/images/Skills/api.png";
import ASANALogo from "/public/images/Skills/asana.png";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6 pl-2">
        <div className="flex flex-col items-center">
        <Image src={JavaLogo} alt="Java Icon" width={100} height={100} />
        <span className="text-xs">Java</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={HTMLLogo} alt="HTML Icon" width={100} height={100} />
        <span className="text-xs">HTML</span>
      </div>

      
      <div className="flex flex-col items-center">
        <Image src={CSSLogo} alt="CSS Icon" width={100} height={100} />
        <span className="text-xs">CSS</span>
      </div>
      

      <div className="flex flex-col items-center">
        <Image src={MLLogo} alt="ML Icon" width={100} height={100} />
        <span className="text-xs">ML</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={JSLogo} alt="JavaScript Icon" width={100} height={100} />
        <span className="text-xs">Java Script</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={MongoLogo} alt="Mongo Icon" width={100} height={100} />
        <span className="text-xs">MongoDB</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={SQLLogo} alt="SQL Icon" width={100} height={100} />
        <span className="text-xs">MySQL</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={PythonLogo} alt="Python Icon" width={100} height={100} />
        <span className="text-xs">Python</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={NativeLogo} alt="Native Icon" width={100} height={100} />
        <span className="text-xs">React-Native</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={TrelloLogo} alt="Trello Icon" width={100} height={100} />
        <span className="text-xs">Trello</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={APILogo} alt="API Icon" width={100} height={100} />
        <span className="text-xs">API</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={REACTLogo} alt="React Icon" width={90} height={90} />
        <span className="text-xs">React</span>
      </div>
      <div className="flex flex-col items-center">
        <Image src={ASANALogo} alt="ASANA Icon" width={100} height={100} />
        <span className="text-xs">Asana</span>
      </div>
      
    </div>
    
   
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Viharamahadevi Balika Vidyalaya, Kiribathgoda (2006-2019)</li>
        <li>BSc.(Hons) in Information Technology, University of Sri Jayawardanapura (2021 - Present)</li>
        <li>University of Kelaniya (2020)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
      <li>MS office, University of Kelaniya (Grade  A+)</li>
        <li>Foundations of User Experience(UX) Design, Coursera</li>
        <li>Introduction to Tensorflow for AI,ML and Deep Learning, Coursera</li>
        <li>NDG Linux Essentials</li>
        <li>Introduction to Cyber Security</li>
        <li>UI/UX for Beginner</li>
      
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} alt="about-image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="flex items-center">
            <h3 className="text-2xl font-semibold text-pink-500 mb-2 relative">
              Coffee, Code, Creativity: My Recipe for Web Awesomeness
            </h3>
          </div>
          <p className="text-base lg:text-lg mt-4">
            I&apos;m a final-year IT undergraduate who thrives at the intersection of logic and imagination. Think of me as a digital alchemist, brewing powerful web applications and managing innovative projects fueled by:
          </p>
          <ul className="list-disc pl-4 mt-2">
            <li>
              <strong>Front-End Flair:</strong> I weave together HTML, CSS, and React to craft beautiful, responsive experiences.
            </li>
            <li>
              <strong>Back-End Brawn:</strong> JavaScript, Node.js, and their trusty companions handle the server-side magic, ensuring data flows smoothly.
            </li>
            <li>
              <strong>Database Dexterity:</strong> Whether it&apos;s MySQL or MongoDB, I can store and retrieve information with ease.
            </li>
            <li>
              <strong>Mobile Mastery:</strong> React Native lets me bring your web app to life on any device.
            </li>
          </ul>
          <p className="text-base lg:text-lg mt-4">
            Beyond the code, I&apos;m passionate about:
          </p>
          <ul className="list-disc pl-4 mt-2">
            <li>
              <strong>Project Management:</strong>  I excel in organizing, planning, and leading projects to successful completion, ensuring that every team member is motivated and aligned with the project&apos;s goals.
            </li>
            <li>
              <strong>UI/UX Design:</strong> I have a keen eye for design and a user-centric approach, creating intuitive and engaging interfaces that enhance user experiences.
            </li>
            </ul>

          
          <p className="text-base lg:text-lg mt-4">
          Ready to craft some web magic together? Whether you need a project manager, a software engineer, or a UI/UX designer, I&apos;m excited to bring my diverse skills and enthusiasm to your team. <strong>Contact me</strong> and let&apos;s discuss your next project!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

