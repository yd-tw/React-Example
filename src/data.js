// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/IMG_20190302_081237.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "yd-tw";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "我是YD，一位來自台灣的高中生。" +
  "這是我自己建立的網站，來分享我所創建的各種專案、社群。" +
  "希望能對社會有所貢獻，因此全部專案都是開源的" +
  "另外我也撰寫各種教學文章，期待能和大家一起學習進步。";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="vscode-icons:file-type-vscode" className="display-4" />,
    name: "Vscode",
  },
  {
    id: 2,
    skill: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 3,
    skill: <Icon icon="skill-icons:github-dark" className="display-4" />,
    name: "Github",
  },
  {
    id: 4,
    skill: <Icon icon="vscode-icons:file-type-cpp3" className="display-4" />,
    name: "C++",
  },
  {
    id: 5,
    skill: <Icon icon="skill-icons:arduino" className="display-4" />,
    name: "Arduino",
  },
  {
    id: 6,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 7,
    skill: <Icon icon="logos:java" className="display-4" />,
    name: "Java",
  },
  {
    id: 8,
    skill: <Icon icon="logos:react" className="display-4" />,
    name: "React",
  },
  {
    id: 9,
    skill: <Icon icon="devicon:kotlin" className="display-4" />,
    name: "Kotlin",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";
