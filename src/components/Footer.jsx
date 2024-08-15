import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from "../assets/me.webp";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Owner" />
        <h2>Austine Agunda</h2>
        <p>
          Without data, you are blid and deaf right in the middle of freeway...
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com/@vaccine2548" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/vaccine" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ozzo254" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
