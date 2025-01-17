import React from "react";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";
import ResumeButton from "../../components/ResumeButton";

function MobileAbout() {
  const controls = useAnimationHook();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className="mt-[32px] h-[65vh] md:h-[72vh] flex flex-col items-center justify-center"
    >
      <div className="text-center grid items-center justify-center place-items-center">
        <div className="grid items-center justify-center text-center font-[700] leading-[30px] md:leading-[50px] text-[24px] md:text-[35px]">
          <span className="text-primary dark:text-gray">Hello, I'm</span>
          <span className="name dark:text-white">Brian Azukaeme</span>
        </div>

        <p className="m-5 text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-para dark:text-gray word-break mt-[24px] md:w-3/5 whitespace-no-wrap">
          I am a{" "}
          <span className="text-secondary font-bold dark:text-white">
            {" "}
            Frontend developer(FE) and WordPress support(WP) specialist{" "}
          </span>{" "}
          I have a strong background in creating visually appealing and{" "}
          <span className="y font-bold dark:text-white">
            {" "}
            user-friendly web experiences. My experience includes{" "}
            <span className="text-secondary font-bold dark:text-white">
              {" "}
              customizing WordPress themes and plugins
            </span>{" "}
            , optimizing website performance, and delivering top-tier technical
            support
          </span>{" "}
          I am motivated to find a role where I can challenge myself{" "}
          <span className="text-secondary font-bold dark:text-white">
            and provide value to website users.
          </span>{" "}
          I am excited to bring my knowledge and experience to a team and
          contribute to a company's success.
        </p>
      </div>

      <div className="mt-[10%] md:mt-[2%] flex justify-center items-center">
        <ResumeButton />
      </div>
    </motion.div>
  );
}

export default MobileAbout;
