import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PlaceIcon from "@mui/icons-material/Place";
import Typewriter from "typewriter-effect";
import CakeIcon from "@mui/icons-material/Cake";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SchoolIcon from "@mui/icons-material/School";
import PhoneIcon from "@mui/icons-material/Phone";
const Biography = () => {
  const handleDownload = () => {
    // Replace 'your-cv-file.pdf' with the actual PDF file you want to download or open
    const pdfUrl = "../../public/RaniaAtefAliCv.pdf";
    window.open(pdfUrl, "_blank");
  };
  return (
    <>
      <Box
        sx={{ backgroundColor: "white", pt: "140px", pb: "138px" }}
        id="about"
      >
        <Container>
          <Box textAlign="start">
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
              Biography
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
              About Me{" "}
            </Typography>
          </Box>
          <Grid container sx={{ pt: "100px", p: "50px" }}>
            <Grid item lg={6} xs={12}>
              <img
                src="../../public/1.jpg"
                style={{ width: "90%", height: "70%" }}
                alt="GIF Image"
              />
            </Grid>

            <Grid item lg={6} xs={12}>
              <Typography
                sx={{
                  fontSize: "20px",
                  variant: "h3",
                  fontWeight: "600",
                  pb: "20px",
                  fontFamily: "poppins",
                }}
              >
                I'm Rania Atef and
                <Typography
                  sx={{
                    fontSize: "20px",
                    variant: "h3",
                    fontWeight: "600",
                    color: "#E65F78",
                    fontFamily: "poppins",
                  }}
                >
                  <Box
                    sx={{ position: "relative", left: "178px", top: "-30px" }}
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
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontFamily: "mulish",
                  fontSize: "16px",
                  lineHeight: "2",
                  letterSpacing: "1px",
                  color: "#333",
                  pb: "20px",
                }}
              >
                Greetings! I am a passionate Front End Web Developer with a
                Computer Science background and specialized training from the
                ITI. Yoga enthusiast, I find balance between coding and
                well-being. Committed to creating user-friendly web interfaces
                with a touch of artistry. Constantly evolving and staying
                updated with the latest web trends and technologies. Eager to
                make a positive impact in the ever-evolving digital landscape.
              </Typography>
              <Grid container>
                <Grid item lg={6} xs={12}>
                  <ul style={{ listStyle: "none", padding: "0px" }}>
                    <li>
                      <Box sx={{ display: "flex" }}>
                        <CakeIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Birthday:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>
                          23/8/1997
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      <Box sx={{ display: "flex" }}>
                        <PlaceIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Location:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>
                          Egypt.
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      {" "}
                      <Box sx={{ display: "flex" }}>
                        <LocalLibraryIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Study:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>
                          ITI graduate{" "}
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      {" "}
                      <Box sx={{ display: "flex" }}>
                        <EmailIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Mail:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>
                          raniaatef718@gmail.com{" "}
                        </Typography>
                      </Box>
                    </li>
                  </ul>
                </Grid>
                <Grid item lg={6} xs={12} pl={{ xs: "0", lg: "35px" }}>
                  <ul style={{ listStyle: "none", padding: "0" }}>
                    <li>
                      {" "}
                      <Box sx={{ display: "flex" }}>
                        <CalendarMonthIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Age:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>25 </Typography>
                      </Box>
                    </li>
                    <li>
                      {" "}
                      <Box sx={{ display: "flex" }}>
                        <SportsEsportsIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Interests:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>Yoga</Typography>
                      </Box>
                    </li>
                    <li>
                      {" "}
                      <Box sx={{ display: "flex" }}>
                        <SchoolIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Degree:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>
                          Bachelor in Cs
                        </Typography>
                      </Box>
                    </li>
                    <li>
                      {" "}
                      <Box sx={{ display: "flex" }}>
                        <PhoneIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            mr: "10px",
                            alignItems: "center",
                            fontSize: "20px",
                          }}
                        />
                        <Typography
                          sx={{
                            font: "16px",
                            color: "black",
                            fontWeight: "600",
                            minWidth: "85px",
                            display: "inline-block",
                          }}
                        >
                          Phone:
                        </Typography>
                        <Typography sx={{ color: "#333333" }}>
                          +201285883227
                        </Typography>
                      </Box>
                    </li>
                  </ul>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                sx={{ padding: "12px 45px" }}
                onClick={handleDownload}
              >
                Download CV
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Biography;
