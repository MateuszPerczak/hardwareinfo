import { css, Global, Theme, useTheme } from "@emotion/react";
import { FC, memo } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const theme: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Poppins", sans-serif;
          background-color: ${theme.background};
          color: ${theme.color};
        }
        #root {
          height: 100vh;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        @font-face {
          font-family: "Poppins";
          src: url("./fonts/Poppins.ttf") format("truetype");
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: ${theme.scrollbar};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
