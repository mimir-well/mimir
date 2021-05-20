import { Flex } from "@chakra-ui/layout";
import React from "react";
import Editor from "./Editor";
import CourseStructure from "./CourseStructure";
import TableOfContents from "./TableOfContents";
import { data as editorData } from "./editorData";
import { data as curriculumData } from "./curriculumData";
const Article: React.FC = () => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"center"}
      mt={5}
      px={{ base: 0, md: 5, xl: 10 }}
      sx={{
        "& > div": {
          flexBasis: "0",
          h: "fit-content",
        },
      }}
    >
      {/* Get course structure from context */}
      <CourseStructure data={curriculumData} />
      <Editor data={editorData} />
      <TableOfContents data={editorData} />
    </Flex>
  );
};

export default Article;
