import { Nav } from "../components/Nav";
import Container from "@mui/material/Container";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";

export const Home = () => {
  return (
    <Container>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Intro />
      </Container>
    </Container>
  );
};
