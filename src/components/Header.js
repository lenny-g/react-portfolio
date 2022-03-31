import * as React from "react";
import { Container } from "@mui/material";
import header from "../assets/img/header.gif";

export const Header = () => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <img
        src={header}
        alt="various fonts of leanne gallagher"
        height="400px"
      />
    </Container>
  );
};
