import React, { useEffect, useState } from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Data, Block, HeaderBlock } from "../editorData";
import produce from "immer";
import ThinkingFace from "./ThinkingFace";

interface Props {
  data: Data;
}

interface Header {
  text: string;
  level: number;
}

const TableOfContents: React.FC<Props> = ({ data }) => {
  const [headers, setHeaders] = useState<Header[]>([]);

  useEffect(() => {
    const _headers: Header[] = data.blocks
      .filter((block: Block): block is HeaderBlock => block.type === "header")
      .map((block: HeaderBlock): Header => block.data);

    // Normolize levels
    if (_headers.length) {
      const nextState = produce(_headers, (draftState) => {
        if (draftState) {
          if (draftState[0].level > 1) {
            for (const header of draftState) {
              if (header.level === 1) break;
              header.level -= draftState[0].level - 1;
            }
          }

          for (let i = 0; i < draftState.length; i++) {
            const header = draftState[i];
            if (i === 0) {
              header.level = 1;
            } else if (header.level - draftState[i - 1].level > 1) {
              header.level = draftState[i - 1].level + 1;
            }
          }
        }
      });

      setHeaders(nextState);
    }
  }, [data]);

  return (
    <Box
      bgColor="blue.50"
      flexGrow={1}
      flexDir="column"
      p={5}
      d={{ base: "none", "2xl": "flex" }}
    >
      <Heading as="h5" size="sm" textTransform="uppercase">
        Table of contents
      </Heading>
      {headers.length ? (
        headers.map((h, i) => {
          const pl = `${15 * (h.level - 1)}px`;
          return (
            <Flex key={i} pl={pl} mt={2.5}>
              {h.text}
            </Flex>
          );
        })
      ) : (
        <ThinkingFace boxSize={36} ml="10px" />
      )}
    </Box>
  );
};

export default TableOfContents;
