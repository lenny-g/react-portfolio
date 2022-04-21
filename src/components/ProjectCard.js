import * as React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Container, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import projectBackground from "../assets/img/project-background.gif";

const styles = {
  container: {
    maxWidth: "450px",
    minHeight: "500px",
    backgroundImage: `url(${projectBackground})`,
    margin: "2rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "450px",
  },
};

export const ProjectCard = ({
  projectImg,
  title,
  description,
  link,
  github,
}) => {
  return (
    <Container style={styles.container}>
      <Card
        sx={{
          maxWidth: 370,
          borderRadius: "3%",
          backgroundColor: "#AE9EED",
        }}
      >
        <CardMedia
          component="img"
          height="contain"
          image={projectImg}
          alt={title}
        />

        <CardContent>
          <Typography variant="body" color="black">
            {title}
          </Typography>
          <Divider />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mt: "1rem" }}
          >
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-around", mb: 1 }}>
          <IconButton aria-label="project" component={Link} href={link}>
            <LanguageIcon sx={{ color: "#C9E265" }} />
          </IconButton>

          <IconButton aria-label="gitHub" component={Link} href={github}>
            <GitHubIcon sx={{ color: "#C9E265" }} />
          </IconButton>
        </Box>
      </Card>
    </Container>
  );
};
