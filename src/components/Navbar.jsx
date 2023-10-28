import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Scrollspy from "react-scrollspy";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  console.log(location);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  //active button with color
  const styles = {
    appBar: {
      borderBottom: "none",
    },
    activeButton: {
      color: "#E65F78",
    },
  };
  return (
    <>
      <Box>
        <AppBar
          sx={{
            bgcolor: isScrolled ? "white" : "transparent",
            color: isScrolled ? "black" : "white",
            boxShadow: isScrolled ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "none",
            zIndex: "100",
            font: "16px",
            transition: "all 0.3s ease",
          }}
          style={styles.appBar}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Portfolio
            </Typography>
            <Scrollspy
              items={["home", "about", "services", "portfolio", "contact"]}
              currentClassName="active"
              offset={-64}
            />
            <Button
              sx={{
                color:
                  location.hash === "#home" || location.hash === ""
                    ? "#E65F78"
                    : "inherit",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "2",
                letterSpacing: "50",
                fontFamily: "poppins",
                transition: "all .3s ease",

                padding: [0, 0, 1, 2],
                fontSize: [10, 10, 15, 15],
              }}
              href="#home"
            >
              Home
            </Button>
            <Button
              sx={{
                color: location.hash === "#about" ? "#E65F78" : "inherit",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "2",
                letterSpacing: "50",
                fontFamily: "poppins",
                transition: "all .3s ease",

                padding: [0, 0, 1, 2],
                fontSize: [10, 10, 15, 15],
              }}
              href="#about"
            >
              About
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "2",
                letterSpacing: "50",
                fontFamily: "poppins",
                transition: "all .3s ease",
                ...(Scrollspy.defaultProps.currentClassName === "active" && {
                  ...styles.activeButton,
                }),

                fontSize: [10, 10, 15, 15],

                padding: [0, 0, 1, 2],
                color: location.hash === "#services" ? "#E65F78" : "inherit",
              }}
              href="#services"
            >
              Services
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "2",
                letterSpacing: "50",
                fontFamily: "poppins",
                transition: "all .3s ease",

                padding: [0, 0, 1, 2],
                fontSize: [10, 10, 15, 15],
                color: location.hash === "#portfolio" ? "#E65F78" : "inherit",
              }}
              href="#portfolio"
            >
              Portfolio
            </Button>
            <Button
              color="inherit"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "2",
                letterSpacing: "50",
                fontFamily: "poppins",
                transition: "all .3s ease",

                fontSize: [10, 10, 15, 15],
                padding: [0, 0, 1, 2],
                color: location.hash === "#contact" ? "#E65F78" : "inherit",
              }}
              href="#contact"
            >
              Contact
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
