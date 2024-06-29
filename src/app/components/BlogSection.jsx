import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LinkedinIcon from '/public/linkedin-logoC.svg'; // Adjust the path as needed

const blogs = [
  {
    title: "ChatGPT",
    excerpt: "ChatGPT is an AI chatbot made by OpenAI that can answer questions on various topics. It was released in November 2022 and is based on OpenAI's GPT-3.5 and GPT-4 models. While it has received attention for its detailed responses, its factual accuracy can be uneven....",
    url: "https://www.linkedin.com/posts/nipuni-cabral-203b49222_aichatgpt-chatbot-openai-activity-7059927001662394368-vI2w?utm_source=share&utm_medium=member_desktop",
    image: "/images/Blogs/BlogPost1.JPG" // Replace with your image path
  },
  {
    title: "Introduction to UI/UX Design",
    excerpt: "In the digital age, where user-centric design has become pivotal, the terms User Interface (UI) and User Experience (UX) are often used interchangeably. However, they represent distinct aspects of the design process. Understanding their differences is crucial for anyone....",
    url: "https://www.linkedin.com/pulse/introduction-uiux-design-1-nipuni-cabral-66uxc",
    image: "/images/Blogs/BlogPost2.JPG" // Replace with your image path
  },
  {
  title: "Introduction to Project Management",
  excerpt: "Project management is the art and science of planning, organizing, and managing resources to achieve specific goals within a defined timeline. It involves coordinating various tasks and activities to ensure that a project is completed on time, within budget, and to the required quality standards.....",
  url: "https://www.linkedin.com/pulse/introduction-project-management-1-nipuni-cabral-hk2fc",
  image: "/images/Blogs/BlogPost3.JPG" // Replace with your image path
  // Add more blog posts as needed
  }
];

const BlogCard = ({ blog }) => (
  <div className="bg-[#181818] text-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
    <div
      className="h-52 md:h-72 relative group"
      style={{ background: `url(${blog.image})`, backgroundSize: "cover" }}
    >
      <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
        <Link
          href={blog.url}
          className="h-14 w-14 border-2 relative rounded-full border-blue-500 hover:border-blue-700 group/link"
        >
          <Image
            src={LinkedinIcon}
            alt="LinkedIn Icon"
            width={24}
            height={24}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-700"
          />
        </Link>
      </div>
    </div>
    <div className="flex flex-col justify-between mt-3 bg-[#181818] py-6 px-4 flex-grow">
      <div>
        <h5 className="text-xl font-semibold mb-2">{blog.title}</h5>
        <p className="text-[#ADB7BE] mb-4">{blog.excerpt}</p>
      </div>
      <div className="flex justify-center mt-4">
        <Link href={blog.url} legacyBehavior>
          <a
            target="_blank"
            className="flex items-center justify-center text-white border border-white transition-colors py-2 px-4 rounded-full hover:bg-white hover:text-black"
          >
            <Image src={LinkedinIcon} alt="LinkedIn Icon" width={30} height={30} className="mr-2" />
            Read on LinkedIn
          </a>
        </Link>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section id="blog" className="py-12 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-20">Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
