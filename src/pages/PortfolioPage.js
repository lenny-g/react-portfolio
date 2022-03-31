import { ProjectCard } from "../components/ProjectCard";
import { projectsFromApi } from "../data/projectsFromApi";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

export const Portfolio = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Portfolio
      </Typography>
      <Container
        sx={{
          mt: "2rem",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {projectsFromApi.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </Container>
    </Container>
  );
};
