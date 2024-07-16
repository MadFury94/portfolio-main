import React, { useEffect, useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";

const stripHTMLTags = (str) => {
  if (!str) return "";
  return str.replace(/<[^>]*>?/gm, "");
};

const Projects = () => {
  const controls = useAnimationHook();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://brianwebdev.site/wp-json/wp/v2/projects"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const projects = data.map((post) => ({
          title: post.title.rendered,
          subtitle: stripHTMLTags(post.content.rendered),
          language: post.acf.tools,
          codeLink: post.acf.code_link,
          viewLink: post.acf.project_link,
          mainImage: {
            asset: {
              url: post.acf.project_image.url,
            },
            alt: post.acf.project_image.alt,
          },
        }));
        setProjectData(projects);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <motion.div
      className="py-12 px-5 overflow-y-auto lg:h-[450px] md:grid-cols-2 lg:grid-cols-1 grid"
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
    >
      {projectData.map((project, index) => (
        <div className="mb-[24px]" key={index}>
          <motion.div
            className="rounded lg:overflow-hidden shadow-lg w-80 h-full mx-auto bg-white dark:bg-secondary"
            key={index}
          >
            {project.mainImage && (
              <LazyLoadImage
                src={project.mainImage.asset.url}
                alt={project.mainImage.alt}
                placeholderSrc={project.mainImage.asset.url}
                effect="blur"
              />
            )}

            <div className="p-5 ">
              <div className="font-[500] text-[18px] leading-[22.97px] mt-[12px] text-black2 dark:text-white">
                {project.title}
              </div>
              <p className="text-gray text-[14px] mt-2 leading-[20.42px]">
                {project.subtitle}
              </p>
              <p className="mt-[12px] text-[#222222] dark:text-white2">
                {project.language}
              </p>
              <div className="mt-[12px] flex gap-[30px]">
                <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75  hover:scale-110 transistion-all duration-500">
                  <>
                    <TbBrandGithub className="dark:fill-white fill-black2" />
                    <a
                      href={project.codeLink}
                      target="_blank"
                      className="dark:text-gray"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  </>
                </span>

                <span className="flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75 hover:scale-110 transistion-all duration-500">
                  <AiFillEye className="dark:text-white" />
                  <a
                    href={project.viewLink}
                    target="_blank"
                    className="dark:text-gray"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};

export default Projects;
