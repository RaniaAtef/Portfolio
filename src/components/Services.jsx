import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import { Container, Grid } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import TelegramIcon from "@mui/icons-material/Telegram";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import PaletteIcon from "@mui/icons-material/Palette"; // Import the "Palette" icon
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  >
    •
  </Box>
);

export default function Services() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          pt: { xs: "140px", md: "140px" },
          pb: { xs: "80px", md: "138px" },
        }}
        id="services"
      >
        <Container>
          <Box textAlign="start">
            <Typography
              sx={{
                mb: 1.5,
                fontSize: "large",
                fontWeight: 700,
                color: "#E65F78",
                ml: { xs: "20px", md: "20px" },
              }}
              variant="h1"
              component="div"
            >
              SERVICES
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
              Quality services
            </Typography>
          </Box>
          <Grid
            container
            spacing={4}
            sx={{
              pt: "87px",

              margin: "0 auto",
            }}
          >
            <AnimationOnScroll animateIn="animate__fadeIn">
              <Grid item container sx={{ margin: " 0 auto" }}>
                <Grid item lg={4} xs={12}>
                  <Card
                    sx={{
                      minWidth: 275,
                      maxWidth: "500px",
                      mx: "20px",
                      mb: { xs: "15px" },
                    }}
                  >
                    <Box
                      sx={{
                        p: { xs: "20px", md: "40px 30px 20px" },
                      }}
                    >
                      <CardContent>
                        <CodeIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            fontSize: { xs: "40px", md: "50px" },
                          }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Frontend Development
                        </Typography>
                        <Typography
                          sx={{
                            mb: 1.5,
                            fontSize: { xs: "14px", md: "medium" },
                            lineHeight: "2",
                          }}
                          color="text.secondary"
                        >
                          A dedicated front-end developer, I specialize in
                          crafting responsive web experiences using a wide range
                          of front-end technologies. With a passion for clean
                          and efficient code. Proficient in HTML, CSS,
                          JavaScript, and popular front-end libraries and
                          frameworks.
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>

                <Grid item lg={4} xs={12}>
                  <Card
                    sx={{
                      minWidth: 275,
                      maxWidth: "500px",
                      mx: "20px",
                      mb: { xs: "15px" },
                    }}
                  >
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <PaletteIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            fontSize: { xs: "40px", md: "50px" },
                          }}
                        />
                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          UI/UX Design{" "}
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          As a UI/UX designer, I'm dedicated to crafting
                          user-centric digital experiences. Leveraging tools
                          like Figma, PhotoshopXD, and Illustrator. I focus on
                          simplicity and efficiency to create interfaces that
                          leave a lasting impression and enhance user
                          satisfaction.
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
                <Grid item lg={4} xs={12}>
                  <Card
                    sx={{
                      minWidth: 275,
                      maxWidth: "500px",
                      mx: "20px",
                      mb: { xs: "15px" },
                    }}
                  >
                    <Box sx={{ p: "40px 30px 20px " }}>
                      <CardContent>
                        <DesktopWindowsIcon
                          color="primary"
                          sx={{
                            mb: "17px",
                            fontSize: { xs: "40px", md: "50px" },
                          }}
                        />

                        <Typography
                          sx={{
                            mb: "25px",
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                          variant="h4"
                          component="div"
                        >
                          Wordpress Development
                        </Typography>
                        <Typography
                          sx={{ mb: 1.5, fontSize: "medium", lineHeight: "2" }}
                          color="text.secondary"
                        >
                          As a WordPress developer, I'm dedicated to creating
                          captivating and user-centric digital experiences
                          within the WordPress ecosystem. With extensive
                          experience in theme development, plugin customization,
                          and design integration. My goal is to simplify
                          WordPress experience.
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Grid>
              </Grid>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeIn"></AnimationOnScroll>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
