import { AppRouter } from "./components/AppRouter";
import { Nav } from "./components/Nav";
import Container from "@mui/material/Container";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
function App() {
  return (
    <Container>
      <Nav />
      <Header />
      <AppRouter />
    </Container>
  );
}

export default App;
