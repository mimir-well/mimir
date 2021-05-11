import React from "react";
import { Box } from "@chakra-ui/layout";

const CourseStructure = () => {
  return (
    <Box
      d={{ base: "none", lg: "flex" }}
      flexGrow={1}
      bgColor={"red"}
      p={5}
    ></Box>
  );
};

export default CourseStructure;
