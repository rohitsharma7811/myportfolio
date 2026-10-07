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
    note: "formerly DayNight Consultants; business handed over",
    period: "Mar 2023 – Present",
    groups: [
      {
        label: "Leadership",
        points: [
          "Lead the frontend team: plan and assign work, review code and set the standards for UI quality, responsiveness and performance.",
          "Act as the main point of contact for clients, gathering requirements, sharing progress and turning feedback into clear development tasks.",
          "Work closely with management on scope, priorities and timelines, and deliver projects on schedule from design hand-off to launch.",
          "Guide and support developers on the team, helping them solve technical problems and keep work consistent across projects.",
        ],
      },
      {
        label: "Development",
        points: [
          "Led the revamp of the company website on Payload CMS, a headless, TypeScript-based CMS built on Next.js, giving the content team easy, structured editing while the front-end stays fast, SEO-friendly and fully custom.",
          "Build and launch high-converting marketing landing pages with Webflow and Unbounce, enabling quick campaign launches and A/B testing.",
          "Convert Figma designs into pixel-perfect, responsive interfaces using Tailwind CSS and Bootstrap 5.",
          "Delivered front-ends for exclusivemarkets.com and its related platforms.",
        ],
      },
    ],
  },
  {
    role: "UI Developer",
    company: "Intellolabs",
    period: "Oct 2022 – Jan 2023",
    points: [
      "Developed and customised WordPress websites, adapting themes, layouts and plugins to each client's requirements.",
      "Converted PSD designs into responsive, cross-browser Bootstrap pages.",
    ],
  },
  {
    role: "UI Developer",
    company: "TechGenies India",
    period: "Jun 2020 – Sep 2022",
    points: [
      "Built and maintained WordPress websites with Divi and Elementor, turning Adobe XD designs into responsive, easy-to-edit sites.",
      "Developed HubSpot websites and landing pages using HubSpot CMS templates and modules.",
      "Created custom HTML5/CSS3 websites with Bootstrap from XD and PSD designs, including network.nurseslounge.com.",
    ],
  },
  {
    role: "UI Developer",
    company: "QuayInTech",
    period: "May 2019 – Mar 2020",
    points: [
      "Converted PSD designs into responsive, standards-compliant HTML5/CSS3 pages with Bootstrap.",
      "Worked with back-end developers to integrate the front-end and fix cross-browser and mobile layout issues.",
    ],
  },
  {
    role: "UI Developer",
    company: "QuadLabs Technologies",
    period: "Jun 2017 – Mar 2019",
    points: [
      "Designed web interfaces in Photoshop and coded them into responsive HTML5/CSS3 with Bootstrap.",
      "Built front-ends for travel and e-commerce websites, working alongside the .NET development team.",
    ],
  },
  {
    role: "Associate UI Designer",
    company: "Xcelserv Solutions",
    note: "incl. sister concern Fiercehound Media",
    period: "Apr 2016 – Jun 2017",
    points: [
      "Designed client website UIs in Photoshop and built them as responsive Bootstrap front-ends.",
      "Handled both design and front-end development for client projects, from first mock-up to live site.",
    ],
  },
  {
    role: "Web Designer",
    company: "Netscape India",
    period: "Sep 2015 – Mar 2016",
    points: [
      "Created website designs in Photoshop and converted them into responsive HTML5/CSS3 with Bootstrap.",
      "Updated and maintained existing client websites with layout changes and fixes.",
    ],
  },
  {
    role: "Web Designer",
    company: "Avis Technology",
    period: "May 2013 – Jul 2015",
    points: [
      "Started my career designing websites in Photoshop and hand-coding them into HTML/CSS layouts.",
      "Learned the full design-to-code workflow on websites for small businesses.",
    ],
  },
];

// `level` is a self-rated 0-100 confidence score shown as a progress bar — adjust freely.
export const skills = [
  {
    group: "Frontend Development",
    description: "React, Next.js and Angular — building fast, responsive interfaces from pixel-perfect designs.",
    level: 95,
    items: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Bootstrap 3–5"],
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
    items: ["Payload CMS", "WordPress", "HubSpot CMS", "Webflow", "Unbounce", "Elementor", "Divi"],
  },
  {
    group: "Design",
    description: "Turning Figma, XD and Photoshop files into code without losing the details.",
    level: 90,
    items: ["Figma", "Adobe XD", "Photoshop"],
  },
];
