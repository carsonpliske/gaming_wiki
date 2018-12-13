import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/wbush1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>George W. Bush:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “I know the human being and fish can co-exist peacefully.”{" "}
        </Subhead>
        <Text>
          <Date>06/07/2001: Trillion dollar tax cut</Date>President Bush signs a
          $1.35 trillion tax cut into law. Although the amount falls short of
          the $1.60 trillion the administration has been seeking, the bill does
          slash income tax rates across the board and provides for the gradual
          elimination of the estate tax.
          <Date>01/07/2003: Further tax cuts</Date>
          Bush reveals a tax-cut plan of $674 billion over ten years. He
          suggests that the plan will stimulate the U.S. economy, end the
          recession, and create jobs. Democrats dismiss the plan as financially
          irresponsible and favorable to the rich.
          <Date>05/28/2003: Bush signs third largest tax cut in history</Date>
          Bush signs into law his $350 billion tax-cut package, the
          third-largest in history, in an effort to strengthen the U.S. economy
          and reverse a trend of increasing unemployment. Congressional
          Democrats who opposed the bill argued it is skewed towards the
          wealthy.
          <Date>11/05/2003: Bush bans late term abortions</Date>
          Bush signs into law a ban on late-term abortion, the first law to ban
          an abortion procedure since the Supreme Court’s 1973 decision in Roe
          v. Wade. The Supreme Court later upholds the ban.
          <Date>05/17/2004: Massachusetts approves same-sex marriage</Date>
          Massachusetts becomes the first state to offer marriage licenses to
          same-sex couples. Bush reiterates to Congress his call for a
          constitutional amendment banning same sex marriage.
          <Date>06/28/2005: Senate passes energy bill</Date>The Senate passes an
          omnibus energy bill aimed at supporting the traditional energy
          industries of oil and natural gas, but also provide tax incentives for
          the use of alternative energy sources such as solar and wind power.
          <Date>07/19/2006: Bush vetoes stem cell research</Date> President Bush
          vetoes a bill to lift constraints on federal funding of embryonic stem
          cell research, and subsequently, the House unsuccessfully attempts to
          override the veto. This is the first veto Bush issues during his
          administration.
          <Date>10/26/2006: Bush approves border fence</Date>President Bush
          signs a bill providing for the construction of a 700-mile fence along
          the United States-Mexico border, in an effort to increase border
          security and stem illegal immigration.
          <Date>07/26/2007: Antiterrorism Bill</Date>Congress passes the
          Antiterrorism Bill, which will allow for the screening of air and sea
          cargo and will give more money in government antiterrorism grants to
          states with the greatest risk for terrorist attacks.
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
