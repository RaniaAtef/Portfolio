import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Scrollspy from "react-scrollspy";
import { WidthFull } from "@mui/icons-material";

const pages = ["home", "about", "services", "portfolio", "contact"];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
    <AppBar
      position="sticky"
      width="100%"
      sx={{
        position: "sticky",
        bgcolor: isScrolled ? "white" : "transparent",
        color: isScrolled ? "black" : "white",
        boxShadow: isScrolled ? " 0 4px 8px 0 rgba(0, 0, 0, 0.2)" : "none",
        zIndex: "100",
        font: "16px",
        transition: "all 0.3s ease",
        width: "100%",
      }}
      style={styles.appBar}
    >
      <Container maxWidth="xl" style={{ zIndex: 10 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Portfolio
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Portfolio
          </Typography>
          <Scrollspy
            items={["home", "about", "services", "portfolio", "contact"]}
            currentClassName="active"
            offset={-64}
          />
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "none", md: "flex" },
            }}
          >
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
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "end",
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Button href={`#${page}`}>
                    <Typography textAlign="center">
                      {page.toUpperCase()}
                    </Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
