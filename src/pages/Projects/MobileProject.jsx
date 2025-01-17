import React from "react";
import Projects from "./Projects";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";

function MobileProject() {
  const controls = useAnimationHook();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className="mt-[32px]"
    >
      <div className="text-center grid items-center justify-center place-items-center">
        <span className="text-secondary dark:text-white font-[700] leading-[30px] md:leading-[50px] text-[24px] md:text-[35px]">
          <p className="text-primary dark:text-gray">I love working on fun</p>{" "}
          Projects
        </span>

        <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-para dark:text-gray word-break mt-[24px] md:w-[550px] w-[350px] whitespace-no-wrap">
          In my free time, I enjoy{" "}
          <span className="text-secondary dark:text-white font-bold">
            experimenting
          </span>{" "}
          with and building things that I find personally{" "}
          <span className="text-secondary dark:text-white font-bold">
            interesting
          </span>{" "}
          or{" "}
          <span className="text-secondary dark:text-white font-bold">
            solving WordPress issues.
          </span>{" "}
          A few examples of these projects can be found on my{" "}
          <span className="text-secondary dark:text-white font-bold">
            GitHub page,
          </span>{" "}
          where you can also find other{" "}
          <span className="text-secondary dark:text-white font-bold">
            miscellaneous creations
          </span>{" "}
          I have worked on.
        </p>

        <div className="mt-[28px] flex items-center justify-center">
          <a
            href="https://github.com/madfury94"
            target="_blank"
            className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold"
          >
            <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-[6px] translate-x-[6px] transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white text-resume"></span>
            <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
              View Github
            </span>
          </a>
        </div>
      </div>
      <div className="mt-[46px]">
        <Projects />
      </div>
    </motion.div>
  );
}

export default MobileProject;
