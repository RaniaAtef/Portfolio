import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";

const images = [
  {
    src: "/dicee.jpg",
    type: "Js",
    description:
      "Simple JavaScript program that simulates rolling a dice for a two-player game. The task involves creating a web-based user interface where players can roll a virtual dice, accumulate points, and win the game.",
    link: "https://rolling-dice-umber.vercel.app/",
  },
  {
    src: "/refurb.jpg",
    type: "React",
    description:
      "A comprehensive full-stack E-commerce website that empowers users t effortlessly buy and sell used items with online payment method, and there is a review system for seller and questionnaire feature about product",
    link: "https://user-roan-beta.vercel.app/",
  },
  {
    src: "/bootstrap.jpg",
    type: "Photography",
    description:
      "This one-page website, built with Bootstrap, showcases a clean and responsive design. It's perfect for presenting personal portfolios, product promotions, or project showcases. With its simplicity and adaptability, this project serves as an excellent example of Bootstrap's capabilities.",
    link: "https://raniaatef.github.io/Bootstrap-Template/",
  },
  {
    src: "/agemcy.jpg",
    type: "Html&Css",
    description:
      "This features HTML and CSS practice template. It is designed exclusively for honing HTML and CSS skills, serving as a private space for experimentation and learning.",
    link: "https://raniaatef.github.io/HtmlandCssPracticeTemplate/",
  },
  {
    src: "/node.jpg",
    type: "Node Js",
    description:
      "This is a mini project which is Node-Farm. Using node.js file system",
    link: "https://farm-node.onrender.com/",
  },
  {
    src: "/yoga.jpg",
    type: "React",
    description:
      "Yoga Blog, crafted with React and styled using Tailwind CSS. ",
    link: "https://github.com/RaniaAtef/React-Blog",
  },
  // Add more images with descriptions and links
];

const News = () => {
  const [type, setType] = useState("All");
  let renderedImages = images;

  if (type !== "All") {
    renderedImages = images.filter((img) => type === img.type);
  }

  return (
    <Container sx={{ pb: "140px" }} id="portfolio">
      <Box sx={{ pt: "140px", pb: "45px" }} id="portfolio">
        <Typography
          sx={{
            mb: 1.5,
            fontSize: "large",
            fontWeight: 700,
            color: "#E65F78",
            ml: "20px",
          }}
          variant="h1"
          component="div"
        >
          PORTFOLIO
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            fontSize: "30px",
            fontWeight: 800,
            color: "#000",
            ml: "20px",
          }}
          variant="h1"
          component="div"
        >
          Featured Work
        </Typography>
      </Box>
      <Container>
        <Box>
          <ul
            style={{
              listStyle: "none",
              padding: "3px",
              display: "flex",
              gap: "30px",
            }}
          >
            <Box
              component="li"
              onClick={() => setType("All")}
              sx={{
                color: type === "All" ? "#E65F78" : "black",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "16px",
                pb: "20px",
              }}
            >
              All
            </Box>
            <Box
              component="li"
              onClick={() => setType("React")}
              sx={{
                color: type === "React" ? "#E65F78" : "black",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              React
            </Box>
            <Box
              component="li"
              onClick={() => setType("Html&Css")}
              sx={{
                color: type === "Html&Css" ? "#E65F78" : "black",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              Html&Css
            </Box>
            <Box
              component="li"
              onClick={() => setType("Js")}
              sx={{
                color: type === "Js" ? "#E65F78" : "black",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              Js
            </Box>{" "}
            <Box
              component="li"
              onClick={() => setType("Node Js")}
              sx={{
                color: type === "Node Js" ? "#E65F78" : "black",
                cursor: "pointer",
                fontWeight: "500",
                fontSize: "19px",
              }}
            >
              Node Js
            </Box>
          </ul>
        </Box>

        <Grid container spacing={4}>
          {renderedImages.map((img, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  alt={img.description}
                  height="200"
                  image={img.src}
                />
                <CardContent>
                  <Typography variant="body2" align="center">
                    {img.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href={img.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default News;
