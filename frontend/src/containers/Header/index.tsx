import { Flex } from "@chakra-ui/layout";
import React from "react";
import { IconButton, useColorMode, Link } from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const Header: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      as="header"
      w="100%"
      px={10}
      py={4}
      pos="fixed"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      // TODO: move bgColor to global style
      bgColor={colorMode === "dark" ? "gray.800" : "white"}
      shadow="base"
      zIndex={2}
    >
      <Flex fontSize="xl">
        <Link as={RouterLink} to="/" fontSize="larger" style={{ textDecoration: 'none'}}>ᛗᛁᛗᛁᚱ</Link>
      </Flex>
      <IconButton
        aria-label="Switch to darkmode"
        icon={<MoonIcon />}
        bgColor="transparent"
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Header;
