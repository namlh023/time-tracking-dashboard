import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from './components/utils/GlobalStyle.styled';
import { Container } from './components/utils/Container.styled'
import { FontStyle } from './components/utils/FontStyle.styled'
import { Theme } from './components/utils/Theme.styled'

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Container>
        <GlobalStyle/>
        <FontStyle/>
      </Container>
    </ThemeProvider>

  )
}

export default App;
