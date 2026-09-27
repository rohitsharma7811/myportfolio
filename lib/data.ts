// All site content lives here. Edit this file to update the portfolio —
// no need to touch the components.

export const profile = {
  name: "Rohit Sharma",
  firstName: "Rohit",
  lastName: "Sharma",
  role: "Lead Frontend Engineer",
  company: "Nexclusive Tech Dynamics",
  intro:
    "I turn Figma, Adobe XD and Photoshop designs into fast, pixel-perfect websites that work on every screen.",
  about: [
    "I started as a web designer in 2013, drawing layouts in Photoshop and hand-coding them. Thirteen years later I still care about the same thing: the build should look exactly like the design, and feel better than it.",
    "Today I lead frontend work at Nexclusive Tech Dynamics, building with React, Next.js and Payload CMS, and shipping marketing landing pages in Webflow and Unbounce.",
  ],
  email: "rohit.sharma7811@gmail.com",
  phone: "+91 98038 41676",
  whatsapp: "919803841676", // phone in international format, no + or spaces, used for the wa.me link
  location: "Gurugram, India",
  cvUrl: "/Rohit_Sharma_CV.pdf", // drop your CV PDF into /public with this name
  linkedin: "", // add your LinkedIn URL to show the link
  github: "", // add your GitHub URL to show the link
};

// Get a free access key at https://web3forms.com (enter your email, the key
// arrives instantly, no account needed) and paste it below. It powers the
// contact form: submissions are emailed straight to the address you used to
// sign up, with no backend required.
export const web3formsAccessKey = "87d9f628-1a8d-48db-b393-f037194fe498";

export const stats = [
  { value: 13, suffix: "+", label: "years building for the web" },
  { value: 8, suffix: "", label: "companies" },
  { value: 50, suffix: "+", label: "websites shipped" },
];

// `image` is an optional thumbnail (drop a file into /public/projects and point to it here).
// Left blank, the card falls back to a gradient placeholder.
export const projects = [
  {
    name: "Exclusive Markets",
    url: "https://exclusivemarkets.com/",
    summary: "Main company website, built from Figma as a fully responsive front-end.",
    tags: ["Figma", "HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    image: "/projects/exclusive-markets.webp",
  },
  {
    name: "Exclusive Markets Prime",
    url: "https://prime.exclusivemarkets.com/",
    summary:
      "Prime trading platform website for Exclusive Markets, built on Next.js with a Payload CMS backend for content management.",
    tags: ["Figma", "Next.js", "Payload CMS"],
    image: "/projects/exclusive-markets-prime.webp",
  },
  {
    name: "Avrion Risk",
    url: "https://risk.avrion.com/",
    summary:
      "Risk management platform website, converted from Figma designs into a responsive Next.js front-end backed by Payload CMS.",
    tags: ["Figma", "Next.js", "Payload CMS"],
    image: "/projects/avrion-risk.png",
  },
  {
    name: "Exca Prime",
    url: "https://www.excaprime.com/",
    summary:
      "Brand website for Exca Prime, hand-coded from Figma designs into a fully responsive front-end.",
    tags: ["Figma", "HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
    image: "/projects/exca-prime.webp",
  },
  {
    name: "Exclusive Markets Education",
    url: "https://exclusivemarkets.education/",
    summary:
      "Education portal for Exclusive Markets, built on Next.js with Payload CMS to manage course and learning content.",
    tags: ["Figma", "Next.js", "Payload CMS"],
    image: "/projects/exclusive-markets-education.png",
  },
];

export const experience = [
  {
    role: "Lead Frontend Engineer",
    company: "Nexclusive Tech Dynamics",
    note: "formerly DayNight Consultants",
    period: "Mar 2023 – Present",
    points: [
      "Revamped the company website on Payload CMS with a Next.js front-end.",
      "Build marketing landing pages in Webflow and Unbounce.",
      "Convert Figma designs into pixel-perfect, responsive interfaces.",
    ],
  },
  {
    role: "UI Developer",
    company: "Intellolabs",
    period: "Oct 2022 – Jan 2023",
    points: ["Customised WordPress websites and built responsive Bootstrap pages."],
  },
  {
    role: "UI Developer",
    company: "TechGenies India",
    period: "Jun 2020 – Sep 2022",
    points: ["Built WordPress sites with Divi and Elementor, and responsive pages from XD designs."],
  },
  {
    role: "UI Developer",
    company: "QuayInTech",
    period: "May 2019 – Mar 2020",
    points: ["Converted PSD designs into standards-compliant responsive pages."],
  },
  {
    role: "UI Developer",
    company: "QuadLabs Technologies",
    period: "Jun 2017 – Mar 2019",
    points: ["Designed interfaces in Photoshop and coded them in HTML5 and CSS3."],
  },
  {
    role: "Associate UI Designer",
    company: "Xcelserv Solutions",
    period: "Apr 2016 – Jun 2017",
    points: ["Designed client UIs and built them as responsive front-ends."],
  },
  {
    role: "Web Designer",
    company: "Netscape India",
    period: "Sep 2015 – Mar 2016",
    points: ["Created website designs and converted them to responsive HTML/CSS."],
  },
  {
    role: "Web Designer",
    company: "Avis Technology",
    period: "May 2013 – Jul 2015",
    points: ["Where it started: designing sites in Photoshop and hand-coding them."],
  },
];

// `level` is a self-rated 0-100 confidence score shown as a progress bar — adjust freely.
export const skills = [
  {
    group: "Frontend Development",
    description: "React, Next.js and Angular — building fast, responsive interfaces from pixel-perfect designs.",
    level: 95,
    items: ["React.js", "Next.js", "Angular", "Bootstrap 3–5"],
  },
  {
    group: "Core Web",
    description: "The fundamentals I've relied on for 13+ years, still the backbone of every build.",
    level: 95,
    items: ["HTML5", "CSS3", "JavaScript", "jQuery"],
  },
  {
    group: "CMS & Landing Pages",
    description: "Payload CMS, WordPress and no-code builders for marketing sites and campaigns.",
    level: 85,
    items: ["Payload CMS", "WordPress", "Webflow", "Unbounce", "Elementor", "Divi"],
  },
  {
    group: "Design",
    description: "Turning Figma, XD and Photoshop files into code without losing the details.",
    level: 90,
    items: ["Figma", "Adobe XD", "Photoshop"],
  },
];
