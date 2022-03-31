import * as React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import profileImage from "../assets/img/profile-img.gif";

export const Intro = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img src={profileImage} alt="gif of Leanne Gallagher" height="300px" />
      </Box>
      <Box sx={{ mt: "3rem" }}>
        <Typography gutterBottom variant="h2" textAlign={"left"}>
          About Me
        </Typography>
        <Typography variant="body2" component={"div"} color="text.secondary">
          Developer with front and backend development experience. Earned a
          certificate in Full Stack Web Development from the University of
          Birmingham and a certificate in coding fundamentals from TechTalent
          Academy
        </Typography>
      </Box>
    </Container>
  );
};
