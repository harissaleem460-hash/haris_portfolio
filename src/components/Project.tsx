import React from "react";
import "../assets/styles/Project.scss";

type ProjectTheme =
  | "commerce"
  | "digital"
  | "finance"
  | "realestate"
  | "software"
  | "hiring"
  | "healthcare"
  | "sports"
  | "branding"
  | "hr"
  | "social"
  | "architecture";

interface ProjectItem {
  name: string;
  url: string;
  industry: string;
  technology: string;
  theme: ProjectTheme;
}

interface ThemePalette {
  bg: string;
  mid: string;
  accent: string;
  highlight: string;
}

const recentProjects: ProjectItem[] = [
  {
    name: "Threads by Hira",
    url: "https://threadsbyhira.com/",
    industry: "E-Commerce",
    technology: "WordPress - Custom Theme",
    theme: "commerce",
  },
  {
    name: "Prosperiq Media",
    url: "https://prosperiqmedia.com/",
    industry: "Digital Platform",
    technology: "WordPress - Standard Theme",
    theme: "digital",
  },
  {
    name: "BSA Audits",
    url: "https://abacco.ae/",
    industry: "Auditing Firm",
    technology: "WordPress - Custom Theme",
    theme: "finance",
  },
  {
    name: "Florence Apartments",
    url: "https://showmeflorence.com/",
    industry: "Rental Apartments",
    technology: "WordPress - Standard Theme",
    theme: "realestate",
  },
  {
    name: "Marketing Agency",
    url: "https://thetopnotchdesigns.com/",
    industry: "Digital Platform",
    technology: "WordPress - Theme + Plugins",
    theme: "digital",
  },
  {
    name: "Code Dev",
    url: "https://codedev.sa/en/",
    industry: "Software House",
    technology: "WordPress - Theme + Plugins",
    theme: "software",
  },
  {
    name: "Staff Hiring Company",
    url: "https://zeniststaffing.com/",
    industry: "Hiring Agency",
    technology: "WordPress - Theme + Plugins",
    theme: "hiring",
  },
  {
    name: "Medicle Website",
    url: "https://britishliedetectortest.co.uk/",
    industry: "Health Care",
    technology: "WordPress - Custom Theme",
    theme: "healthcare",
  },
  {
    name: "Radab",
    url: "https://radabstore.com/",
    industry: "E-Commerce",
    technology: "WordPress - Custom Theme",
    theme: "commerce",
  },
  {
    name: "Quick Tech",
    url: "https://quickers.tech/",
    industry: "Software House",
    technology: "WordPress - Custom Plugin",
    theme: "software",
  },
  {
    name: "Lucentum Team",
    url: "https://lucentumbasket.com/",
    industry: "Sports Web/App",
    technology: "WordPress - Custom Plugin",
    theme: "sports",
  },
  {
    name: "Lexorient",
    url: "https://lexorient.pro/",
    industry: "Branding Agency",
    technology: "WordPress - Standard Theme",
    theme: "branding",
  },
  {
    name: "Skill Nova",
    url: "https://skillnova.ai/",
    industry: "HR Management Agency",
    technology: "WordPress - Standard Theme",
    theme: "hr",
  },
  {
    name: "Saberes y Sabores",
    url: "https://app.quickers.es/",
    industry: "Social Agency",
    technology: "React + Laravel",
    theme: "social",
  },
  {
    name: "Quick Tech",
    url: "https://testapp.quickers.tech/",
    industry: "Software House",
    technology: "React + Laravel",
    theme: "software",
  },
  {
    name: "Lucentum Team",
    url: "https://dashboardtest.lucentumbasket.com/",
    industry: "Sports Web/App",
    technology: "React + Laravel",
    theme: "sports",
  },
  {
    name: "Bimax Architects",
    url: "https://app.bimaxvisuals.com/",
    industry: "Architects Web/App",
    technology: "React + Laravel",
    theme: "architecture",
  },
];

