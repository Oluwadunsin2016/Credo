import iconOne from "../assets/IconOne.svg";
import iconTwo from "../assets/IconTwo.svg";
import iconThree from "../assets/IconThree.svg";
// import logo from "../assets/New-Credo-Logo-Blue-ETZ.svg";
import logo from "../assets/monicard.png";
import ekiti from "../assets/ekiti.webp";
import HealthXP from "../assets/HealthXP.webp";
import NAU from "../assets/NAU.webp";
import Jamb from "../assets/Jamb.webp";
import Meristem from "../assets/Meristem.webp";
import NDA from "../assets/NDA.webp";
import AbiaState from "../assets/AbiaState.webp";
import Customization from "../assets/Customization.webp";
import OperatingCosts from "../assets/OperatingCosts.webp";
import Revenue from "../assets/Revenue.webp";
import accelerateSvg from "../assets/accelerateSvg.svg";
import scaleBg from "../assets/scaleBg.svg";
import sourceCodeBg from "../assets/sourceCodeBg.svg";
import flashSvg from "../assets/flashSvg.svg";
import { MdBusinessCenter, MdEmail, MdFacebook } from "react-icons/md";
import { FaCreditCard, FaSquareInstagram, FaUsers } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin, IoPersonSharp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa6";
import fedEx from "../assets/card/fedEx.jpeg";
import paradox from "../assets/card/paradox.jpeg";
import ups from "../assets/card/ups.jpeg";
import mastercard from "../assets/card/mastercard.jpeg";
import visa from "../assets/card/visa.jpeg";
import stripe from "../assets/card/stripe.jpeg";
import piggyvest from "../assets/card/piggyvest.jpeg";

// import WhatsApp from "../assets/WhatsApp.svg";
// import whatsapp from "../assets/whatsapp.png";

import one from "../assets/one.jpeg";
// import two from "../assets/two.jpeg";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";
import five from "../assets/five.jpeg";
import { RiWhatsappFill } from "react-icons/ri";
import { GrSchedule } from "react-icons/gr";
// import six from "../assets/six.jpeg";
// import seven from "../assets/seven.jpeg";




export const footerData = {
  PRODUCTS: ["Payment Gateway", "Payment Links", "Settlement"],
  HELP: ["Contact Support", "Terms & Conditions", "Privacy Policy"],
  RESOURCES: [
    "Blog",
    "Knowledge Base (Coming Soon)",
    "Pricing",
    "Referrals (Coming Soon)",
    "Developer Playground",
    "Transactions Search",
  ],
};

export const navbarData = {
  logo: logo,
  links: [
    {
      name: "Products",
      dropdown: [
        {
          name: "Personal",
          icon: IoPersonSharp,
        },
        {
          name: "Business",
          icon: MdBusinessCenter,
        },
        {
          name: "Credit union members",
          icon: FaUsers,
        },
        {
          name: "HR Employee card",
          icon: FaCreditCard,
        },
      ],
    },
    {
      name: "Company",
      dropdown: [
        {
          name: "Why Monicard",
          icon: iconOne,
        },
        {
          name: "About Us",
          icon: iconTwo,
        },
        {
          name: "FAQs",
          icon: iconThree,
        },
      ],
    },
    {
      name: "Investment",
      dropdown: [
        {
          name: "Buy your home through the union",
          icon: iconOne,
        },
        {
          name: "Buy your home through bidding",
          icon: iconTwo,
        },
        {
          name: "Buy and rent out",
          icon: iconThree,
        },
        {
          name: "Electric Vehicle",
          icon: iconOne,
        },
        {
          name: "Merchant Invoice",
          icon: iconTwo,
        },
      ],
    },
    { name: "Contact Us",
      dropdown: [
        {
          name: "Sechedule appointment",
          icon: GrSchedule,
        },
        {
          name: "Chat up on WhatsApp",
          icon: RiWhatsappFill,
        },
        {
          name: "Send an Email",
          icon: MdEmail,
        },
      ], },
    { name: "Pricing" },
  ],
  signIn: "Sign In",
};

export const navItems = [
  {
    name: "Products",
   dropdown: [
        {
          name: "Personal",
          icon: IoPersonSharp,
        },
        {
          name: "Business",
          icon: MdBusinessCenter,
        },
        {
          name: "Credit union members",
          icon: FaUsers,
        },
        {
          name: "HR Employee card",
          icon: FaCreditCard,
        },
      ],
  },
  {
    name: "Company",
    dropdown: [
      { name: "Why Monicard", icon: iconOne },
      { name: "About Us", icon: iconTwo },
      { name: "FAQs", icon: iconThree },
    ],
  },
  {
    name: "Investment",
    dropdown: [
        {
          name: "Buy your home through the union",
          icon: iconOne,
        },
        {
          name: "Buy your home through bidding",
          icon: iconTwo,
        },
        {
          name: "Buy and rent out",
          icon: iconThree,
        },
        {
          name: "Electric Vehicle",
          icon: iconOne,
        },
        {
          name: "Merchant Invoice",
          icon: iconTwo,
        },
      ],
  },
  { name: "Contact Us",
       dropdown: [
        {
          name: "Sechedule appointment",
          icon: GrSchedule,
        },
        {
          name: "Chat up on WhatsApp",
          icon: RiWhatsappFill,
        },
        {
          name: "Send an Email",
          icon: MdEmail,
        },
      ], },
  { name: "Pricing" },
  { name: "Sign In" },
];

