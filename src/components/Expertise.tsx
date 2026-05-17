import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faMobileScreenButton,
    faStore
} from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const technologyIconMap: Record<string, string> = {
    "React.js": "https://cdn.simpleicons.org/react",
    JavaScript: "https://cdn.simpleicons.org/javascript",
    Redux: "https://cdn.simpleicons.org/redux",
    Axios: "https://cdn.simpleicons.org/axios",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
    Bootstrap: "https://cdn.simpleicons.org/bootstrap",
    Vite: "https://cdn.simpleicons.org/vite",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    TypeScript: "https://cdn.simpleicons.org/typescript",
    Vercel: "https://cdn.simpleicons.org/vercel/FFFFFF",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs",
    "Express.js": "https://cdn.simpleicons.org/express/FFFFFF",
    MongoDB: "https://cdn.simpleicons.org/mongodb",
    MySQL: "https://cdn.simpleicons.org/mysql",
    "Socket.io": "https://cdn.simpleicons.org/socketdotio/FFFFFF",
    NPM: "https://cdn.simpleicons.org/npm",
    Laravel: "https://cdn.simpleicons.org/laravel",
    PHP: "https://cdn.simpleicons.org/php",
    Python: "https://cdn.simpleicons.org/python",
    HTML5: "https://cdn.simpleicons.org/html5",
    CSS3: "https://cdn.simpleicons.org/css",
    WordPress: "https://cdn.simpleicons.org/wordpress",
    WooCommerce: "https://cdn.simpleicons.org/woocommerce",
    Elementor: "https://cdn.simpleicons.org/elementor",
    cPanel: "https://cdn.simpleicons.org/cpanel",
    Shopify: "https://cdn.simpleicons.org/shopify",
    Wix: "https://cdn.simpleicons.org/wix/FFFFFF",
    Flutter: "https://cdn.simpleicons.org/flutter",
    Dart: "https://cdn.simpleicons.org/dart",
    Firebase: "https://cdn.simpleicons.org/firebase",
    SQLite: "https://cdn.simpleicons.org/sqlite",
    Android: "https://cdn.simpleicons.org/android",
    iOS: "https://cdn.simpleicons.org/apple/FFFFFF",
    "React Native": "https://cdn.simpleicons.org/react",
    Expo: "https://cdn.simpleicons.org/expo/FFFFFF",
    Composer: "https://cdn.simpleicons.org/composer"
};

