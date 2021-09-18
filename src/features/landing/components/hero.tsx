import React from "react";

import { createStyles, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import { Box } from "@components/box";
import { Container } from "@components/container";
import { Paper } from "@components/paper";

import HeroFoldBackground from "../assets/hero-fold-background.jpg";
import HeroFoldBackgroundSmall from "../assets/hero-fold-background-small.jpg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundImage: `url(${HeroFoldBackground})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      width: "100vw",
      borderRadius: 0,
      [theme.breakpoints.down(765)]: {
        backgroundImage: `url(${HeroFoldBackgroundSmall})`,
      },
    },
    heroDataContainer: {
      display: "flex",
      justifyContent: "center",
    },
    heading: {
      maxWidth: "70%",
      marginBottom: 45,
      marginTop: 160,
      [theme.breakpoints.down(1200)]: {
        maxWidth: "100%",
      },
      [theme.breakpoints.down(415)]: {
        marginBottom: 45,
        marginTop: 150,
      },
      ["@media (max-height:800px)"]: {
        marginTop: 100,
      },
    },
    subHeading: {
      maxWidth: "60%",
      [theme.breakpoints.down(1200)]: {
        maxWidth: "80%",
      },
    },
  }),
);

const Hero: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(660));
  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="lg" className={classes.heroDataContainer}>
        <Box display="flex" flexDirection="column" alignContent="left">
          <Box
            fontSize={matches ? "h3.fontSize" : "h1.fontSize"}
            fontWeight={700}
            fontFamily="Cabin"
            color="#FFFFFF"
            textAlign="left"
            className={classes.heading}>
            Construction needs at your doorstep
          </Box>
          <Box
            fontSize={matches ? "h6.fontSize" : "h4.fontSize"}
            fontWeight={500}
            fontFamily="Work Sans"
            color="#FFFFFF"
            className={classes.subHeading}>
            India’s first one-stop credit, wholesale & fulfilment platform for builders and contractors
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Hero;
