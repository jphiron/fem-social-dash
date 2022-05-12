import { useContext } from "react";
import "./App.scss";
import { ThemeContext } from "./context/ThemeContext";
import { TopBar } from "./components/TopBar";
import { Background, Main } from "./App.styles";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <Background theme={theme}>
      <Main className="App" theme={theme}>
        <TopBar />
      </Main>
    </Background>
  );
}

export default App;