const themePalettes: Record<ProjectTheme, ThemePalette> = {
  commerce: { bg: "#1F1D3A", mid: "#5C3BFE", accent: "#2DD4BF", highlight: "#F59E0B" },
  digital: { bg: "#0F172A", mid: "#2563EB", accent: "#A855F7", highlight: "#22D3EE" },
  finance: { bg: "#0B1220", mid: "#14532D", accent: "#34D399", highlight: "#93C5FD" },
  realestate: { bg: "#1E293B", mid: "#64748B", accent: "#F59E0B", highlight: "#FCA5A5" },
  software: { bg: "#020617", mid: "#1D4ED8", accent: "#06B6D4", highlight: "#A78BFA" },
  hiring: { bg: "#111827", mid: "#EA580C", accent: "#14B8A6", highlight: "#FDE047" },
  healthcare: { bg: "#0F172A", mid: "#EF4444", accent: "#22C55E", highlight: "#86EFAC" },
  sports: { bg: "#172554", mid: "#DB2777", accent: "#F59E0B", highlight: "#FDE68A" },
  branding: { bg: "#1E1B4B", mid: "#7C3AED", accent: "#EC4899", highlight: "#67E8F9" },
  hr: { bg: "#0B1120", mid: "#0EA5E9", accent: "#6366F1", highlight: "#5EEAD4" },
  social: { bg: "#111827", mid: "#8B5CF6", accent: "#F472B6", highlight: "#F9A8D4" },
  architecture: { bg: "#0F172A", mid: "#0891B2", accent: "#22D3EE", highlight: "#93C5FD" },
};

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

