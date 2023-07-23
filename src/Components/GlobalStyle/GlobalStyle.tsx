import { css, Global, type Theme, useTheme } from "@emotion/react";
import { memo } from "react";

const GlobalStyle = (): JSX.Element => {
  const { background, textPrimary, fillStrong }: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Outfit", sans-serif;
          /* outline: 1px dotted #0bd871aa; */
        }
        *:focus-visible {
          outline: 1px solid ${textPrimary};
        }
        html,
        body {
          height: 100%;
          scroll-behavior: smooth;
        }
        body {
          display: flex;
          flex-direction: column;
          background: ${background};
          color: ${textPrimary};
          overflow: hidden;
          user-select: none;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
        }
        main {
          display: flex;
          flex: 1;
          min-height: 0;
        }
        ::-webkit-scrollbar {
          width: 14px;
        }
        ::-webkit-scrollbar-thumb {
          border: 4px solid transparent;
          background-color: ${fillStrong};
          background-clip: padding-box;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background-color: ${fillStrong};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
