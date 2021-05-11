import { Flex } from "@chakra-ui/layout";
import React from "react";
import Editor from "./Editor";
import CourseStructure from "./CourseStructure";
import TableOfContents from "./TableOfContents";

const Article: React.FC = () => {
  return (
    <Flex w={"100%"} justifyContent={"center"} px={{ base: 0, md: 5, xl: 10 }}>
      <CourseStructure />
      <Editor />
      <TableOfContents />
    </Flex>
  );
};

export default Article;
