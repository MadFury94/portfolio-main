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

const ensureUrl = (url) => {
  if (!url) return "#";
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    return `http://${url}`;
  }
  return url;
};

const extractLinksFromExcerpt = (excerpt) => {
  const div = document.createElement("div");
  div.innerHTML = excerpt;
  const links = div.getElementsByTagName("a");
  if (links.length > 0) {
    return ensureUrl(links[0].href); // Assuming the first link is the one you want
  }
  return "#";
};

// Function to fetch featured image URL
const fetchFeaturedImage = async (mediaId) => {
  const response = await fetch(
    `https://brianwebdev.site/wp-json/wp/v2/media/${mediaId}`
  );
  const data = await response.json();
  return data.source_url;
};

const extractSecondPart = (link) => {
  const parts = link.split("/");
  return parts[parts.length - 1];
};

const fetchCategories = async (categoryIds) => {
  const categories = await Promise.all(
    categoryIds.map(async (categoryId) => {
      const response = await fetch(
        `https://brianwebdev.site/wp-json/wp/v2/categories/${categoryId}`
      );
      const data = await response.json();
      return data.slug;
    })
  );
  return categories.join("/");
};

// Function to fetch tag names
const fetchTags = async (tagIds) => {
  const tags = await Promise.all(
    tagIds.map(async (tagId) => {
      const response = await fetch(
        `https://brianwebdev.site/wp-json/wp/v2/tags/${tagId}`
      );
      const data = await response.json();
      return data.name;
    })
  );
  return tags.join(", ");
};

const Projects = () => {
  const controls = useAnimationHook();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://brianwebdev.site/wp-json/wp/v2/posts"
        );

        const data = await response.json();

        const projects = await Promise.all(
          data.map(async (post) => {
            const featuredImageUrl = await fetchFeaturedImage(
              post.featured_media
            );
            console.log(data);

            const tags = await fetchTags(post.tags);
            const categories = post.categories.map((cat) => cat.slug);
            const projectLink = ensureUrl(post.meta._uag_custom_page_level_css);
            const codeLink = extractSecondPart(post.link);

            return {
              title: post.title.rendered,
              subtitle: stripHTMLTags(post.content.rendered),
              language: tags,
              codeLink: codeLink,
              viewLink: ensureUrl(post.uagb_excerpt),
              mainImage: {
                asset: {
                  url: featuredImageUrl,
                },
                alt: post.title.rendered,
              },
            };
          })
        );

        setProjectData(projects);
      } catch (error) {
        console.error(error);
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
