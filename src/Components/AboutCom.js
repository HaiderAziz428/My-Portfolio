import React from "react";
import coverImage from "../images/cover.png";
import "./AboutCom.css";
const AboutCom = () => {
  return (
    <main>
      <h1 className="md:mt-[calc(0.5em_*_6)">About Haidar Aziz</h1>
      <p>
        I’m <b>Haidar Aziz</b> (a.k.a. <b>@HaidarCodes</b>) and I’m a passionate
        full-stack web developer with a love for coding and technology. I
        specialize in the MERN stack, and I’m constantly learning and exploring
        new technologies like Web3. When I’m not coding, I’m probably gaming 🎮,
        diving into sports 🏀, or exploring new trends in the tech world. I'm
        always up for a good challenge and enjoy creating innovative projects.
      </p>
      <img className="collage" src={coverImage} alt="collage" />
      <div>
        <div className="grid md:grid-cols-5 justify-start  items-start md:gap-8 ">
          <h2 className="">About Haidar Aziz</h2>
          <p className="md:col-span-4 md:mt-[calc(0.5em_*_6)]">
            Haidar Aziz is a full-stack web developer who thrives on coding and
            technology. Specializing in the MERN stack, Haidar is always
            exploring new technologies like Web3. Whether diving into coding
            challenges or building innovative projects, Haidar is passionate
            about creating efficient and user-friendly applications. Outside of
            coding, Haidar enjoys gaming 🎮, sports 🏀, and staying on top of
            the latest tech trends, always eager to learn and grow as a
            developer.
          </p>
        </div>

        <div className="grid md:grid-cols-5 justify-start items-start md:gap-8">
          <h2>Hobbies and Interests</h2>
          <p className="md:col-span-4 md:mt-[calc(0.5em_*_6)]">
            In addition to being a dedicated developer, Haidar enjoys gaming 🎮,
            particularly in the world of competitive sports 🏀. Whether gaming
            or keeping up with the latest in the tech world, Haidar finds
            inspiration from all things that challenge and entertain. A firm
            believer in continuous learning, Haidar seeks to balance
            professional development with personal passions, making every moment
            count.
          </p>
        </div>
      </div>
      <h2>Exhibitions</h2>
      <ul class="md:list-style-none list-disc">
        <li>
          2024 Web Development Projects, Portfolio Showcase (personal website)
        </li>
        <li>
          2023 Full-Stack Web Development Projects, GitHub (group showcase)
        </li>
        <li>
          2022 Tech Trends in Web Development, Tech Talk, Islamabad
          (participating developer)
        </li>
      </ul>

      <h2>Publications</h2>
      <ul class="md:list-style-none list-disc">
        <li>
          <i>Full-Stack Web Developer Course</i>, Udemy, 2024, contributing
          learner and developer
        </li>
        <li>
          <i>Tech Trends in Web Development</i>, Medium, 2024, contributing
          writer
        </li>
      </ul>

      <h2>Speaking</h2>
      <ul class="md:list-style-none list-disc">
        <li>2024 Web Development Trends, Tech Talk, Islamabad</li>
        <li>
          2023 Tech Pathways for Students, Career Development Seminar, IST
        </li>
      </ul>

      <h2>Education and Training</h2>
      <ul class="md:list-style-none list-disc">
        <li>
          2024 <i>Power Shift</i> Leadership Accelerator, Active Voice
        </li>
        <li>2024 Full-Stack Web Developer, Udemy</li>
        <li>
          2026 B.S. in Computer Science, Institute of Space Technology,
          Islamabad
        </li>
        <li>2022 FSC (Pre-Engineering), Ideal Degree College, Islamabad</li>
      </ul>

      <h2>Press</h2>
      <ul class="md:list-style-none list-disc">
        <li>Udemy Certificate of Completion, Full-Stack Web Developer</li>
        <li>GitHub, Portfolio Projects Featured</li>
      </ul>
    </main>
  );
};
export default AboutCom;