const expertiseSections = [
    {
        title: "Full Stack Development",
        icon: faCode,
        items: [
            {
                title: "React.js Development",
                description:
                    "Building responsive and interactive single-page applications using React.js. Experienced in component-based architecture, reusable UI development, state management, API integrations, and creating fast, scalable, and modern frontend experiences for web applications.",
                technologies: [
                    "React.js",
                    "JavaScript",
                    "Redux",
                    "Axios",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Vite"
                ],
                stack: [
                    "JavaScript",
                    "JSX",
                    "Redux",
                    "Context API",
                    "Axios",
                    "Tailwind CSS",
                    "Bootstrap",
                    "REST APIs",
                    "Vite",
                    "Responsive Design"
                ]
            },
            {
                title: "Next.js Development",
                description:
                    "Developing high-performance web applications using Next.js with server-side rendering and static site generation. Skilled in optimized routing, SEO-friendly architecture, API handling, dynamic rendering, and building scalable production-ready React applications.",
                technologies: [
                    "Next.js",
                    "React.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Vercel"
                ],
                stack: [
                    "Next.js",
                    "React.js",
                    "TypeScript",
                    "SSR",
                    "SSG",
                    "API Routes",
                    "Tailwind CSS",
                    "SEO Optimization",
                    "Middleware",
                    "Vercel"
                ]
            },
            {
                title: "Node.js Development",
                description:
                    "Creating secure and scalable backend applications using Node.js. Experienced in asynchronous programming, RESTful API development, authentication systems, database integration, and handling high-performance server-side application architecture for modern platforms.",
                technologies: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "MySQL",
                    "Socket.io",
                    "NPM"
                ],
                stack: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "MySQL",
                    "JWT Authentication",
                    "REST APIs",
                    "Socket.io",
                    "Middleware",
                    "NPM",
                    "MVC Architecture"
                ]
            },
            {
                title: "Blade PHP Development",
                description:
                    "Building dynamic and responsive web interfaces using Laravel Blade templating engine. Skilled in reusable layouts, component-based frontend rendering, template inheritance, form handling, and integrating backend logic with clean user interface structures.",
                technologies: [
                    "Laravel",
                    "PHP",
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "JavaScript"
                ],
                stack: [
                    "Blade PHP",
                    "Laravel",
                    "HTML5",
                    "CSS3",
                    "Bootstrap",
                    "Template Inheritance",
                    "Components",
                    "Forms",
                    "JavaScript",
                    "Responsive Design"
                ]
            },
            {
                title: "Laravel Development",
                description:
                    "Developing robust and secure web applications using Laravel framework. Experienced in MVC architecture, authentication systems, API development, database management, queue handling, and creating scalable backend solutions for business applications.",
                technologies: [
                    "Laravel",
                    "PHP",
                    "MySQL",
                    "Composer"
                ],
                stack: [
                    "Laravel",
                    "PHP",
                    "MySQL",
                    "Eloquent ORM",
                    "REST APIs",
                    "Authentication",
                    "Queues",
                    "MVC Architecture",
                    "Composer",
                    "Artisan CLI"
                ]
            },
            {
                title: "Python Development",
                description:
                    "Building scalable backend solutions and automation workflows using Python. Skilled in clean scripting, API integrations, object-oriented programming, data handling, and developing efficient server-side functionality for modern web and business applications.",
                technologies: ["Python"],
                stack: [
                    "Python",
                    "Django",
                    "Flask",
                    "REST APIs",
                    "Automation",
                    "Scripting",
                    "OOP",
                    "SQLite",
                    "Pandas",
                    "JSON Handling"
                ]
            }
        ]
    },
    {
        title: "No-Code Development",
        icon: faStore,
        items: [
            {
                title: "WordPress Development",
                description:
                    "Creating custom WordPress websites with responsive layouts and advanced functionality. Skilled in theme customization, plugin integration, WooCommerce setup, SEO optimization, and building scalable business websites tailored to client requirements.",
                technologies: [
                    "WordPress",
                    "WooCommerce",
                    "Elementor",
                    "cPanel"
                ],
                stack: [
                    "WordPress",
                    "WooCommerce",
                    "Elementor",
                    "Custom Themes",
                    "Plugin Development",
                    "SEO Optimization",
                    "cPanel",
                    "ACF",
                    "WPBakery",
                    "Contact Forms"
                ]
            },
            {
                title: "Shopify Development",
                description:
                    "Building modern and conversion-focused e-commerce stores using Shopify. Experienced in store customization, payment gateway integration, product management, responsive storefront design, and optimizing online shopping experiences for growing businesses.",
                technologies: [
                    "Shopify",
                    "HTML5",
                    "CSS3",
                    "JavaScript"
                ],
                stack: [
                    "Shopify",
                    "Liquid",
                    "Shopify Apps",
                    "Store Customization",
                    "Payment Integration",
                    "Product Management",
                    "SEO",
                    "Responsive Design",
                    "Checkout Setup",
                    "Analytics"
                ]
            },
            {
                title: "Wix Development",
                description:
                    "Designing professional business websites using Wix with modern layouts and interactive sections. Skilled in drag-and-drop customization, mobile optimization, booking systems, and creating user-friendly websites with fast deployment workflows.",
                technologies: [
                    "Wix",
                    "HTML5",
                    "CSS3",
                    "JavaScript"
                ],
                stack: [
                    "Wix",
                    "Wix Editor",
                    "Velo",
                    "Booking System",
                    "Responsive Design",
                    "SEO Tools",
                    "CMS Collections",
                    "Forms",
                    "Animations",
                    "Landing Pages"
                ]
            }
        ]
    },
    {
        title: "Mobile App Development",
        hidden: true,
        icon: faMobileScreenButton,
        items: [
            {
                title: "Flutter Development",
                description:
                    "Developing cross-platform mobile applications using Flutter with smooth performance and modern UI design. Experienced in state management, API integrations, reusable widgets, and building scalable applications for Android and iOS devices.",
                technologies: [
                    "Flutter",
                    "Dart",
                    "Firebase",
                    "SQLite",
                    "Android",
                    "iOS"
                ],
                stack: [
                    "Flutter",
                    "Dart",
                    "Firebase",
                    "REST APIs",
                    "Provider",
                    "GetX",
                    "SQLite",
                    "Push Notifications",
                    "Android",
                    "iOS"
                ]
            },
            {
                title: "React Native Development",
                description:
                    "Building fast and responsive mobile applications using React Native. Skilled in reusable component architecture, third-party integrations, real-time features, and delivering native-like experiences across Android and iOS platforms.",
                technologies: [
                    "React Native",
                    "JavaScript",
                    "Expo",
                    "Redux",
                    "Firebase",
                    "Android",
                    "iOS"
                ],
                stack: [
                    "React Native",
                    "JavaScript",
                    "Expo",
                    "Redux",
                    "Firebase",
                    "REST APIs",
                    "Push Notifications",
                    "AsyncStorage",
                    "Android",
                    "iOS"
                ]
            }
        ]
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="expertise-sections">
                    {expertiseSections.filter((section) => !section.hidden).map((section) => (
                        <section className="expertise-section" key={section.title}>
                            <div className="expertise-section-header">
                                <FontAwesomeIcon icon={section.icon} size="2x" />
                                <h2>{section.title}</h2>
                            </div>

                            <div className="skills-grid">
                                {section.items.map((item) => (
                                    <div className="skill" key={item.title}>
                                        <div className="skill-title-row">
                                            <div
                                                className="technology-icon skill-title-icon"
                                                title={item.technologies[0]}
                                            >
                                                <img
                                                    src={technologyIconMap[item.technologies[0]]}
                                                    alt={`${item.technologies[0]} icon`}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <h3>{item.title}</h3>
                                        </div>
                                        <p>{item.description}</p>
                                        <div className="flex-chips">
                                            {item.stack.map((label) => (
                                                <Chip key={label} className="chip" label={label} />
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;
