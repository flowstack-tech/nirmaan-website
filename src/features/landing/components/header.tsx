import React, { useState } from "react";

import { createStyles, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";

import { Box } from "@components/box";
import { IconButton } from "@components/button";
import { Container } from "@components/container";
import { Divider } from "@components/divider";
import { Drawer } from "@components/drawer";
import { List, ListItem, ListItemText } from "@components/list";
import { Paper } from "@components/paper";

import { ReactComponent as DropdownIcon } from "../assets/dropdown.svg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#0C1A30",
      borderRadius: 0,
      position: "fixed",
      top: 0,
      width: "100%",
      zIndex: 1200,
      paddingTop: 20,
      paddingBottom: 20,
    },
    headerList: {
      paddingTop: 80,
      paddingBottom: 0,
    },
    divider: {
      background: "rgba(161, 174, 192, 1)",
    },
  }),
);

type HeaderProps = {
  heroRef: React.MutableRefObject<any>;
  contractorRef: React.MutableRefObject<any>;
  dealerRef: React.MutableRefObject<any>;
  supplierRef: React.MutableRefObject<any>;
};

const Header: React.FC<HeaderProps> = ({ contractorRef, dealerRef, supplierRef, heroRef }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down(660));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dropdownMatches = useMediaQuery(theme.breakpoints.down(500));

  const scrollTo = (ref: React.MutableRefObject<any>) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <Paper className={classes.root} elevation={0}>
      <Container maxWidth="lg">
        <Box flexDirection="row" display="flex" justifyContent="space-around" alignItems="center">
          <Box
            fontSize={matches ? "h5.fontSize" : "h3.fontSize"}
            fontWeight={800}
            fontFamily="Work Sans"
            color="#FFFFFF"
            style={{ cursor: "pointer" }}
            flex={2}
            onClick={() => scrollTo(heroRef)}>
            NIRMAAN
          </Box>
          {dropdownMatches ? (
            <Box flexDirection="row" display="flex" justifyContent="flex-end" flex={2}>
              <IconButton
                color="primary"
                aria-label="show menu"
                onClick={() => setDrawerOpen((prevState) => !prevState)}>
                <DropdownIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                anchor="top"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                style={{ zIndex: 1100 }}>
                <Box role="presentation" onClick={() => setDrawerOpen(false)} onKeyDown={() => setDrawerOpen(false)}>
                  <List className={classes.headerList}>
                    <ListItem button>
                      <ListItemText>
                        <Box
                          fontSize="body2.fontSize"
                          fontWeight={400}
                          fontFamily="Work Sans"
                          color="rgba(22, 54, 102, 1)"
                          onClick={() => scrollTo(contractorRef)}>
                          Customer
                        </Box>
                      </ListItemText>
                    </ListItem>
                    <Divider className={classes.divider} variant="middle" />
                    <ListItem button>
                      <ListItemText>
                        <Box
                          fontSize="body2.fontSize"
                          fontWeight={400}
                          fontFamily="Work Sans"
                          color="rgba(22, 54, 102, 1)"
                          onClick={() => scrollTo(dealerRef)}>
                          Dealer
                        </Box>
                      </ListItemText>
                    </ListItem>
                    <Divider className={classes.divider} variant="middle" />
                    <ListItem button>
                      <ListItemText>
                        <Box
                          fontSize="body2.fontSize"
                          fontWeight={400}
                          fontFamily="Work Sans"
                          color="rgba(22, 54, 102, 1)"
                          onClick={() => scrollTo(supplierRef)}>
                          Supplier
                        </Box>
                      </ListItemText>
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </Box>
          ) : (
            <Box flexDirection="row" display="flex" justifyContent="space-between" flex={2}>
              <Box
                fontSize={matches ? "caption.fontSize" : "h5.fontSize"}
                fontWeight={500}
                fontFamily="Work Sans"
                color="#FFFFFF"
                style={{ cursor: "pointer" }}
                onClick={() => scrollTo(contractorRef)}>
                Customer
              </Box>
              <Box
                fontSize={matches ? "caption.fontSize" : "h5.fontSize"}
                fontWeight={500}
                fontFamily="Work Sans"
                color="#FFFFFF"
                style={{ cursor: "pointer" }}
                onClick={() => scrollTo(dealerRef)}>
                Dealer
              </Box>
              <Box
                fontSize={matches ? "caption.fontSize" : "h5.fontSize"}
                fontWeight={500}
                fontFamily="Work Sans"
                color="#FFFFFF"
                style={{ cursor: "pointer" }}
                onClick={() => scrollTo(supplierRef)}>
                Supplier
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Paper>
  );
};

export default Header;
