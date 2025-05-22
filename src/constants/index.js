import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";

export const HEAD_CONTENT = `Welcome to my portfolio! I’m a proactive and adaptable designer with a passion for creating impactful user experiences. With strong technical skills in UI design, web development, and graphic design, I’m ready to take on complex projects and bring thoughtful leadership to any design team.`;

export const ABOUT_TEXT = ` I’m Tiana Daye, a designer passionate about creating user-centered solutions that enhance experiences and empower communities. With a blend of creativity and technical skills, I focus on developing accessible, intuitive designs that address diverse needs. My experience spans UI design, project management, and leadership, where I’ve learned to approach challenges with resilience and adaptability. In addition to designing and programming, I’m an active community advocate who enjoys event planning and the business aspect of design thinking. When I’m not working on design projects, you can find me organizing events or unwinding with a good show or movie. I’m excited to continue growing as a designer and contributing to meaningful, impactful solutions.`;

export const PROJECTS = [
  {
    title: "Nexus 360 LLC Website",
    image: project5, 
    description: 
      "Website for a finanical consulting company. Users can apply to use their services and book appointments all on the site.",
    technologies: ["GoHighLevel"], 
    link: "https://app.nexus360llc.com/",  
  },
  {
    title: "YoungCrafters Figma Prototype", 
    image: project6, 
    description: 
    "YoungCrafters is a mentorship platform designed to foster meaningful connections between mentors and mentees. Whether you're looking to build new relationships or bring your existing mentorship community onboard, YoungCrafters offers the tools you need. You can also integrate your current platform and seamlessly manage your data and users through our comprehensive services.", 
    technologies: ["Figma"], 
    link: "https://www.figma.com/proto/NRGckVAdEE614VZ8EehRoo/YoungCrafters?node-id=760-1549&t=MboiLJH7dlNl052g-1&scaling=scale-down&content-scaling=fixed&page-id=760%3A606&starting-point-node-id=760%3A611&show-proto-sidebar=1",

  },
  {
    title: "CLCC Website",
    image: project1,
    description:
      "A fully functional church website with various features provided by the church",
    technologies: ["HTML", "CSS", "React", "Node.js"],
    link: "https://www.clcconthemove.org/", 
  },
  {
    title: "Gyro Car Scheduling App",
    image: project2,
    description:
      "A webapp for short-term gyrocar rentals to pre-approved customers. Features include a robust monitoring system to track vehicle location, availability, and usage. Facilitated rentals, acquiring and documenting customer information and ensuring vehicle maintenance through location and usage tracking.",
    technologies: ["HTML", "CSS", "React", "Firebase", "Xcode", "Jira"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Graphic Design Projects",
    image: project4,
    description:
      "A collection of graphic design work over the course of the past few years.",
    technologies: ["Canva", "Adobe Premier Pro", "Adobe Illustrator", "Adobe Express"],
  },
];

export const WORK_EXPERIENCES = [
  {
    year: "Jan 2021 - Present",
    role: "Media Team Head",
    company: "Christian Life Center Church",
    description: `Develop and design engaging promotional materials, manage and enhance website content and performance, lead live streaming sessions to boost audience engagement, supervise and coordinate media team activities, and innovate and implement effective marketing strategies.`,
    technologies: ["HTML", "Adobe Illustrator", "Canva", "React.js", "CSS", "Wirecast"],
  },
  {
    year: "June 2023 - Aug 2023",
    role: "Summer Social Media & Marketing Fellow",
    company: "Breathe Deep",
    description: `Create, edit, and publish summer content, including videos, pictures, reels, and fliers, on all social media platforms such as Facebook, Twitter, TikTok, and Instagram to grow an audience, build brand awareness, and boost program attendance. Co-create and publish digital self-care tool kits and wellness content with youth interns. Assist in creating, writing, and managing all newsletter and blog content for social media and web platforms alongside the Marketing & Media Coordinator.`,
    technologies: ["Adobe Premier Pro", "Adobe Illustrator", "Canva", "React.js"],
  },
  {
    year: "Jan 2022 - Dec 2022",
    role: "Service Desk Representative",
    company: "Rochester Institute of Technology - ITS Support",
    description: `Provide direct support to clients seeking computer, networking, and software consulting services, using software tools to track service requests, create and modify computer accounts, and assist in resolving client issues. Provide effective, courteous, and timely responses to service requests and advise clients on ITS policies and procedures.`,
    technologies: ["ITS Software"],
  },
];

export const LEADERSHIP_EXPERIENCE = [
{
  year: "Aug 2022 - May 2024",
  role: "Publications Chair & Chapter Development Chair",
  organization: "National Society of Black Engineers",
  description: `I created promotional materials and facilitated connections between alumni members and undergraduates, helping to strengthen the network and support the chapter's growth.`,
  technologies: ["Canva", "Adobe Premier Pro", "Adobe Illustrator", "Mirosoft Office"],
}, 
{
  year: "Aug 2021 - May 2024",
  role: "President",
  organization: "The Black Thought Collective",
  description: `I ran the organization, hosting various events for the community. Additional I aided in the design of promotional materials`,
  technologies: ["Canva", "Adobe Premier Pro", "Adobe Illustrator", "Mirosoft Office", "Jira"],
}, 
{
  year: "Aug 2023 - May 2024",
  role: "Vice President",
  organization: "The Pi Beta Chapter of Delta Sigma Theta Soroity, Incorporated",
  description: `I coordinated community service and outreach initiatives, overseeing program planning to effectively engage and support the community.`,
  technologies: ["Canva", "Adobe Premier Pro", "Adobe Illustrator", "Adobe Photoshop"],
}, 
];

export const CONTACT = {
  phoneNo: "631-655-3881",
  email: "dayedtiana@gmail.com",
};
