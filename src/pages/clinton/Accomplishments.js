import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/clinton1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Bill Clinton:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “We all do better when we work together. Our differences do matter,
          but our common humanity matters more.”{" "}
        </Subhead>
        <Text>
          <Date>02/05/1993: Family Medical Leave Act</Date>President Clinton
          signs the Family Medical Leave Act that requires companies to provide
          workers with up to three months of unpaid leave for family and medical
          emergencies.
          <Date>08/10/1993: Omnibus Budget Reconciliation Act</Date>
          President Clinton signs the Omnibus Budget Reconciliation Act. The
          legislation, which passes both houses of Congress by slim majorities,
          lays out a plan to reduce the budget deficit by $496 billion through
          1998, using a combination of spending cuts and tax increases.
          <Date>
            09/13/1994: Clinton expands law enforcement, death penalty
          </Date>
          President Clinton signs into law the Violent Crime Control and Law
          Enforcement Act that includes provisions providing for the hiring of
          100,000 more policemen, and the expansion of the death penalty to
          cover more than 50 federal crimes.
          <Date>12/01/1994: General Agreement on Tariffs approved</Date>
          The Senate votes to approve the General Agreement on Tariffs and Trade
          (GATT) that 117 nations, including the United States, agree to in
          December 1993. The agreement cuts tariffs by more than a third on a
          wide-range of products and creates a freer international market for
          goods.
          <Date>01/23/1995: Congressional Accountability Act</Date>President
          Clinton signs the Congressional Accountability Act, requiring Congress
          to abide by the same anti-discrimination workplace rules that apply
          throughout the rest of the country.
          <Date>08/21/1996: Expanding health care coverage</Date>President
          Clinton signs a health care reform bill that he expects to expand
          coverage for many Americans. The measure specifically allows workers
          who change or lose their jobs to keep their health insurance coverage.
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

export default Accomplishments;
