import React, { useEffect, useState } from "react";
import { TbBrandGithub } from "react-icons/tb";
import { AiFillEye } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";

const Projects = () => {
  const controls = useAnimationHook();
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMediaUrl = async (mediaId) => {
      try {
        const mediaResponse = await fetch(
          `https://navajowhite-beaver-644593.hostingersite.com/wp-json/wp/v2/media/${mediaId}`
        );
        if (mediaResponse.ok) {
          const mediaData = await mediaResponse.json();
          return mediaData.source_url;
        }
      } catch (error) {
        console.error("Error fetching media:", error);
      }
      return null;
    };

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const token =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JyaWFud2ViZGV2LnNpdGUiLCJpYXQiOjE3MjExMjk1NTAsIm5iZiI6MTcyMTEyOTU1MCwiZXhwIjoxNzIxNzM0MzUwLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIyIn19fQ.30SJoL1qWkZ8NUhlKqxJfYhSfaEt1ptPDXWRaSSNAZI";
        const response = await fetch(
          "https://navajowhite-beaver-644593.hostingersite.com/wp-json/wp/v2/projects",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        const projects = await Promise.all(
          data.map(async (post) => {
            const imageUrl = post.acf?.screenshot
              ? await fetchMediaUrl(post.acf.screenshot)
              : null;

            return {
              title: post.title.rendered,
              subtitle: post.content.rendered,
              language:
                post.acf?.technologies_used || "Technologies not specified",
              codeLink: post.acf?.github_link || "#",
              viewLink: post.acf?.project_link || "#",
              mainImage: {
                asset: {
                  url:
                    imageUrl ||
                    "https://via.placeholder.com/400x300?text=No+Image",
                },
                alt: post.title.rendered,
              },
            };
          })
        );

        setProjectData(projects);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(
          "Failed to load projects. Please check your connection and try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <motion.div
        className="py-12 px-5 overflow-y-auto lg:h-[450px] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Loading projects...
          </p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="py-12 px-5 overflow-y-auto lg:h-[450px] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      >
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="py-12 px-5 overflow-y-auto lg:h-[450px] md:grid-cols-2 lg:grid-cols-1 grid"
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
    >
      {projectData.length === 0 ? (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-600 dark:text-gray-300">No projects found.</p>
        </div>
      ) : (
        projectData.map((project, index) => (
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
        ))
      )}
    </motion.div>
  );
};

export default Projects;
