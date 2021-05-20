import React from "react";
import { Accordion, AccordionProps } from "@chakra-ui/accordion";

const MyAccordion: React.FC<AccordionProps> = (props) => {
  return (
    <Accordion
      allowMultiple
      w="100%"
      sx={{
        "& *": {
          borderStyle: "none",
        },
      }}
      {...props}
    />
  );
};

export default MyAccordion;
