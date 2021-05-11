import React from "react";
import { Box } from "@chakra-ui/layout";

const TableOfContents = () => {
  return (
    <Box
      flexGrow={1}
      bgColor={"blue"}
      p={5}
      d={{ base: "none", "2xl": "flex" }}
    ></Box>
  );
};

export default TableOfContents;
