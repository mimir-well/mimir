import React, { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/layout";

import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS as tools } from "./editorTools";

const data = {
  blocks: [
    {
      type: "header",
      data: {
        text: "Editor.js",
        level: 2,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.",
      },
    },
    // {
    //   type: "embed",
    //   data: {
    //     service: "coub",
    //     source: "https://coub.com/view/1czcdf",
    //     embed: "https://coub.com/embed/1czcdf",
    //     width: 580,
    //     height: 320,
    //     // caption: "My Life",
    //   },
    // },
    {
      type: "code",
      data: {
        code: `.ce-block__content {
  max-width: none;
}

@media (min-width: 651px) {
  .ce-toolbar__content {
    /* height: 10px;
    background-color: red; */
    max-width: none;
  }

  .codex-editor--narrow .ce-toolbar__actions {
    right: 0;
  }
  /* .codex-editor--narrow .codex-editor__redactor { */
  /* margin-right: 25px; */
  /* } */
}`,
      },
    },
    {
      type: "code",
      data: {
        code: `.ce-block__content {
  max-width: none;
}

@media (min-width: 651px) {
  .ce-toolbar__content {
    /* height: 10px;
    background-color: red; */
    max-width: none;
  }`,
      },
    },
    {
      type: "header",
      data: {
        text: "Key features",
        level: 3,
      },
    },
    // {
    //   type : 'list',
    //   data : {
    //     items : [
    //       'It is a block-styled editor',
    //       'It returns clean data output in JSON',
    //       'Designed to be extendable and pluggable with a simple API',
    //     ],
    //     style: 'unordered'
    //   }
    // },
    {
      type: "header",
      data: {
        text: "What does it mean «block-styled editor»",
        level: 3,
      },
    },
    {
      type: "paragraph",
      data: {
        text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.',
      },
    },
    {
      type: "paragraph",
      data: {
        text: `There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.`,
      },
    },
    {
      type: "header",
      data: {
        text: "What does it mean clean data output",
        level: 3,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below",
      },
    },
    {
      type: "paragraph",
      data: {
        text: `Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.`,
      },
    },
    {
      type: "paragraph",
      data: {
        text: "Clean data is useful to sanitize, validate and process on the backend.",
      },
    },
    // {
    //   type : 'delimiter',
    //   data : {}
    // },
    {
      type: "paragraph",
      data: {
        text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make its core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏",
      },
    },
    // {
    //   type: 'image',
    //   data: {
    //     url: 'assets/logo192.png',
    //     caption: '',
    //     stretched: false,
    //     withBorder: true,
    //     withBackground: false,
    //   }
    // },
  ],
};

const Blocks = () => {
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
      flexBasis={0}
      justifyContent={"center"}
      // bgColor="gray.50"
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
