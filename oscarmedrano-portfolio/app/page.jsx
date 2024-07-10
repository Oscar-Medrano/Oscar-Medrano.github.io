import { Button } from "@/components/ui/button";
import { FiDownloadCloud } from "react-icons/fi";

const Home = () => {
  return <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/*text*/}
        <div className="text-center xl:text-left">
          <span className="text-xl">Full-Stack Developer</span>
          <h1 className="h1 mb-7">
            <span>Oscar Medrano</span>
          </h1>
          <p className="max-w-[500px] mb-10 text-white/80">
            Certified Software Developer with practical experience in JavaScript and Python. 
            Skilled in building web applications using frameworks like Vite, Vue, and Next.js. 
            Proficient in database development and experienced in collaborative development using GitHub.
          </p>
        </div>
        {/*photo*/}
        <div></div>
      </div>
    </div>
  </section>
};

export default Home;