import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./components/utils/GlobalStyle.styled";
import { Container } from "./components/utils/Container.styled";
import { FontStyle } from "./components/utils/FontStyle.styled";
import { Theme } from "./components/utils/Theme.styled";
import { RootStyle } from "./components/utils/Root.styled";

import Card from "./components/card";
import { data } from "./data";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle />
        <FontStyle />
        <RootStyle />
        {data.map((item, index) => {
          return <Card key={index} item={item}></Card>;
        })}
      </Container>
    </ThemeProvider>
  );
}

export default App;
