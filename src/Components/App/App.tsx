import { FC } from "react";
import AppProvider from "../AppProvider/AppProvider";
import AppContent from "../AppContent/AppContent";

const App: FC = (): JSX.Element => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;
