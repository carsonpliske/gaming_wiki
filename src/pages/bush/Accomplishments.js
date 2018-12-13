import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/bush1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George H.W. Bush:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "No problem of human making is too great to be overcome by human
          ingenuity, human energy, and the untiring hope of the human spirit."
        </Subhead>
        <Text>
          <Date>03/14/1989: Semi-Automatic Rifle Ban</Date>The Bush
          administration, at the urging of federal drug czar, William Bennett,
          announces a temporary ban on the importation of semi-automatic rifles,
          a reversal of President Bush's earlier statements indicating that no
          restriction on these firearms would be enacted.
          <Date>08/09/1989: Bail-Out Plan Revised</Date>
          President Bush signs into law the Financial Institutions Reform,
          Recovery, and Enforcement Act of 1989, a compromise with Congress on
          the bail-out of savings and loans. This law differs from Bush's
          February 6 proposal of financing the bail-out from the Treasury
          Department through the sale of bonds. It offers $166 billion worth of
          aid to troubled savings and loans institutions and creates a new
          government body, the Resolution Trust Company, to oversee the merger
          or liquidation of troubled banks.
          <Date>11/17/1989: Fair Labor Standards Amendments</Date>
          President Bush signs the Fair Labor Standards Amendments of 1989,
          which by April 1991 would raise the minimum wage to $4.25 an hour. The
          law was a significant victory for Bush over congressional Democrats,
          who in the spring of 1989 passed a bill, which President Bush vetoed
          on June 13, that raised the minimum wage to $4.55.
          <Date>11/21/1989: New Anti-Drug Law</Date>President Bush signs a new
          anti-drug law that provides more than $3 billion for expanded
          anti-drug programs, including treatment facilities, federal prison
          expansion, education, and law enforcement.
          <Date>07/26/1990: Americans with Disabilities Act</Date>President Bush
          signs the Americans with Disabilities Act, which affects over 43
          million Americans and forbids discrimination in employment, public
          accommodations, and transportation.
          <Date>11/15/1990: Clean Air Act Signed</Date>President Bush signs the
          Clean Air Act of 1990, which tightens air pollution standards and
          seeks to reduce urban smog, cut acid rain pollution by one-half, and
          eliminate industrial emissions of toxic chemicals by the end of the
          20th century.
          <Date>11/29/1990: Immigration Act of 1990</Date>President Bush signs
          the Immigration Act of 1990, the most extensive revision to
          immigration law in more than a half century. The new law allows for
          the admission of 700,000 aliens each year.
          <Date>11/21/1991: 1991 Civil Rights Act</Date>President Bush signs the
          Civil Rights Act of 1991, making it easier for employees to sue
          employers on grounds of discrimination.
          <Date>06/22/1992: Supplemental Appropriations Act Signed</Date>
          President Bush signs a supplemental appropriations act that provides
          aid to inner cities, specifically Los Angeles, which is trying to
          recover from the Rodney King riots of April 1992.
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
