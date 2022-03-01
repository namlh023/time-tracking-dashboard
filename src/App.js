import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./components/utils/GlobalStyle.styled";
import { Container } from "./components/utils/Container.styled";
import { FontStyle } from "./components/utils/FontStyle.styled";
import { Theme } from "./components/utils/Theme.styled";
import { RootStyle } from "./components/utils/Root.styled";
import * as Helper from "./components/utils/Helpers.styled";

import Card from "./components/card";
import User from "./components/user";
import { data } from "./data";

function App() {
  const [periods, setPeriods] = useState({
    daily: false,
    weekly: true,
    monthly: false,
  });

  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle />
        <FontStyle />
        <RootStyle />
        <User periods={periods} setPeriods={setPeriods}></User>
        <Helper.Flex
          direction="column"
          justifyContent="stretch"
          alginItem="stretch"
          gap="1.5em"
          wrap="wrap"
        >
          {data.map((item, index) => {
            return <Card key={index} item={item} periods={periods}></Card>;
          })}
        </Helper.Flex>
      </Container>
    </ThemeProvider>
  );
}

export default App;
