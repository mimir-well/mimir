import React, { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/layout";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS as tools } from "./editorTools";
import { Data } from "../editorData";

interface Props {
  data: Data;
}

const Blocks: React.FC<Props> = ({ data }) => {
  const [ready, setReady] = useState(false);

  // Autosize textarea
  useEffect(() => {
    if (ready) {
      const textareas =
        document.querySelectorAll<HTMLElement>(".ce-code__textarea");
      textareas.forEach((ta) => {
        ta.style.height = "";
        ta.style.height = ta.scrollHeight + 3 + "px";
        ta.setAttribute(
          "oninput",
          'this.style.height = "";this.style.height = this.scrollHeight + 3 + "px"'
        );
      });
    }
  }, [ready]);

  return (
    <Flex
      flexGrow={2.5}
      justifyContent={"center"}
      p={5}
      ml={{ base: 0, lg: 10 }}
      mr={{ base: 0, "2xl": 10 }}
      sx={{
        "@media (min-width: 651px)": {
          paddingLeft: "calc(1.25rem + 50px)",
        },
      }}
    >
      <EditorJs
        data={data}
        // readOnly={true}
        tools={tools}
        onReady={() => setReady(true)}
      />
    </Flex>
  );
};

export default Blocks;
