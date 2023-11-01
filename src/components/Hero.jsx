import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import img1 from "../../public/iti.jpg";
import img2 from "../../public/trees.png";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const Mybox = styled.div`
  background-image: url(${img2});
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & ::before {
    position: absolute;
    content: "";
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.08);
    z-index: 600;
  }
`;
const Mybox2 = styled.div`
  background-image: url(${img1});
  width: 190px;
  height: 190px;
  display: inline-block;
  border-radius: 50%;
  mb: 33px;
  position: relative;
  background-position: center;
  background-size: cover;

  & ::before {
    position: absolute;
    content: "";
    top: -8px;
    bottom: -8px;
    left: -8px;
    right: -8px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.08);
    z-index: -1;
  }
`;
const Hero = () => {
  return (
    <>
      <Box className="container" height="100vh" id="home">
        <Box className="backGround">
          <Mybox />

          <Box
            sx={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              backgroundColor: "rgba(0,0,0,.6)",
              zIndex: "1",
            }}
          ></Box>
        </Box>
        <Box
          className="content"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            textAlign: "center",
            zIndex: "2",
          }}
        >
          <Mybox2 />
          <Stack direction="row">
            <Typography
              variant="h3"
              color="white"
              fontWeight="800"
              fontSize="45px"
            >
              Rania
              <Typography
                variant="h3"
                component="span"
                color="primary"
                padding="20px"
                fontWeight="800"
                fontSize="45px"
              >
                Atef
              </Typography>
            </Typography>
          </Stack>
          <Box
            sx={{ textAlign: "center", position: "relative", left: "-100px" }}
          >
            <Typography
              color="white"
              sx={{
                fontWeight: "500",
                fontSize: "19px",
                fontFamily: "poppins",
              }}
            >
              I'm a
            </Typography>
            <Typography
              color="white"
              sx={{
                display: "flex",
                alignItems: "center",
                fontWeight: "500",
                fontSize: "19px",
                fontFamily: "poppins",
              }}
            >
              <Box
                sx={{ position: "relative", left: "166px", top: "-28px" }}
                md={{ left: "100px" }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "Wordpress Developer",
                      "Yogi",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
