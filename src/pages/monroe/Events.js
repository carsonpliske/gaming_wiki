import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/monroe1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>James Monroe:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "There is a price tag on human liberty. That price is the willingness
          to assume the responsibilities of being free men. Payment of this
          price is a personal matter with each of us."
        </Subhead>
        <Text>
          <Date>01/1819: The Panic of 1819</Date>
          The Panic of 1819 begins to take shape. A sharp decline in real estate
          values and a severe credit contraction (an inability to secure bank
          loans) inflates the currency and causes imports and prices to fall. In
          March, the price of cotton collapses in the English market. The
          conservative policies of the Second Bank of the United States, founded
          in 1816, accelerates the crisis, which ends around 1823.
          <Date>03/06/1819: McCulloch v. Maryland</Date> Under Chief Justice
          John Marshall, the United States Supreme Court rules against the state
          of Maryland in McCulloch v. Maryland. In a unanimous decision, the
          Court finds that states cannot tax federal agencies. The ruling
          establishes a precedent of broad federal power, marking a blow to
          states' rights.
        </Text>
      </AboutWrapper>
    );
  }
}
const AboutWrapper = styled.div`
  padding: 50px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
`;
const Headline = styled.h1`
  font-size: 50px;
  line-height: 30px;
`;
const Topic = styled.h1`
  font-size: 50px;
  color: #999;
  line-height: 40px;
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 19px;
`;

export default Events;
