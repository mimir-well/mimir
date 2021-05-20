import React from "react";
import {
  AccordionButton,
  AccordionButtonProps,
  // AccordionIcon,
  AccordionItem,
  AccordionItemProps,
  AccordionPanel,
  AccordionPanelProps,
} from "@chakra-ui/accordion";
import { Box } from "@chakra-ui/layout";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";

interface Props {
  title: string;
  itemProps?: AccordionItemProps;
  buttomProps?: AccordionButtonProps;
  panelProps?: AccordionPanelProps;
}

const MyAccordionItem: React.FC<Props> = ({
  title,
  itemProps = {},
  buttomProps = {},
  panelProps = {},
  children,
}) => {
  return (
    <AccordionItem {...itemProps}>
      {({ isExpanded }) => (
        <>
          <AccordionButton as="div" p={2} cursor="pointer" {...buttomProps}>
            <Box flex="1" textAlign="left">
              {title}
            </Box>
            {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </AccordionButton>
          <AccordionPanel pb={2} pt={2} pr={0} {...panelProps}>
            {children}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

export default MyAccordionItem;
