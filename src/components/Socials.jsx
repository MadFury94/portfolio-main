import React from "react";
import {
  FaTiktok,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaShareAlt,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { motion } from "framer-motion";
import { FloatButton } from "antd";
const Socials = () => {
  const socialcontainer = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="grid lg:justify-start justify-center  lg:items-start items-center">
      <FloatButton.Group
        trigger="click"
        type="default"
        icon={<FaShareAlt />}
        className="mx-3"
      >
        <motion.div
          variants={socialcontainer}
          initial="hidden"
          animate="animate"
          className="gap-5 grid"
        >
          <a
            href="https://www.linkedin.com/in/azukaeme-brian-4329b0246/"
            target="_blank"
          >
            <FloatButton icon={<FaLinkedinIn />} className="dark:bg-white" />
          </a>
          <a href="https://github.com/madfury94" target="_blank">
            <FloatButton
              icon={<FaGithub />}
              className="dark:bg-white hover:opacity-75"
            />
          </a>
          <a href="https://x.com/i_amfury" target="_blank">
            <FloatButton
              icon={<FaTwitter />}
              className="dark:bg-white hover:opacity-75"
            />
          </a>
        </motion.div>
      </FloatButton.Group>
    </div>
  );
};

export default Socials;
