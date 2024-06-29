"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Inventory Management System for Bookstores",
    description: "Developed a web application to enhance book inventory management for bookstores, leading to increased inventory accuracy by 20%, reduced manual inventory checks by 30%, and better stock management through data-driven decision-making.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "MongoDB", "Express.js", "Node.js"], // Added technologies
  },
  {
    id: 2,
    title: "Automated Snake Species Classification and First Aid Assistance",
    description: "Created innovative software for real-time snake species identification and providing essential first-aid information. This project contributes to biodiversity conservation and public safety.",
    image: "/images/projects/2.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Python", "Deep Learning", "Image Processings","React-Native","YOLOV8"],
  },
  {
    id: 3,
    title: "SoundCores: Mobile App for Sound Type Detection",
    description: "Developed a mobile application using machine learning to identify and classify environmental sounds. This app enhances birdwatching experiences, aids deaf/hard-of-hearing individuals, and promotes environmental awareness.",
    image: "/images/projects/3.JPG",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/FHSS-USJ/end-semester-exam-group-3",
    previewUrl: "/",
    technologies: ["React Native", "Firebase", "JavaScripts", "C++"],
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "For the Food Order Website, added a user registration and login system, allowing users to customize orders, integrated payment gateways for online transactions, provided order tracking and status updates, and optimized the website for mobile responsiveness.",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["PHP", "CSS", "HTML"],
  },
  {
    id: 5,
    title: "Library Management System",
    description: "Included features for managing user accounts, tracking book borrowing history, generating reports on book availability and overdue books.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["PHP", "CSS", "HTML", " MySQL"],
  },
  {
    id: 6,
    title: "Chatbot for Students",
    description: "Built a PHP-based chatbot to assist students with queries, leveraging artificial intelligence for efficient responses and feedback.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/cabral0413/ChatbotAI",
    previewUrl: "/",
    technologies: ["AI", "CSS", "HTML","Java Script"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-20 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies} // Pass technologies prop
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
