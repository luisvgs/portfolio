import { Button, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/" m={3}>
          Luis Portfolio
        </Link>
      </div>
      <Button colorScheme="blue" m={3}>
        Resume
      </Button>
    </div>
  );
};

export default Header;
