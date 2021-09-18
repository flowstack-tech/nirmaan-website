import React from "react";

import { createStyles, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import { Box } from "@components/box";
import { Container } from "@components/container";
import { Paper } from "@components/paper";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "rgba(22, 54, 102, 1)",
      borderRadius: 0,
      width: "100vw",
      paddingTop: 20,
      paddingBottom: 20,
    },
    phone: {
      [theme.breakpoints.down(1200)]: {
        display: "none",
      },
    },
  }),
);

const Footer: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(660));
  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="lg">
        <Box flexDirection="row" display="flex" justifyContent="space-between" alignItems="center">
          <Box
            fontSize={matches ? "h5.fontSize" : "h3.fontSize"}
            fontWeight={800}
            fontFamily="Work Sans"
            color="#FFFFFF">
            NIRMAAN
          </Box>
          <Box
            fontSize={matches ? "caption.fontSize" : "h5.fontSize"}
            fontWeight={500}
            fontFamily="Work Sans"
            color="#FFFFFF">
            contactus@nirmaanhaat.com
          </Box>
          <Box fontSize="h5.fontSize" fontWeight={500} fontFamily="Work Sans" color="#FFFFFF" className={classes.phone}>
            +91-8017944104
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
