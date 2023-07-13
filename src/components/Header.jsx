import {
  Flex,
  Link,
  Button,
  useMediaQuery,
  Menu,
  MenuList,
  MenuItem,
  IconButton,
  MenuButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Burger = () => {
  return (
    <Menu colorScheme="blue">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="solid"
      />
      <MenuList>
        <MenuItem>About</MenuItem>
      </MenuList>
    </Menu>
  );
};

const Header = () => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  return (
    <Flex className="nav-container" mb={10}>
      <div className="logo">
        <Link href="/" m={3}>
          Luis Portfolio
        </Link>
      </div>
      {isSmallerThan800 ? (
        <Burger />
      ) : (
        <ButtonGroup variant="outline" spacing="6">
          <Button variant="ghost" colorScheme="teal" m={3}>
            Resume
          </Button>
          <Button variant="ghost" colorScheme="teal" m={3}>
            Contact
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
};

export default Header;
