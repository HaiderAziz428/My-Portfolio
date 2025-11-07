import React, { useState } from "react";
import copy_svg from "../images/copy-text-svgrepo-com.svg";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Copy the email address to clipboard
    navigator.clipboard.writeText("haideraziz428@gmail.com").then(() => {
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <main>
      <h1>Contact HaidarAziz</h1>
      <p>
        💌 If you’d like to get in touch, send a&nbsp;
        <a
          href="https://www.linkedin.com/in/haider-aziz-1b4065266/"
          className="inline-flex items-center underline decoration-gray-700 underline-offset-4 hover:text-yellow-300 transition-colors duration-300"
        >
          LinkedIn
          <svg
            class="w-5 h-5 ml-1"
            viewBox="0 -0.5 25 25"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5 6.25C12.9142 6.25 13.25 5.91421 13.25 5.5C13.25 5.08579 12.9142 4.75 12.5 4.75V6.25ZM20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 12.0858 18.75 12.5H20.25ZM19.5 6.25C19.9142 6.25 20.25 5.91421 20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75V6.25ZM15.412 4.75C14.9978 4.75 14.662 5.08579 14.662 5.5C14.662 5.91421 14.9978 6.25 15.412 6.25V4.75ZM20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75C19.0858 4.75 18.75 5.08579 18.75 5.5H20.25ZM18.75 9.641C18.75 10.0552 19.0858 10.391 19.5 10.391C19.9142 10.391 20.25 10.0552 20.25 9.641H18.75ZM20.0303 6.03033C20.3232 5.73744 20.3232 5.26256 20.0303 4.96967C19.7374 4.67678 19.2626 4.67678 18.9697 4.96967L20.0303 6.03033ZM11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303L11.9697 11.9697ZM12.5 4.75H9.5V6.25H12.5V4.75ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5H6.25C6.25 7.70507 7.70507 6.25 9.5 6.25V4.75ZM4.75 9.5V15.5H6.25V9.5H4.75ZM4.75 15.5C4.75 18.1234 6.87665 20.25 9.5 20.25V18.75C7.70507 18.75 6.25 17.2949 6.25 15.5H4.75ZM9.5 20.25H15.5V18.75H9.5V20.25ZM15.5 20.25C18.1234 20.25 20.25 18.1234 20.25 15.5H18.75C18.75 17.2949 17.2949 18.75 15.5 18.75V20.25ZM20.25 15.5V12.5H18.75V15.5H20.25ZM19.5 4.75H15.412V6.25H19.5V4.75ZM18.75 5.5V9.641H20.25V5.5H18.75ZM18.9697 4.96967L11.9697 11.9697L13.0303 13.0303L20.0303 6.03033L18.9697 4.96967Z"></path>
          </svg>
        </a>
        ,
        <a
          href="https://x.com/haideraziz428 "
          className="inline-flex items-center underline decoration-gray-700 underline-offset-4 hover:text-yellow-300 transition-colors duration-300"
        >
          Twitter DM
          <svg
            class="w-5 h-5 ml-1"
            viewBox="0 -0.5 25 25"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.5 6.25C12.9142 6.25 13.25 5.91421 13.25 5.5C13.25 5.08579 12.9142 4.75 12.5 4.75V6.25ZM20.25 12.5C20.25 12.0858 19.9142 11.75 19.5 11.75C19.0858 11.75 18.75 12.0858 18.75 12.5H20.25ZM19.5 6.25C19.9142 6.25 20.25 5.91421 20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75V6.25ZM15.412 4.75C14.9978 4.75 14.662 5.08579 14.662 5.5C14.662 5.91421 14.9978 6.25 15.412 6.25V4.75ZM20.25 5.5C20.25 5.08579 19.9142 4.75 19.5 4.75C19.0858 4.75 18.75 5.08579 18.75 5.5H20.25ZM18.75 9.641C18.75 10.0552 19.0858 10.391 19.5 10.391C19.9142 10.391 20.25 10.0552 20.25 9.641H18.75ZM20.0303 6.03033C20.3232 5.73744 20.3232 5.26256 20.0303 4.96967C19.7374 4.67678 19.2626 4.67678 18.9697 4.96967L20.0303 6.03033ZM11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303C12.2626 13.3232 12.7374 13.3232 13.0303 13.0303L11.9697 11.9697ZM12.5 4.75H9.5V6.25H12.5V4.75ZM9.5 4.75C6.87665 4.75 4.75 6.87665 4.75 9.5H6.25C6.25 7.70507 7.70507 6.25 9.5 6.25V4.75ZM4.75 9.5V15.5H6.25V9.5H4.75ZM4.75 15.5C4.75 18.1234 6.87665 20.25 9.5 20.25V18.75C7.70507 18.75 6.25 17.2949 6.25 15.5H4.75ZM9.5 20.25H15.5V18.75H9.5V20.25ZM15.5 20.25C18.1234 20.25 20.25 18.1234 20.25 15.5H18.75C18.75 17.2949 17.2949 18.75 15.5 18.75V20.25ZM20.25 15.5V12.5H18.75V15.5H20.25ZM19.5 4.75H15.412V6.25H19.5V4.75ZM18.75 5.5V9.641H20.25V5.5H18.75ZM18.9697 4.96967L11.9697 11.9697L13.0303 13.0303L20.0303 6.03033L18.9697 4.96967Z"></path>
          </svg>
        </a>
        , or an email to{" "}
        <span class="inline relative copy-element">
          <button
            aria-label="Copy email address: haideraziz428@gmail.com"
            onClick={handleCopy}
            class="transition-all ease-in-out duration-200 bg-[#414141] hover:bg-[#0f0f0f] hover:shadow-[inset_0_0_0_1.5px_#888888] pl-2 pr-1 p-2 rounded mb-0 inline-flex items-center copy-button"
          >
            haideraziz428@gmail.com
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-5 h-5 ml-1 text-yellow-300"
            >
              <path d="M17 2H7c-1.1 0-1.99.89-1.99 1.99L5 20.01C5 21.1 5.9 22 7 22h10c1.1 0 1.99-.89 1.99-1.99L19 3.99C19 2.89 18.1 2 17 2zM16 17H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V7h8v2z" />
            </svg>
          </button>

          <span
            role="status"
            aria-live="polite"
            className={`copy-feedback absolute transition-all opacity-0 ease-in-out duration-200 -top-7 rounded p-3 left-[50%] text-[0.8125rem] bg-[#dddddd] text-[#0f0f0f] whitespace-nowrap leading-none -translate-x-1/2 ${
              copied ? "opacity-100" : "hidden"
            }`}
          >
            Email address copied
          </span>
        </span>
        .
      </p>

      <h2>Career opportunities</h2>
      <p>
        Let’s collaborate and build innovative solutions together! I’m open to
        full-time opportunities in dynamic environments such as established tech
        companies, growing startups, or agencies that value creativity and
        technical expertise.
      </p>
      <h2>Freelance Projects</h2>
      <ul className="md:list-style-none list-disc">
        <li>
          Organizations promoting cutting-edge technology and innovation 🚀
        </li>
        <li>Startups shaping the future of Web3 🌐</li>
        <li>Gamers and developers working on interactive experiences 🎮</li>
        <li>Independent creators and communities fostering creativity 🎨</li>
        <li>Passion projects that push the boundaries of what’s possible 💡</li>
      </ul>
      <h2>Let’s Connect</h2>
      <p>
        Got a question about development, design, gaming, or navigating the tech
        industry? Feel free to reach out! Whether it’s advice, brainstorming
        ideas, or simply sharing knowledge, I’d love to hear from you. Your
        question might even inspire my next blog post or tutorial!
      </p>
    </main>
  );
};
export default Contact;
