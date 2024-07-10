import { motion } from "framer-motion";
import TextSpan from "../../components/TextSpan";
import useAnimationHook from "../../components/useAnimationHook";
import ResumeButton from "../../components/ResumeButton";
function Heroabout() {
  const controls = useAnimationHook();

  const header = "Hello, I'm".split("");
  const sentence = "Brian Azukaeme".split("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
    >
      <span className="text-primary dark:text-gray font-[700] leading-[64px] text-[48px]">
        {header.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </span>

      <p className="name font-[700] leading-[64px] text-[48px] dark:text-white">
        {sentence.map((letter, index) => {
          return (
            <TextSpan key={index}>
              {letter === " " ? "\u00A0" : letter}
            </TextSpan>
          );
        })}
      </p>

      <p className="text-[16px] leading-[26px] text-para dark:text-gray h-[192px] word-break mt-[24px] w-[500px]">
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

      <div className="mt-[60px]">
        <ResumeButton />
      </div>
    </motion.div>
  );
}

export default Heroabout;
