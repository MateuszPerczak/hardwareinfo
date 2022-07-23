import { useEffect } from "react";

const useConsole = () => {
  useEffect(() => {
    console.log("%c🤨", "font-size: 8em;");
    console.log("%cA ty czego tu szukasz?", "font-size: 2em; color: #fff;");
  }, []);
};

export default useConsole;