const buildThemeMotif = (theme: ProjectTheme, palette: ThemePalette): string => {
  switch (theme) {
    case "commerce":
      return `
        <rect x="1040" y="220" width="410" height="470" rx="34" fill="${palette.mid}" opacity="0.45" />
        <path d="M1140 330 C1140 255 1350 255 1350 330" fill="none" stroke="${palette.highlight}" stroke-width="22" stroke-linecap="round" />
        <rect x="260" y="300" width="620" height="360" rx="24" fill="#0B1020" opacity="0.55" />
        <rect x="320" y="360" width="180" height="120" rx="14" fill="${palette.accent}" opacity="0.7" />
        <rect x="540" y="360" width="280" height="120" rx="14" fill="${palette.highlight}" opacity="0.65" />
        <rect x="320" y="510" width="500" height="90" rx="14" fill="#FFFFFF" opacity="0.18" />
      `;
    case "digital":
      return `
        <line x1="340" y1="310" x2="740" y2="430" stroke="${palette.highlight}" stroke-width="8" opacity="0.7" />
        <line x1="740" y1="430" x2="1190" y2="320" stroke="${palette.highlight}" stroke-width="8" opacity="0.7" />
        <line x1="740" y1="430" x2="1270" y2="560" stroke="${palette.accent}" stroke-width="8" opacity="0.65" />
        <circle cx="340" cy="310" r="70" fill="${palette.mid}" opacity="0.85" />
        <circle cx="740" cy="430" r="92" fill="${palette.accent}" opacity="0.8" />
        <circle cx="1190" cy="320" r="64" fill="${palette.highlight}" opacity="0.85" />
        <circle cx="1270" cy="560" r="52" fill="#FFFFFF" opacity="0.35" />
      `;
    case "finance":
      return `
        <rect x="250" y="540" width="110" height="150" rx="10" fill="${palette.highlight}" opacity="0.85" />
        <rect x="400" y="460" width="110" height="230" rx="10" fill="${palette.accent}" opacity="0.85" />
        <rect x="550" y="390" width="110" height="300" rx="10" fill="${palette.mid}" opacity="0.9" />
        <path d="M1120 250 L1370 330 L1370 510 C1370 660 1240 740 1120 804 C1000 740 870 660 870 510 L870 330 Z" fill="${palette.mid}" opacity="0.55" />
        <path d="M1020 515 L1090 585 L1220 455" fill="none" stroke="${palette.highlight}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
      `;
    case "realestate":
      return `
        <rect x="250" y="240" width="240" height="520" rx="12" fill="${palette.mid}" opacity="0.65" />
        <rect x="520" y="320" width="210" height="440" rx="12" fill="${palette.accent}" opacity="0.55" />
        <rect x="760" y="270" width="270" height="490" rx="12" fill="${palette.highlight}" opacity="0.45" />
        <rect x="1060" y="360" width="210" height="400" rx="12" fill="#FFFFFF" opacity="0.24" />
        <rect x="1085" y="410" width="50" height="50" fill="#0F172A" opacity="0.55" />
        <rect x="1160" y="410" width="50" height="50" fill="#0F172A" opacity="0.55" />
        <rect x="1085" y="490" width="50" height="50" fill="#0F172A" opacity="0.55" />
        <rect x="1160" y="490" width="50" height="50" fill="#0F172A" opacity="0.55" />
      `;
    case "software":
      return `
        <rect x="240" y="260" width="1260" height="520" rx="30" fill="#030712" opacity="0.55" />
        <circle cx="300" cy="320" r="14" fill="#EF4444" />
        <circle cx="340" cy="320" r="14" fill="#F59E0B" />
        <circle cx="380" cy="320" r="14" fill="#22C55E" />
        <polyline points="560,430 470,520 560,610" fill="none" stroke="${palette.accent}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
        <line x1="680" y1="640" x2="820" y2="400" stroke="${palette.highlight}" stroke-width="24" stroke-linecap="round" />
        <polyline points="940,430 1030,520 940,610" fill="none" stroke="${palette.accent}" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" />
        <rect x="1110" y="430" width="240" height="44" rx="12" fill="${palette.mid}" opacity="0.8" />
        <rect x="1110" y="500" width="180" height="44" rx="12" fill="#FFFFFF" opacity="0.26" />
      `;
    case "hiring":
      return `
        <circle cx="460" cy="410" r="74" fill="${palette.highlight}" opacity="0.9" />
        <circle cx="660" cy="390" r="88" fill="${palette.mid}" opacity="0.78" />
        <circle cx="890" cy="410" r="74" fill="${palette.accent}" opacity="0.88" />
        <rect x="390" y="500" width="140" height="180" rx="64" fill="#FFFFFF" opacity="0.25" />
        <rect x="570" y="500" width="180" height="220" rx="84" fill="#FFFFFF" opacity="0.25" />
        <rect x="820" y="500" width="140" height="180" rx="64" fill="#FFFFFF" opacity="0.25" />
        <circle cx="1250" cy="500" r="145" fill="${palette.mid}" opacity="0.6" />
        <path d="M1165 510 L1235 580 L1350 450" fill="none" stroke="${palette.highlight}" stroke-width="26" stroke-linecap="round" stroke-linejoin="round" />
      `;
    case "healthcare":
      return `
        <rect x="1090" y="260" width="340" height="420" rx="40" fill="#FFFFFF" opacity="0.18" />
        <rect x="1220" y="340" width="80" height="260" rx="20" fill="${palette.mid}" />
        <rect x="1130" y="430" width="260" height="80" rx="20" fill="${palette.mid}" />
        <polyline points="280,570 420,570 500,470 590,650 700,520 830,520 930,420 1050,420" fill="none" stroke="${palette.accent}" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="930" cy="420" r="24" fill="${palette.highlight}" />
      `;
    case "sports":
      return `
        <circle cx="520" cy="500" r="230" fill="${palette.accent}" opacity="0.88" />
        <path d="M360 420 C460 380 580 380 680 420" fill="none" stroke="#0F172A" stroke-width="12" opacity="0.8" />
        <path d="M360 580 C460 620 580 620 680 580" fill="none" stroke="#0F172A" stroke-width="12" opacity="0.8" />
        <path d="M520 270 C560 380 560 620 520 730" fill="none" stroke="#0F172A" stroke-width="12" opacity="0.8" />
        <rect x="930" y="330" width="480" height="300" rx="20" fill="#0F172A" opacity="0.45" />
        <polyline points="980,580 1100,510 1210,540 1320,420" fill="none" stroke="${palette.highlight}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="1320" cy="420" r="20" fill="${palette.highlight}" />
      `;
    case "branding":
      return `
        <circle cx="420" cy="410" r="170" fill="${palette.highlight}" opacity="0.85" />
        <circle cx="620" cy="520" r="200" fill="${palette.accent}" opacity="0.82" />
        <circle cx="860" cy="420" r="160" fill="${palette.mid}" opacity="0.78" />
        <path d="M1120 300 L1360 540 L1240 660 L1000 420 Z" fill="#FFFFFF" opacity="0.26" />
        <circle cx="1200" cy="500" r="22" fill="${palette.bg}" opacity="0.7" />
      `;
    case "hr":
      return `
        <rect x="760" y="270" width="190" height="100" rx="16" fill="${palette.mid}" opacity="0.9" />
        <line x1="855" y1="370" x2="855" y2="470" stroke="${palette.highlight}" stroke-width="12" />
        <line x1="500" y1="470" x2="1210" y2="470" stroke="${palette.highlight}" stroke-width="12" />
        <line x1="500" y1="470" x2="500" y2="610" stroke="${palette.highlight}" stroke-width="12" />
        <line x1="855" y1="470" x2="855" y2="610" stroke="${palette.highlight}" stroke-width="12" />
        <line x1="1210" y1="470" x2="1210" y2="610" stroke="${palette.highlight}" stroke-width="12" />
        <rect x="390" y="610" width="220" height="120" rx="16" fill="${palette.accent}" opacity="0.86" />
        <rect x="745" y="610" width="220" height="120" rx="16" fill="${palette.mid}" opacity="0.82" />
        <rect x="1100" y="610" width="220" height="120" rx="16" fill="${palette.accent}" opacity="0.86" />
      `;
    case "social":
      return `
        <rect x="280" y="320" width="520" height="280" rx="36" fill="${palette.mid}" opacity="0.72" />
        <path d="M420 600 L520 690 L520 600 Z" fill="${palette.mid}" opacity="0.72" />
        <rect x="860" y="360" width="520" height="260" rx="36" fill="${palette.accent}" opacity="0.75" />
        <path d="M1120 620 L1200 700 L1200 620 Z" fill="${palette.accent}" opacity="0.75" />
        <path d="M1070 520 C1070 450 1160 440 1210 500 C1260 440 1350 450 1350 520 C1350 590 1210 690 1210 690 C1210 690 1070 590 1070 520 Z" fill="${palette.highlight}" opacity="0.95" />
      `;
    case "architecture":
      return `
        <rect x="240" y="260" width="1260" height="520" rx="24" fill="#0B1220" opacity="0.52" />
        <line x1="260" y1="340" x2="1480" y2="340" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="260" y1="430" x2="1480" y2="430" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="260" y1="520" x2="1480" y2="520" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="260" y1="610" x2="1480" y2="610" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="430" y1="280" x2="430" y2="760" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="690" y1="280" x2="690" y2="760" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="950" y1="280" x2="950" y2="760" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <line x1="1210" y1="280" x2="1210" y2="760" stroke="${palette.highlight}" stroke-width="4" opacity="0.7" />
        <rect x="920" y="390" width="360" height="250" rx="8" fill="${palette.accent}" opacity="0.32" />
      `;
    default:
      return "";
  }
};

