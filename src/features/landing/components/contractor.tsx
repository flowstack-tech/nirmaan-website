import React, { useMemo, useState } from "react";

import { createStyles, InputAdornment, makeStyles, useMediaQuery, useTheme, withStyles } from "@material-ui/core";

import { Box } from "@components/box";
import { Button, IconButton } from "@components/button";
import { Container } from "@components/container";
import { Dialog } from "@components/dialog";
import { Grid } from "@components/grid";
import { MenuItem } from "@components/menu";
import { Paper } from "@components/paper";
import { TextField } from "@components/text-field";

import { ReactComponent as AddIcon } from "../assets/add-icon.svg";
import { ReactComponent as CloseIcon } from "../assets/close-icon.svg";
import { ReactComponent as ContractorImage } from "../assets/contractor.svg";
import { ReactComponent as ContractorBestPriceIcon } from "../assets/contractor-best-price.svg";
import { ReactComponent as ContractorBestQualityIcon } from "../assets/contractor-best-quality.svg";
import { ReactComponent as ContractorHassleFreeIcon } from "../assets/contractor-hassle-free.svg";
import { ReactComponent as ContractorImageSmall } from "../assets/contractor-small.svg";
import { ReactComponent as SuccessfulIcon } from "../assets/successful-icon.svg";

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
    selectInput: {
      color: "rgb(133, 133, 133)",
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

const Contractor: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(540));
  const matchesForm = useMediaQuery(theme.breakpoints.down(720));
  const matchesFormText = useMediaQuery(theme.breakpoints.down("xs"));
  const [formOpen, setFormOpen] = useState(false);

  const [materials, setMaterials] = useState<string[]>(["Select Material"]);
  const [quantities, setQuantities] = useState<string[]>([""]);
  const [projectName, setProjectName] = useState<string>("");
  const [projectSize, setProjectSize] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [pin, setPin] = useState<string>("");
  const [comments, setComments] = useState<string>("");

  const [successful, setSuccessful] = useState(false);

  const isDisabled = useMemo(() => {
    for (let i = 0; i < materials.length; i++) {
      if (materials[i] === "" || materials[i] === "Select Material") {
        return true;
      }
    }

    for (let i = 0; i < quantities.length; i++) {
      if (materials[i] === "") {
        return true;
      }
    }

    return name === "" || email === "" || contact === "" || address === "" || pin === "";
  }, [materials, quantities, name, email, contact, address, pin]);

  const addNewMaterial = () => {
    setMaterials((prevState) => [...prevState, "Select Material"]);
    setQuantities((prevState) => [...prevState, ""]);
  };

  const closeForm = () => {
    setMaterials(["Select Material"]);
    setQuantities([""]);
    setProjectSize("");
    setProjectName("");
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
                Order with us
              </Box>
              <IconButton onClick={closeForm}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Grid container spacing={3} className={classes.gridContainer}>
              {materials.map((_, index) => {
                return (
                  <>
                    <Grid item sm={4} xs={12}>
                      <Box
                        fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                        fontWeight={400}
                        fontFamily="Work Sans"
                        color="rgba(22, 54, 102, 1)"
                        mb={1}
                        hidden={index !== 0}>
                        Material
                      </Box>
                      <CssTextField
                        variant="standard"
                        select
                        fullWidth
                        value={materials[index]}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setMaterials((prevState) => {
                            const newMaterials = [...prevState];
                            newMaterials[index] = event.target.value;
                            return newMaterials;
                          });
                        }}
                        InputProps={
                          materials[index] === "Select Material"
                            ? {
                                className: classes.selectInput,
                              }
                            : {}
                        }
                        placeholder="Select Material">
                        {[
                          "Select Material",
                          "Bricks and Blocks",
                          "Concrete",
                          "Chemicals",
                          "Floorings",
                          "Sand and Aggregate",
                          "Paint",
                          "Cement",
                          "Steel",
                        ].map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </CssTextField>
                    </Grid>
                    <Grid item sm={4} xs={10}>
                      <Box
                        fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                        fontWeight={400}
                        fontFamily="Work Sans"
                        color="rgba(22, 54, 102, 1)"
                        mb={1}
                        hidden={index !== 0}>
                        Quantity
                      </Box>
                      <CssTextField
                        fullWidth
                        type="number"
                        variant="standard"
                        placeholder="Enter quantity"
                        value={quantities[index]}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                          setQuantities((prevState) => {
                            const newQuantities = [...prevState];
                            newQuantities[index] = event.target.value;
                            return newQuantities;
                          });
                        }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                        }}
                      />
                    </Grid>
                    <Grid item sm={4} xs={2}>
                      {index === materials.length - 1 ? (
                        <Box height="100%" display="flex" flexDirection="column-reverse" alignItems="flex-start">
                          <IconButton onClick={addNewMaterial}>
                            <AddIcon />
                            <Box
                              fontSize={matchesFormText ? "body1.fontSize" : "body1.fontSize"}
                              fontWeight={400}
                              fontFamily="Work Sans"
                              color="rgba(167, 183, 208, 1)"
                              pl={1}
                              hidden={matchesForm}>
                              Add new material
                            </Box>
                          </IconButton>
                        </Box>
                      ) : (
                        <></>
                      )}
                    </Grid>
                  </>
                );
              })}
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Project Name
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Enter project name"
                  value={projectName}
                  onChange={(event) => setProjectName(event.target.value)}
                />
              </Grid>
              <Grid item sm={4} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Project Size
                </Box>
                <CssTextField
                  fullWidth
                  value={projectSize}
                  onChange={(event) => setProjectSize(event.target.value)}
                  variant="standard"
                  placeholder="Enter investment"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Cr.</InputAdornment>,
                  }}
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
                  Name*
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
                  Delivery Address*
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
              <Grid item sm={8} xs={12}>
                <Box
                  fontSize={matchesFormText ? "body1.fontSize" : "h5.fontSize"}
                  fontWeight={400}
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 1)"
                  mb={1}>
                  Additional Comments
                </Box>
                <CssTextField
                  fullWidth
                  variant="standard"
                  placeholder="Comments"
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
            <ContractorImage className={classes.image} />
            <ContractorImageSmall className={classes.imageSmall} />
          </Box>
          <Box display="flex" flexDirection="column">
            <Box
              fontSize={matches ? "h4.fontSize" : "h3.fontSize"}
              fontWeight={600}
              fontFamily="Cabin"
              color="rgba(22, 54, 102, 1)"
              mb={5}>
              Why buy from NIRMAAN?
            </Box>
            <Box
              fontSize={matches ? "h6.fontSize" : "h5.fontSize"}
              fontWeight={500}
              fontFamily="Work Sans"
              color="rgba(22, 54, 102, 0.8)"
              mb={10}>
              Get the best price for your material without compromising the quality
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" mb={15} className={classes.features}>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                <ContractorBestPriceIcon />
                <Box
                  fontSize={matches ? "caption.fontSize" : "body1.fontSize"}
                  fontWeight={400}
                  textAlign="center"
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 0.8)">
                  Procurement
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                <ContractorBestQualityIcon />
                <Box
                  fontSize={matches ? "caption.fontSize" : "body1.fontSize"}
                  fontWeight={400}
                  textAlign="center"
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 0.8)">
                  Documentation
                </Box>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center">
                <ContractorHassleFreeIcon />
                <Box
                  fontSize={matches ? "caption.fontSize" : "body1.fontSize"}
                  fontWeight={400}
                  textAlign="center"
                  fontFamily="Work Sans"
                  color="rgba(22, 54, 102, 0.8)">
                  Data security
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
                  ORDER WITH US
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
};

export default Contractor;
