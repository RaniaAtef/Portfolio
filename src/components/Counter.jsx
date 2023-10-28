import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import NumberCounter from "react-countup";

const Counter = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "black" }}>
        <Container sx={{ margin: "auto", textAlign: "center" }}>
          <Grid
            container
            columnSpacing={15}
            rowSpacing={5}
            sx={{ padding: "100px" }}
          >
            <Grid item lg={3} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "40px", fontWeight: "600", color: "white" }}
                >
                  <NumberCounter end={555} duration={4} />
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", fontWeight: "400", color: "white" }}
                >
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "40px", fontWeight: "600", color: "white" }}
                >
                  <NumberCounter end={222} duration={4} />
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", fontWeight: "400", color: "white" }}
                >
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "40px", fontWeight: "600", color: "white" }}
                >
                  <NumberCounter end={444} duration={4} />
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", fontWeight: "400", color: "white" }}
                >
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{ fontSize: "40px", fontWeight: "600", color: "white" }}
                >
                  <NumberCounter end={777} duration={4} />
                </Typography>
                <Typography
                  component="span"
                  sx={{ fontSize: "16px", fontWeight: "400", color: "white" }}
                >
                  Happy Clients
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Counter;
