import React from "react";

const ResumeButton = () => {
  const resumeLink =
    "https://docs.google.com/document/d/1n8d-Rgvc4IuTiWLHkPlJaLLQJFLtg8bciI5v9MiY6ww/edit?usp=sharing";

  return (
    <div>
      <a
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-[160px] h-[48px] group text-center px-6 py-3 font-bold cursor-pointer"
      >
        <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white"></span>
        <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
          View Resumé
        </span>
      </a>
    </div>
  );
};

export default ResumeButton;
