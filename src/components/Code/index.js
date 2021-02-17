import React, { useContext } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import darkTheme from "prism-react-renderer/themes/oceanicNext";
import lightTheme from "prism-react-renderer/themes/github";
import {
  code__block,
  line__number,
  token__line,
  copy__button,
} from "./code.module.css";
import { copyToClipboard } from "../../utils/helpers/copy-to-clipboard";
import { ThemeContext } from "../../contexts/themeContext";

function Code({ codeString, language }) {
  const { isDark } = useContext(ThemeContext);
  const handleClick = () => {
    copyToClipboard(codeString);
  };
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={isDark ? lightTheme : darkTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${code__block}`} style={style}>
          <button className={`${copy__button}`} onClick={handleClick}>
            Copy
          </button>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className={line__number}>{i + 1}</span>
              <span className={token__line}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </span>
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
}

export default Code;
