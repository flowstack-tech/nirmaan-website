import React, { useMemo, useState } from "react";

import { createStyles, InputAdornment, makeStyles, useMediaQuery, useTheme, withStyles } from "@material-ui/core";

import { Box } from "@components/box";
import { Button, IconButton } from "@components/button";
import { Container } from "@components/container";
import { Dialog } from "@components/dialog";
import { Grid } from "@components/grid";
import { Paper } from "@components/paper";
import { TextField } from "@components/text-field";
import { ReactComponent as CloseIcon } from "@features/landing/assets/close-icon.svg";
import { ReactComponent as DealerImageSmall } from "@features/landing/assets/dealer-small.svg";
import { ReactComponent as SuccessfulIcon } from "@features/landing/assets/successful-icon.svg";

import { ReactComponent as DealerImage } from "../assets/dealer.svg";
import { ReactComponent as DealerGrowthIcon } from "../assets/dealer-growth.svg";
import { ReactComponent as DealerInventoryIcon } from "../assets/dealer-inventory.svg";
import { ReactComponent as DealerProfitsIcon } from "../assets/dealer-profits.svg";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "rgba(120, 170, 245, 0.35)",
      width: "100vw",
      paddingTop: 128,
      paddingBottom: 128,
    },
    CTAButton: {
      textTransform: "none",
      borderRadius: 4,
      border: "0px",
      backgroundColor: "rgba(22, 54, 102, 1)",
      paddingLeft: 32,
      paddingRight: 32,
      paddingTop: 8,
      paddingBottom: 8,
    },
    image: {
      [theme.breakpoints.down(1200)]: {
        display: "none",
      },
    },
    imageContainer: {
      [theme.breakpoints.down(900)]: {
        display: "none",
      },
    },
    imageSmall: {
      [theme.breakpoints.up(1200)]: {
        display: "none",
      },
      [theme.breakpoints.down(900)]: {
        display: "none",
      },
    },
    features: {
      maxWidth: "85%",
      [theme.breakpoints.down(975)]: {
        maxWidth: "100%",
      },
      [theme.breakpoints.down(900)]: {
        maxWidth: "85%",
      },
    },
    form: {
      paddingTop: 32,
      paddingBottom: 32,
    },
    formFilled: {
      paddingTop: 32,
      paddingBottom: 80,
    },
    formContainer: {
      [theme.breakpoints.down("xs")]: {
        marginTop: 160,
      },
    },
    gridContainer: {
      marginBottom: 40,
    },
  }),
);

const CssTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(161, 174, 192, 1)",
    },
  },
})(TextField);

