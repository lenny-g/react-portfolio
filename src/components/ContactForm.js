import { Container, Box, TextField, Button } from "@mui/material";
import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const changeBackground = (e) => {
  e.target.style.background = "#9c88e9";
};

export const ContactForm = () => {
  const formRef = useRef();
  const [complete, setComplete] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleForm = async () => {
      await emailjs.sendForm(
        "service_facry59",
        "template_dbm8r34",
        formRef.current,
        "BQhCOo4xoVlDzspaN"
      );
      setName("");
      setEmail("");
      setMessage("");
      setComplete(true);
    };
    handleForm();
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ m: "2rem" }}>
      <form ref={formRef} onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            m: "5rem",
          }}
        >
          <TextField
            required
            margin="normal"
            id="outlined-required"
            label="Name"
          >
            Name
          </TextField>
          <TextField
            required
            margin="normal"
            id="outlined-required"
            label="Email"
          >
            Email
          </TextField>
          <TextField
            margin="normal"
            id="outlined-multiline-flexible"
            label="Message"
            multiline
            minRows={4}
          >
            Comments
          </TextField>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#AE9EED" }}
            onMouseOver={changeBackground}
          >
            SUBMIT
          </Button>
        </Box>
      </form>
    </Container>
  );
};
