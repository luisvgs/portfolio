import Image from "next/image";
import Avatar from "../assets/scott.jpg";
import { Text } from "@chakra-ui/react";
import baffle from "baffle";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const target = baffle(".obfuscated");
    target.set({
      characters: "█▓█ ▒░/▒░ █░▒▓/ █▒▒ ▓▒▓/█<░▒ ▓/░>",
      speed: 100,
    });
    target.start();
    target.reveal(2000, 130);
  });

  return (
    <div className="hero-container">
      <Image
        src={Avatar}
        className="profile-img"
        width={300}
        height={300}
        alt="avatar"
      />
      <div className="hero-text">
        <Text fontSize="md" className="col obfuscated">
          Hey! I&apos;m Luis.
        </Text>
        <Text fontSize="sm">
          I&apos;m a software developer based in Venezuela. I specialize in
          building web applications. I&apos;m also interested in anything
          related to PL theory.
        </Text>
        <div className="social-icons">
          <a
            href="https://github.com/luisvgs"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/luisvsg/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
