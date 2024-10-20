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

import treatment1 from "../assets/images/treatment-1.jpg";
import treatment2 from "../assets/images/treatment-2.jpg";
import treatment3 from "../assets/images/treatment-3.jpg";
import treatment4 from "../assets/images/treatment-4.jpg";
import treatment5 from "../assets/images/treatment-5.jpg";
import treatment6 from "../assets/images/treatment-6.jpg";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";

export const NAVIGATION_LINKS = [
  { label: "Treatments", href: "#treatments" },
  { label: "Prices", href: "#prices" },
  { label: "About", href: "#about" },
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
    "Hi, I'm Fran aka Paka, your professional massage therapist in  Berlin. My experience as a dancer has greatly influenced my approach  to massage therapy, allowing me to understand the body’s movements,  tensions, and the need for relaxation deeply.",
  text2:
    "Through my years of dancing, I have developed a keen awareness of how to work with the body to relieve stress and pain. I use my knowledge of movement and anatomy to provide personalized massage treatments that promote healing and well-being. Whether you're an athlete, a dancer, or someone seeking relaxation, my goal is to help you achieve balance and comfort through tailored massage techniques.",
};

export const TREATMENTS = [
  {
    treatmentName: "Wellness Massage",
    subTitle: "Ease tension with light, rhymic strokes",
    description:
      "A relaxing wellness massage designed to rejuvenate your mind and body. This treatment combines gentle techniques to help you unwind, relieve stress, and improve your overall well-being.",
    image: treatment1,
  },
  {
    treatmentName: "Holistic Massage",
    subTitle: "A harmonious blend of soul, mind, and body",
    description:
      "A holistic approach to massage that addresses the whole person – mind, body, and spirit. This treatment aims to balance your energies and promote natural healing through various techniques tailored to your needs.",
    image: treatment2,
  },
  {
    treatmentName: "Energy Work",
    subTitle: "Nourish your aura with touch-free energy",
    description:
      "Energy work to balance your body and restore harmony. This treatment focuses on clearing blockages, enhancing the flow of energy, and bringing your body into a state of equilibrium.",
    image: treatment3,
  },
  {
    treatmentName: "Deep Tissue Massage",
    subTitle: "Release tension with strong pressure",
    description:
      "Deep tissue massage for muscle relief and tension release. This intensive treatment targets the deeper layers of muscle tissue to alleviate chronic pain, improve mobility, and promote muscle recovery.",
    image: treatment4,
  },
  {
    treatmentName: "Urban Sports Club Massage",
    subTitle: "For clients with L suscription",
    description:
      "Specialized massage treatments for Urban Sports Club members. 25 min session with the option to extend paying a small amount.",
    image: treatment5,
  },
  {
    treatmentName: "Class Pass Massage",
    subTitle: "For clients of Class Pass",
    description:
      "Exclusive massage services for ClassPass members. Please check in before through your app.",
    image: treatment6,
  },
];

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
