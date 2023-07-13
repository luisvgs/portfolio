import Image from "next/image";
import {Text, Flex, Heading} from "@chakra-ui/react";
import { useLottie } from "lottie-react";
import Cat from "../assets/cat.json";

const About = () => {
   const options = {
    animationData: Cat,
    loop: true
  };

  const { View } = useLottie(options);
  return (
    <Flex className="about-container" direction="column">
      <Heading m={5}>About Me</Heading>
      <Flex className="flex-about" m={5}>
        <Text className="about-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Flex className="about-img">
          {View}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default About;
