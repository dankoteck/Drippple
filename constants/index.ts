export const navLinks = [
  { href: "/", key: "Inspiration", text: "Inspiration" },
  { href: "/", key: "Find Talents", text: "Find Talents" },
  { href: "/", key: "Learn design", text: "Learn design" },
  { href: "/", key: "For designers", text: "For designers" },
  { href: "/", key: "Go Pro", text: "Go Pro", isPrimary: true },
  { href: "/login", key: "Log in", text: "Log in", isDivided: true },
];

export const categories = [
  {
    href: "/",
    key: "Discover",
    text: "Discover",
    videoURL:
      "https://cdn.dribbble.com/uploads/39417/original/49dbf46eae15d227fc95a69cee31251e.mp4?1657824906",
  },
  {
    href: "/",
    key: "Animation",
    text: "Animation",
    videoURL:
      "https://cdn.dribbble.com/uploads/39483/original/631d737e0967ac410b82b31c2dfc247f.mp4?1657906790",
  },
  {
    href: "/",
    key: "Branding",
    text: "Branding",
    videoURL:
      "https://cdn.dribbble.com/uploads/39495/original/eaad29a55c94ee5634e0e89735e8e043.mp4?1657908150",
  },
  {
    href: "/",
    key: "Illustration",
    text: "Illustration",
    videoURL:
      "https://cdn.dribbble.com/uploads/39498/original/f1763414d2ae2fc518ed368cff6e5a4e.mp4?1657909932",
  },
  {
    href: "/",
    key: "Mobile",
    text: "Mobile",
    videoURL:
      "https://cdn.dribbble.com/uploads/39510/original/820260ec84c9a17acc2f34668d932adf.mp4?1657910724",
  },
  {
    href: "/",
    key: "Print",
    text: "Print",
    videoURL:
      "https://cdn.dribbble.com/uploads/39514/original/7e02a5e8ad22442447636a5f152185ca.mp4?1657912061",
  },
  {
    href: "/",
    key: "Product Design",
    text: "Product Design",
    videoURL:
      "https://cdn.dribbble.com/uploads/39528/original/6e8074c4feefde86da9f547a0c0e2172.mp4?1657913143",
  },
  {
    href: "/",
    key: "Typography",
    text: "Typography",
    videoURL:
      "https://cdn.dribbble.com/uploads/39534/original/32eb117875f793069fb53fa6a67aa5dc.mp4?1657913912",
  },
  {
    href: "/",
    key: "Web Design",
    text: "Web Design",
    videoURL:
      "https://cdn.dribbble.com/uploads/39544/original/d63f186e51cbd4aeae35def9081bdef1.mp4?1657914462",
  },
];

export const trendingSearches = [
  { href: "/landing-page", key: "landing page", text: "landing page" },
  { href: "/ios", key: "ios", text: "ios" },
  { href: "/food", key: "food", text: "food" },
  { href: "/uxdesign", key: "uxdesign", text: "uxdesign" },
  { href: "/app-design", key: "app design", text: "app design" },
  { href: "/web-development", key: "web development", text: "web development" },
];

export const footerLinks = [
  {
    title: "For developers",
    links: [
      "Go Pro!",
      "Explore development work",
      "Development blog",
      "Code podcast",
      "Open-source projects",
      "Refer a Friend",
      "Code of conduct",
    ],
  },
  {
    title: "Hire developers",
    links: [
      "Post a job opening",
      "Post a freelance project",
      "Search for developers",
    ],
  },
  {
    title: "Brands",
    links: ["Advertise with us"],
  },
  {
    title: "Company",
    links: [
      "About",
      "Careers",
      "Support",
      "Media kit",
      "Testimonials",
      "API",
      "Terms of service",
      "Privacy policy",
      "Cookie policy",
    ],
  },
  {
    title: "Directories",
    links: [
      "Development jobs",
      "Developers for hire",
      "Freelance developers for hire",
      "Tags",
      "Places",
    ],
  },
  {
    title: "Development assets",
    links: [
      "Code Marketplace",
      "GitHub Marketplace",
      "NPM Registry",
      "Packagephobia",
    ],
  },
  {
    title: "Development Resources",
    links: [
      "Freelancing",
      "Development Hiring",
      "Development Portfolio",
      "Development Education",
      "Creative Process",
      "Development Industry Trends",
    ],
  },
];

export const filterViews = [
  {
    title: "Popular",
    value: "popular",
  },
  {
    title: "New & Noteworthy",
    value: "new",
  },
  {
    title: "Marketplace",
    value: "marketplace",
  },
];

const isProduction = process.env.NODE_ENV === "production";
export const apiURL = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_URL
  : "http://127.0.0.1:4000/graphql";
export const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAFBASE_API_KEY
  : "letmein";
export const serverURL = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";
