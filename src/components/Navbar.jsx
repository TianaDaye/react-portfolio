import logo from "../assets/logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className=' mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-10" src={logo} alt='logo'/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/tiana-daye-627982191/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          >
          
          <FaLinkedin/>
        </a>
        <a
          href="https://github.com/TianaDaye"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub/>
        </a>
        <FaInstagram/>
    </div>
  </nav>
  );
};

export default Navbar