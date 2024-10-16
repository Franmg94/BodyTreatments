import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

// import image1 from "../assets/project-pictures/project1.jpg";
// import image2 from "../assets/project-pictures/project2.jpg";
// import image3 from "../assets/project-pictures/project3.jpg";
// import image4 from "../assets/project-pictures/project4.jpg";
// import image5 from "../assets/project-pictures/project5.jpg";
// import image6 from "../assets/project-pictures/project6.png";
// import image7 from "../assets/project-pictures/project7.jpg";
// import image8 from "../assets/project-pictures/project8.jpg";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Prices", href: "#prices" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Body Treatments Berlin",
  info: "Experience the massage modalities that are right for you in the moment and in the context of your overall healing.",
};

export const LOCATIONS = [
  {
    name: "Centro Delfino",
    description:
      "Only on Tuesdays. You will be redirected to Centro Delfino Website.",
  },
  {
    name: "At Client's Address",
    description: "Transportation is not included.",
  },
];

export const ABOUT = {
  text1:
    "I create events, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Ceren Kallay, I'm an event producer and cultural curator based in Berlin, originally from Turkey. I graduated from the Department of European Union Studies at Istanbul Bilgi University and have over a decade of experience in the entertainment industry. I have  had the privilege of working as a coordinator and event manager for major events and film festivals, including the !f İstanbul Independent Film Festival and the Istanbul Film Festival.",
};

// export const PROJECTS = [
//   {
//     title: "E-commerce Platform",
//     subtitle:
//       "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
//     image: image1,
//   },
//   {
//     title: "Social Media App",
//     subtitle:
//       "A social media application developed using Next.js and Firebase.",
//     image: image2,
//   },
//   {
//     title: "Project Management Tool",
//     subtitle: "A project management tool built with Django and PostgreSQL.",
//     image: image3,
//   },
//   {
//     title: "Personal Portfolio",
//     subtitle:
//       "A personal portfolio website designed with HTML, CSS, and JavaScript.",
//     image: image4,
//   },
//   {
//     title: "Weather Dashboard",
//     subtitle:
//       "A weather dashboard application built with Vue.js and Express.js.",
//     image: image5,
//   },
//   {
//     title: "Blog Platform",
//     subtitle:
//       "A blogging platform developed with Ruby on Rails and PostgreSQL.",
//     image: image6,
//   },
//   {
//     title: "Fitness Tracker",
//     subtitle: "A fitness tracking app created using Flutter and Firebase.",
//     image: image7,
//   },
//   {
//     title: "Recipe Finder",
//     subtitle: "A recipe finder application developed with Angular and Node.js.",
//     image: image8,
//   },
// ];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

// export const TESTIMONIALS = [
//   {
//     name: "Emily Johnson",
//     title: "CEO, Tech Innovators",
//     quote:
//       "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
//     image: user1,
//   },
//   {
//     name: "Michael Lee",
//     title: "CTO, Creative Minds",
//     quote:
//       "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
//     image: user2,
//   },
//   {
//     name: "Sophia Martinez",
//     title: "Lead Developer, Digital Solutions",
//     quote:
//       "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
//     image: user3,
//   },
//   {
//     name: "Daniel Thompson",
//     title: "Project Manager, InnovateX",
//     quote:
//       "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
//     image: user4,
//   },
// ];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
