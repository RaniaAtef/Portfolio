import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Box
        sx={{ backgroundColor: "#F9F9F9", pt: "140px", pb: "138px" }}
        id="contact"
      >
        <Container>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: "30px",
              fontWeight: 700,
              color: "#E65F78",
              ml: "20px",
            }}
            variant="h1"
            component="div"
          >
            CONTACT
          </Typography>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: "large",
              fontWeight: 800,
              color: "#000",
              ml: "20px",
            }}
            variant="h1"
            component="div"
          >
            Get in touch{" "}
          </Typography>
          <Typography
            sx={{
              mb: 1.5,
              fontSize: "16px",
              fontWeight: 500,
              color: "#333",
              ml: "20px",
              pb: "43px",
            }}
            variant="h4"
            component="div"
          >
            Please fill out the form on this section to contact with me. Or call
            between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday{" "}
          </Typography>
          <AnimationOnScroll animateIn="animate__fadeIn">
            <Box sx={{ ml: "12px" }}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Email"
                      fullWidth
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Message"
                      fullWidth
                      multiline
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      type="submit"
                      sx={{ padding: "12px 45px" }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </AnimationOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