const createProjectArt = (project: ProjectItem): string => {
  const palette = themePalettes[project.theme];
  const safeName = escapeXml(project.name.toUpperCase());
  const safeIndustry = escapeXml(project.industry);
  const safeTechnology = escapeXml(project.technology);
  const motif = buildThemeMotif(project.theme, palette);

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1700" height="1120" viewBox="0 0 1700 1120">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${palette.bg}" />
          <stop offset="60%" stop-color="${palette.mid}" />
          <stop offset="100%" stop-color="#020617" />
        </linearGradient>
        <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="${palette.accent}" />
          <stop offset="100%" stop-color="${palette.highlight}" />
        </linearGradient>
        <linearGradient id="panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#111827" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#020617" stop-opacity="0.9" />
        </linearGradient>
      </defs>

      <rect width="1700" height="1120" fill="url(#bg)" />
      <path d="M0 900 C250 760 480 980 760 860 C1040 740 1260 910 1700 640 L1700 1120 L0 1120 Z" fill="url(#ribbon)" opacity="0.45" />
      <circle cx="1380" cy="180" r="170" fill="${palette.highlight}" opacity="0.18" />
      <circle cx="260" cy="220" r="120" fill="${palette.accent}" opacity="0.16" />

      ${motif}

      <rect x="86" y="804" width="1528" height="250" rx="20" fill="url(#panel)" />
      <text x="130" y="890" fill="#FFFFFF" font-size="84" font-weight="700" font-family="Lato, Arial, sans-serif">${safeName}</text>
      <text x="130" y="950" fill="#E2E8F0" font-size="42" font-family="Lato, Arial, sans-serif">Industry: ${safeIndustry}</text>
      <text x="130" y="1008" fill="#E2E8F0" font-size="42" font-family="Lato, Arial, sans-serif">Technology: ${safeTechnology}</text>
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const projectsWithArt = recentProjects.map((project) => ({
  ...project,
  image: createProjectArt(project),
}));

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Recent Projects</h1>
      <div className="projects-grid">
        {projectsWithArt.map((project) => (
          <div className="project" key={`${project.name}-${project.url}`}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                className="zoom"
                alt={`${project.name} AI generated cover`}
                width="100%"
                loading="lazy"
              />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              <h2>{project.name}</h2>
            </a>
            <p>
              <strong>Industry:</strong> {project.industry}
            </p>
            <p>
              <strong>Technology:</strong> {project.technology}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
