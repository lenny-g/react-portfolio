import { ContactForm } from "../components/ContactForm";
import { Container, Typography } from "@mui/material";

export const Contact = () => {
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"}>
        Contact
      </Typography>
      <ContactForm />
    </Container>
  );
};
