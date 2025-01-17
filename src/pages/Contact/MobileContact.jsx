import { React, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import useAnimationHook from "../../components/useAnimationHook";

function MobileContact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const error = () => toast.error("Error occured!");
  const success = () => toast.success("Successfully sent!");
  const form = useRef();
  const controls = useAnimationHook();

  const changeSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      error();
    } else {
      success();

      emailjs
        .sendForm(
          "service_f60n7ne",
          "template_kfsxw9c",
          form.current,
          "OjOpgXz1ZSHnuWuye"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("sent");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0, transition: { ease: "easeInOut" } }}
      className="mt-[32px] mx-auto w-[80%]"
    >
      <div className="text-center grid items-center justify-center place-items-center">
        <span className="text-primary dark:text-gray leading-[30px] font-[700] md:leading-[50px] text-[24px] md:text-[35px]">
          Want to work with me?
          <p className="text-secondary dark:text-white mt-2">let's Connect</p>
        </span>

        <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-para dark:text-gray word-break mt-[24px] md:w-[550px] w-[350px] whitespace-no-wrap">
          I am open to{" "}
          <span className="text-secondary dark:text-gray font-bold">
            remote
          </span>{" "}
          and{" "}
          <span className="text-secondary dark:text-gray font-bold">
            onsite full-time, part-time
          </span>{" "}
          roles. If you've got anything you think I'd be interested in then{" "}
          <span className="text-secondary dark:text-gray font-bold">
            fill the form.
          </span>
        </p>
      </div>

      <form ref={form} className="space-y-6 mt-[34px]" onSubmit={changeSubmit}>
        <div className="items-center justify-center place-items-center grid gap-8">
          <input
            type="text"
            name="user_name"
            value={name}
            placeholder="Enter your name"
            required
            onChange={(e) => setName(e.target.value)}
            className="border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[320px] md:w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
          />

          <input
            type="email"
            name="user_email"
            value={email}
            placeholder="Enter your mail"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="border-[#2D2929] dark:border-white border-[3px] p-5 outline-none w-[320px] md:w-[500px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
          />
          <textarea
            name="message"
            id="message"
            value={message}
            placeholder="Message"
            required
            onChange={(e) => setMessage(e.target.value)}
            className="border-[#2D2929] dark:border-white border-[3px] p-4 outline-none w-[320px] md:w-[500px] h-[100px] md:h-[150px] text-[14px] bg-[#F2F2F2] dark:bg-bgblack dark:text-grey2"
          ></textarea>

          <button
            className="items-center justify-center place-items-center grid"
            type="submit"
          >
            <span className="relative w-[320px] md:w-[500px] h-[60px] group  px-6 py-3 font-bold">
              <span className="absolute inset-0 w-[320px] md:w-[500px] h-[60px] border-2 border-darkgrey dark:border-white translate-y-2 translate-x-2 transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
              <span className="absolute inset-0 w-[320px] md:w-[500px] h-[60px] bg-darkgrey dark:bg-white"></span>
              <span className="text-resume dark:text-darkgrey text-[16px] text-center font-[700] leading-[24px] relative group-hover:opacity-85">
                CONNECT
              </span>
            </span>
          </button>
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
            role: "status",
            ariaLive: "polite",
          }}
        />
      </form>
    </motion.div>
  );
}

export default MobileContact;
