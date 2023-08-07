import { logo } from "../assets";
import { FaGithub } from "react-icons/fa";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center flex-column w-full mb-10 pt-3">
        <div>
          <img src={logo} alt="BriefAI logo" className="w-28 object-contain" />
          <h1 className="text-black hover:text-blue-600 font-extrabold text-3xl">
            Brief AI
          </h1>
        </div>
        <FaGithub
          className="text-4xl w-8 h-8 cursor-pointer"
          onClick={() => window.open("https://github.com/Sayakdutt/Open-AI-Article-Summarizer", "_blank")}
        />
      </nav>
      <h1 className="head_text">
        Summarize Article with
        <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with BriefAI, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