const Dealer: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(540));
  const matchesFormText = useMediaQuery(theme.breakpoints.down("xs"));
  const [formOpen, setFormOpen] = useState(false);

  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [pin, setPin] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const [successful, setSuccessful] = useState(false);

  const isDisabled = useMemo(() => {
    return firstname === "" || name === "" || email === "" || contact === "" || address === "" || pin === "";
  }, [firstname, name, email, contact, address, pin]);

  const closeForm = () => {
    setFirstname("");
    setLastname("");
    setName("");
    setComments("");
    setEmail("");
    setPin("");
    setAddress("");
    setContact("");
    setSuccessful(false);
    setFormOpen(false);
  };
  return (
    <Paper className={classes.root} elevation={0}>
      <Dialog
        fullScreen={matchesFormText}
        open={formOpen}
        onClose={closeForm}
        fullWidth
        maxWidth="lg"
        classes={{ paper: classes.formContainer }}>
        {successful ? (
          <Container maxWidth="lg" className={classes.formFilled}>
            <Box display="flex" flexDirection="row-reverse" justifyContent="space-between" alignItems="center" mb={4}>
              <IconButton onClick={closeForm}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box mb={matchesFormText ? 4 : 8} display="flex" flexDirection="column" alignItems="center">
              <SuccessfulIcon />
            </Box>
            <Box display="flex" flexDirection="column" alignItems={matchesFormText ? "left" : "center"}>
              <Box
                fontSize={matchesFormText ? "h6.fontSize" : "h4.fontSize"}
                fontWeight={500}
                textAlign={matchesFormText ? "left" : "center"}
                fontFamily="Work Sans"
                color="rgba(22, 54, 102, 1)"
                mb={matchesFormText ? 4 : 8}>
                Your data has been successfully recorded. We will reach out to you soon.
              </Box>
              <Box
                fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                fontWeight={400}
                fontFamily="Work Sans"
                textAlign={matchesFormText ? "left" : "center"}
                color="rgba(22, 54, 102, 1)"
                mb={matchesFormText ? 4 : 8}>
                For further assistance, please contact us at +91-8017944104 or email us at contactus@nirmaan.com
              </Box>
              <Box>
                <Button variant="contained" disableElevation className={classes.CTAButton}>
                  <Box
                    fontSize={matches ? "body1.fontSize" : "h6.fontSize"}
                    fontWeight={500}
                    fontFamily="Work Sans"
                    color="rgba(244, 245, 248, 0.95)"
                    onClick={closeForm}>
                    OKAY
                  </Box>
                </Button>
              </Box>
            </Box>
          </Container>
        ) : (
          <Container maxWidth="lg" className={classes.form}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mb={4}>
              <Box
                fontSize={matchesFormText ? "h5.fontSize" : "h3.fontSize"}
                fontWeight={400}
                fontFamily="Work Sans"
                color="rgba(22, 54, 102, 1)">
                Partner with us
              </Box>
              <IconButton onClick={closeForm}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Grid container spacing={3} className={classes.gridContainer}>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  First Name*
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter name"
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Last Name
                </Box>
                <CssTextField
                  fullWidth
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                  variant="standard"
                  placeholder="Enter last name"
                />
              </Grid>
              <Grid item sm={4} xs={12} />
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Business Name*
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  E-mail*
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter e-mail"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Contact*
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter mobile no."
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>,
                  }}
                />
              </Grid>
              <Grid item sm={8} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Business Address*
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Pin Code*
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter pin code"
                  value={pin}
                  onChange={(event) => setPin(event.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Business GST Number
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter GST number"
                  value={comments}
                  onChange={(event) => setComments(event.target.value)}
                />
              </Grid>
            </Grid>
            <Box>
              <Button variant="contained" disableElevation className={classes.CTAButton} disabled={isDisabled}>
                <Box
                  fontSize={matches ? "body1.fontSize" : "h6.fontSize"}
                  fontWeight={500}
                  fontFamily="Work Sans"
                  color="rgba(244, 245, 248, 0.95)"
                  onClick={() => setSuccessful(true)}>
                  SUBMIT
                </Box>
              </Button>
            </Box>
            <Box
              fontSize={matchesFormText ? "body2.fontSize" : "body1.fontSize"}
              fontWeight={400}
              fontFamily="Work Sans"
              color="rgba(167, 183, 208, 1)"
              pt={2}>
              For further assistance, please contact us at +91-8017944104 or email at contactus@nirmaanhaat.com
            </Box>
          </Container>
        )}
      </Dialog>
      <Container maxWidth="lg">
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Box mr={8} className={classes.imageContainer}>
            <DealerImage className={classes.image} />
            <DealerImageSmall className={classes.imageSmall} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              fontSize={matches ? "h4.fontSize" : "h3.fontSize"}
              fontWeight={600}
              fontFamily="Cabin"
              color="rgba(22, 54, 102, 1)"
              mb={5}>
              Partner & grow with NIRMAAN
            </Box>
            <Box
              fontSize={matches ? "h6.fontSize" : "h5.fontSize"}
              fontWeight={500}
              fontFamily="Work Sans"
              color="rgba(22, 54, 102, 0.8)"
              mb={10}>
              Become a channel partner to sell our products and see your trade business sky-rocket
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              maxWidth="85%"
              mb={15}
              className={classes.features}>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                <DealerGrowthIcon />
                <Box
                  fontSize={matches ? "caption.fontSize" : "body1.fontSize"}
                  fontWeight={400}
                  textAlign="center"
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 0.8)">
                  2x Growth
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                <DealerInventoryIcon />
                <Box
                  fontSize={matches ? "caption.fontSize" : "body1.fontSize"}
                  fontWeight={400}
                  textAlign="center"
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 0.8)">
                  No Inventory
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                <DealerProfitsIcon />
                <Box
                  fontSize={matches ? "caption.fontSize" : "body1.fontSize"}
                  fontWeight={400}
                  textAlign="center"
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 0.8)">
                  Assured Profits
                </Box>
              </Box>
            </Box>
            <Box>
              <Button
                variant="contained"
                disableElevation
                className={classes.CTAButton}
                onClick={() => setFormOpen(true)}>
                <Box
                  fontSize={matches ? "body1.fontSize" : "h6.fontSize"}
                  fontWeight={500}
                  fontFamily="Work Sans"
                  color="rgba(244, 245, 248, 0.95)">
                  GROW WITH US
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Dealer;
