import React from "react";
import { createGlobalStyle } from "styled-components";
import Card from "./components/Card";
import Layout from "./components/Layout";
import Header from "./components/Header";

import {
  iconCalculator,
  iconKarma,
  iconTeamBuilder,
  iconSupervisor,
} from "./images";

const GlobalStyles = createGlobalStyle`
  
  body {
    /* hs l(10, 0%, 98%) */
    background-color: 	hsl(10, 0%, 98%); 
    color: hsl(229, 6%, 66%);
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    padding: 1.25rem;
    font-size: 15px;
  }
  
  h1, h2 {
    color: hsl(234, 12%, 34%);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    padding: 0;
    margin: 0;
  }
  
  h1, .h1 {
    font-size: 1.5rem;
  }
  
  .h1 {
    font-weight: 200;
  }
  
  h2 {
    font-size: 1.25rem;
  }

  header {
    margin-top: 3rem;
    margin-bottom: 4rem;
  }
  
  @media (min-width: 36em) { 
    h1, .h1 {
      font-size: 2.25rem;
    }
    
    header {
      margin-bottom: 3rem;
    }
    
  }

`;

function App() {
  return (
    <>
      <GlobalStyles />
      <div>
        <Header
          heading="Powered by Technology"
          subheading="Reliable, efficient delivery"
          intro="Our Artificial Intelligence powered tools use millions of project
          data points to ensure that your project is successful."
        />

        <Layout>
          <Card
            header="Supervisor"
            paragraph="Monitors activity to identify project roadblocks"
            icon={iconSupervisor}
            borderColor="green"
          />
          <Card
            header="Team Builder"
            paragraph="Scans our talent network to create the optimal team for your
            project."
            icon={iconTeamBuilder}
            borderColor="red"
          />
          <Card
            header="Karma"
            paragraph="Regularly evaluates our talent to ensure quality."
            icon={iconKarma}
            borderColor="yellow"
          />
          <Card
            header="Calculator"
            paragraph="Uses data from past projects to provide better delivery estimates."
            icon={iconCalculator}
            borderColor="blue"
          />
        </Layout>
      </div>
    </>
  );
}

export default App;
