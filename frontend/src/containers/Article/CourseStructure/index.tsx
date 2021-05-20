import React from "react";
import { Box, Heading, Link, VStack } from "@chakra-ui/layout";
import { Link as RouterLink } from "react-router-dom";
import Accordion from "components/Accordion";
import AccordionItem from "components/AccordionItem";
import { Curriculum } from "../curriculumData";

interface Props {
  data: Curriculum;
}

const CourseStructure: React.FC<Props> = ({ data }) => {
  const courses = data.courses.map((course, ci) => (
    <AccordionItem key={ci} title={course.title} panelProps={{ py: 0 }}>
      {course.sections.map((section, si) => (
        <AccordionItem key={si} title={section.title} panelProps={{ pl: 5 }}>
          <VStack spacing={4} align="flex-start">
            {section.articles.map((article, ai) => (
              //  TODO: url
              <Link key={ai} as={RouterLink} to={article.url}>
                {article.title}
              </Link>
            ))}
          </VStack>
        </AccordionItem>
      ))}
    </AccordionItem>
  ));
  return (
    <Box
      d={{ base: "none", lg: "flex" }}
      flexDir="column"
      flexGrow={1}
      bgColor="red.100"
      pt={5}
      pb={3}
      px={3}
    >
      <Heading as="h5" size="sm" textTransform="uppercase" mb={2.5} px={2}>
        {data.title}
      </Heading>
      <Accordion>{courses}</Accordion>
    </Box>
  );
};

export default CourseStructure;