export const faqs = [
  {
    question: "What is Credo and how does it work?",
    answer:
      "Credo is a platform that helps businesses process payments and manage financial transactions seamlessly.",
  },
  {
    question: "What types of payments can be processed through Credo?",
    answer:
      "Credo supports a variety of payment methods, including credit cards, debit cards, and bank transfers.",
  },
  {
    question: "Is Credo available Internationally?",
    answer:
      "Yes, Credo is available for businesses worldwide with support for multiple currencies.",
  },
  {
    question: "What kinds of businesses can use Credo?",
    answer:
      "Credo can be used by any business, from small startups to large enterprises, looking to simplify their payment processes.",
  },
  {
    question: "What security measures does Credo have in place?",
    answer:
      "Credo employs advanced encryption and fraud detection mechanisms to ensure the safety of your transactions.",
  },
];

export const testimonials = [
  {
    text: "I've experienced firsthand the exceptional adaptability and service of Credo's team. Their ability to tailor the payment gateway to meet our specific needs has been a great experience for us. Unlike other platforms, Credo offers the flexibility and personalization that our university needs. Credo hasn't just provided a service; they've enhanced our payment system with innovative solutions and a genuine understanding of our needs. Partnering with Credo has been a gift that keeps on giving.",
    author: "Ekene Ezeasor",
    role: "Engineer @ Unizik",
  },
  {
    text: "Credo's team has been phenomenal in providing the best support we've ever had. They really understand our business goals and helped us streamline processes. Their service is second to none!",
    author: "Jane Doe",
    role: "Manager @ ABC Corp",
  },
  {
    text: "Working with Credo was a game changer for our organization. Their innovative solutions saved us time and increased efficiency. The team is extremely professional and helpful.",
    author: "John Smith",
    role: "CEO @ XYZ Ltd",
  },
];

export const cards = [
  {
    id: 1,
    title: "For Enterprise",
    description: "Scale and Optimize Your Payments",
    bg: scaleBg,
  },
  {
    id: 2,
    title: "For SME's",
    description: "Simplify and Accelerate Your Payments",
    bg:accelerateSvg
  },
  {
    id: 3,
    title: "For Digital Nomads",
    description: "Supercharge Your Hustle and Get Paid",
    bg:flashSvg
  },
  {
    id: 4,
    title: "For Developers",
    description: "Build, Integrate, and Innovate with Ease",
    bg:sourceCodeBg
  },
];

export const benefitCards = [
  {
    id: 1,
    title: "Incredible Customization",
    description:
      "Credo is designed to cater to the unique requirements of various business segments, allowing you to make as many tweaks as you want, to suit your business needs.",
    color: "bg-blue-50",
    image: Customization,
  },
  {
    id: 2,
    title: "Lower Operating Costs",
    description:
      "You can access multiple services needed for your business through a single source. Fewer integrations, lower expenses, more value.",
    color: "bg-gray-100",
    image: OperatingCosts,
  },
  {
    id: 3,
    title: "Revenue Assurance",
    description:
      "You work hard for your money, so nothing should stop you from accessing it. We ensure you can earn from your transactions in a jiffy, thanks to our advanced settlement.",
    color: "bg-red-50",
    image: Revenue,
  },
];

export const miscellaneous = [
  { name: "Ekiti", logo: ekiti },
  { name: "Health XP", logo: HealthXP },
  { name: "NAU", logo: NAU },
  { name: "Jamb", logo: Jamb },
  { name: "Meristem", logo: Meristem },
  { name: "NDA", logo: NDA },
  { name: "AbiaState", logo: AbiaState },
];

export const socialMedia=[
{name:'Facebook',icon:MdFacebook},
{name:'Instagram',icon:FaSquareInstagram},
{name:'Twitter',icon:FaTwitter},
{name:'LinkedIn',icon:IoLogoLinkedin},
{name:'Youtube',icon:FaYoutube},
]

export const scrollImages=[five,four,one,three,]

export const paymentCards = [
  { name: "FedEx", logo: fedEx },
  { name: "Paradox", logo: paradox },
  { name: "Mastercard", logo: mastercard },
  { name: "Visa", logo: visa },
  { name: "Ups", logo: ups },
  { name: "Stripe", logo: stripe },
  { name: "Piggyvest", logo: piggyvest },
];
