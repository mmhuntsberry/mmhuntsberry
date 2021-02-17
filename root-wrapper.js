import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Code from "./src/components/Code";
import { ThemeContextProvider } from "./src/contexts/themeContext";

const components = {
  "p.inlineCode": (props) => (
    <code
      style={{
        display: "inline-block",
        backgroundColor: "black",
        color: "#fff",
        padding: "4px 8px",
        transform: "rotate(-4deg)",
      }}
      {...props}
    />
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      return (
        <Code
          codeString={props.children.trim()}
          language={props.className && props.className.replace("language-", "")}
          {...props}
        />
      );
    }
  },
};

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeContextProvider>
      <MDXProvider components={components}>{element}</MDXProvider>
    </ThemeContextProvider>
  );
};
