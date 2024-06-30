import React from "react";
import Image from "next/image";
import Link from "next/link";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import FacebookIcon from "../../../public/facebook-icons.svg";
import EmailIcon from "../../../public/email-icon.png";

const EmailSection = () => {
  return (
    <section id="contact" className="py-10 text-center rounded-lg container mx-auto bg-white bg-opacity-10 p-8 my-20 gradient-flow">
      <div className="container mx-auto bg-white bg-opacity-20 p-8 rounded-lg mb-1">
        <h2 className="text-4xl font-bold text-white mb-20">Let&apos;s Connect ...</h2>
        <p className="text-[#ADB7BE] mb-8 max-w-md mx-auto text-lg lg:text-xl">
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to
          get back to you!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://github.com/cabral0413?tab=repositories" legacyBehavior>
            <a
              target="_blank"
              className="hover:scale-110 transition-transform hover:bg-pink-400 rounded-full p-2 w-1/4 sm:w-1/5"
            >
              <Image src={GithubIcon} alt="Github Icon" layout="responsive" width={100} height={100} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/nipuni-cabral-203b49222/" legacyBehavior>
            <a
              target="_blank"
              className="hover:scale-110 transition-transform hover:bg-pink-400 rounded-full p-2 w-1/4 sm:w-1/5"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" layout="responsive" width={100} height={100} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/_nipuni_cabral/" legacyBehavior>
            <a
              target="_blank"
              className="hover:scale-110 transition-transform hover:bg-pink-400 rounded-full p-2 w-1/4 sm:w-1/5"
            >
              <Image src={InstagramIcon} alt="Instagram Icon" layout="responsive" width={100} height={100} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/nipuni.cabral/" legacyBehavior>
            <a
              target="_blank"
              className="hover:scale-110 transition-transform hover:bg-pink-400 rounded-full p-2 w-1/4 sm:w-1/5"
            >
              <Image src={FacebookIcon} alt="Facebook Icon" layout="responsive" width={100} height={100} />
            </a>
          </Link>
          <a
            href="mailto:nipuni.cabral.tech@gmail.com"
            className="hover:scale-110 transition-transform hover:bg-pink-400 rounded-full p-2 w-1/4 sm:w-1/5"
          >
            <Image src={EmailIcon} alt="Email Icon" layout="responsive" width={100} height={100} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;


