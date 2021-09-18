import React, { useRef } from "react";

import { createStyles, makeStyles } from "@material-ui/core";

import { Container } from "@components/container";
import Assistant from "@features/landing/components/assistant";
import Contractor from "@features/landing/components/contractor";
import Dealer from "@features/landing/components/dealer";
import Footer from "@features/landing/components/footer";
import Hero from "@features/landing/components/hero";
import Products from "@features/landing/components/products";
import Supplier from "@features/landing/components/supplier";

import Header from "../components/header";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  }),
);

const Home: React.FC = () => {
  const classes = useStyles();

  const heroRef = useRef(null);
  const contractorRef = useRef(null);
  const dealerRef = useRef(null);
  const supplierRef = useRef(null);

  return (
    <Container className={classes.root} maxWidth="xl">
      <Header contractorRef={contractorRef} dealerRef={dealerRef} supplierRef={supplierRef} heroRef={heroRef} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <Products />
      <div ref={contractorRef}>
        <Contractor />
      </div>
      <Assistant />
      <div ref={dealerRef}>
        <Dealer />
      </div>
      <div ref={supplierRef}>
        <Supplier />
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
