import React from "react";
import confetti from "canvas-confetti"; // Import the confetti library
import "./footer.css";
const Footer = () => {
  const handleCelebration = () => {
    // Trigger confetti effect on click
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { x: 0.5, y: 0.5 }, // Position in the center of the screen
      colors: ["#ff0", "#ff8c00", "#ff00ff", "#ff6347"],
    });

    // Optionally, you can remove the '*' after clicking
    setTimeout(() => {
      document.getElementById("celebrate").innerHTML = "You Clicked!";
    }, 1000); // Delay to allow the celebration to finish
  };

  return (
    <footer className="bg-zinc-50 text-center text-sm text-surface/75 dark:bg-neutral-700 dark:text-white/75 lg:text-left pb-5">
      <div className="Block">
        <div className="flex justify-between  flex-col-reverse  md:flex-row">
          <p>
            <span className="copy-right">
              © HaidarCodes LTD, 2024. Ain’t no stoppin’ me. Copywritten, so
              don’t copy me. Don't click this
              <span
                id="celebrate"
                className="celebrate-icon inline-block"
                onClick={handleCelebration}
              >
                *
              </span>
            </span>
            {/* Correctly close the outer span tag here */}
          </p>

          <ul className="  social-links flex justify-center items-center ">
            <li className="mt-5  mb-5 md:mt-0 md:mb-0">
              <a aria-label="github" href="https://github.com/skullface">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="transition duration-300 ease-in-out hover:fill-yellow-300"
                  >
                    <g class="inverted">
                      <path d="m337.6 504.5c-12.8 2.6-17.6-5.4-17.6-12.1s.3-36.1.3-70.2-8-39.2-17.3-47.2c57-6.4 116.8-28.1 116.8-126s-9.9-50.7-26.2-68.6c2.6-6.4 11.5-32.6-2.6-67.7 0 0-21.4-7-70.4 26.2-20.5-5.7-42.3-8.6-64-8.6s-43.5 2.9-64 8.6c-49-32.9-70.4-26.2-70.4-26.2-14.1 35.1-5.1 61.3-2.6 67.7-16.3 17.9-26.2 40.8-26.2 68.6 0 97.7 59.5 119.7 116.5 126-7.4 6.4-14.1 17.6-16.3 34.1-14.7 6.7-51.5 17.6-74.6-21-4.8-7.7-19.2-26.5-39.4-26.2-21.4.3-8.6 12.1.3 16.9 10.9 6.1 23.4 28.7 26.3 36.1 5.1 14.3 21.7 41.8 86.1 30 0 21.4.3 41.5.3 47.6s-4.8 14.4-17.6 12.1c-101.7-33.9-175-129.3-175-242.3s114.6-255.3 256-255.3 256 114.2 256 255.3-73.3 208.4-174.4 242.2z"></path>
                    </g>
                  </svg>
                </div>
              </a>
            </li>
            <li className="mt-5  mb-5 md:mt-0 md:mb-0">
              <a aria-label="instagram" href="https://instagram.com/skvllface">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="transition duration-300 ease-in-out hover:fill-yellow-300"
                  >
                    <path d="m366.6 512h-221.2c-80.2 0-145.4-65.2-145.4-145.4v-221.2c0-80.2 65.2-145.4 145.4-145.4h221.2c80.2 0 145.4 65.2 145.4 145.4v221.2c0 80.2-65.2 145.4-145.4 145.4zm-221.2-466.6c-55.1 0-100 44.8-100 100v221.2c0 55.1 44.8 100 100 100h221.2c55.1 0 100-44.8 100-100v-221.2c0-55.1-44.8-100-100-100h-221.2z"></path>
                    <path d="m256 387.8c-72.7 0-131.8-59.1-131.8-131.8s59.1-131.8 131.8-131.8 131.8 59.1 131.8 131.8-59.1 131.8-131.8 131.8zm0-218.1c-47.6 0-86.3 38.7-86.3 86.3s38.7 86.3 86.3 86.3 86.3-38.7 86.3-86.3-38.7-86.3-86.3-86.3z"></path>
                    <path d="m393.8 150c-17.5 0-31.8-14.3-31.8-31.8s14.3-31.8 31.8-31.8 31.8 14.3 31.8 31.8-14.3 31.8-31.8 31.8z"></path>
                  </svg>
                </div>
              </a>
            </li>
            <li className="mt-5  mb-5 md:mt-0 md:mb-0">
              <a
                aria-label="linkedin"
                href="https://www.linkedin.com/in/your-profile"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    class="transition duration-300 ease-in-out hover:fill-yellow-300"
                  >
                    <path d="m256 512c-141.4 0-256-114.6-256-256s114.6-256 256-256 256 114.6 256 256-114.6 256-256 256zm-87-406.5v286.7h193.7v-71.6h-119.2v-215.1z"></path>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>

        <ul className="flex flex-wrap justify-center font-sans mt-5 gap-4 md:gap-3">
          <li className="transition duration-300 ease-in-out hover:text-yellow-300">
            <a href="/">Home</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-yellow-300">
            <a href="/about">About</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-yellow-300">
            <a href="/blog">Blog</a>
          </li>
          <li className="transition duration-300 ease-in-out hover:text-yellow-300">
            <a href="/favorites">Favorites</a>
          </li>

          <li className="transition duration-300 ease-in-out hover:text-yellow-300">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
