import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/obama1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Barack Obama:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Change will not come if we wait for some other person, or if we wait
          for some other time. We are the ones we've been waiting for. We are
          the change that we seek.”
        </Subhead>
        <Text>
          <Date>01/29/2009: Signing of first bill</Date>The Lilly Ledbetter Fair
          Pay Act become law. The bill makes it easier for people to challenge
          unequal pay complaints and is designed to help address the wage gap
          between men and women.
          <Date>
            02/17/2009: American Recovery and Reinvestment Act of 2009
          </Date>
          The American Recovery and Reinvestment Act is signed into law by
          President Obama while in Denver, Colorado. The purpose of the act was
          to save and create jobs and to provide relief to those most affected
          by the economic crisis of 2008-2009.
          <Date>10/20/2009: HIV travel ban</Date>
          Obama lifts a 22-year-old ban that restricts those with HIV/AIDS from
          entering the United States.
          <Date>10/28/2009: Hate Crimes Prevention Act</Date>
          The Matthew Shepard and James Byrd, Jr., Hate Crimes Prevention Act
          becomes law to help jurisdictions to investigate and prosecute hate
          crimes more effectively.
          <Date>03/20/2010: Affordable Care Act</Date>
          The Patient Protection and Affordable Care Act, known as Obamacare,
          becomes law. This is the most significant regulatory makeover of the
          U.S. healthcare system since the 1960s. Under the new regulations,
          Obama sought to increase quality, affordability, and access to
          healthcare.
          <Date>12/22/2010: “Don’t Ask, Don’t Tell”</Date>Obama repeals the
          “Don’t Ask, Don’t Tell” policy, which allows people to openly be gay,
          lesbian, and bisexual while serving in the U.S. Armed Forces.
          <Date>08/02/2011: Budget Control Act</Date> The Budget Control Act
          becomes law. It raises the federal debt ceiling, causes the United
          States to avoid default, and creates a bipartisan committee to discuss
          debt issues.
          <Date>09/08/2011: American Jobs Act</Date>President Obama makes an
          address to the joint session of Congress to present the American Jobs
          Act, which is designed to improve the U.S. economy.
          <Date>01/02/2013: Taxpayer relief</Date>Obama signs the American
          Taxpayer Relief Act. This extended tax breaks for the majority of
          Americans while raising the tax rates for top earners.
          <Date>08/09/2013: Student loans</Date>Obama signs into law the
          Bipartisan Student Loan Certainty Act of 2013. This act outlines how
          the government should distribute loans to students and other tactics
          for helping students with crippling debt.
          <Date>02/07/2014: Agriculture Act of 2014</Date>The Federal
          Agriculture Reform and Risk Management Act of 2014 is signed into law.
          This act authorizes $956 billion for increased awareness and spending
          on nutrition and agriculture programs in the United States from 2014
          to 2018.
          <Date>02/12/2014: Minimum wage</Date>Obama signs an executive order to
          increase the minimum wage from $7.25 to $10.10 for all workers on
          federal contracts.
          <Date>07/21/2014: LGBT discrimination</Date>Obama signs an executive
          order to protect the rights of LGBT employees in the workforce. This
          does not include an exemption for religious beliefs, which means
          people cannot discriminate based on their religious preference.
          <Date>11/19/2014 – Child Care grant</Date>The Child Care and
          Development Block Grant of 2014 is signed into law. This act provides
          grants to states so they can assist low-income families in finding
          child care for their children.
          <Date>02/12/2015: Veteran suicide epidemic</Date>The Clay Hunt Suicide
          Prevention for American Veterans Act is signed into law. This act
          seeks to raise awareness on veteran suicide, increases opportunity for
          veterans to receive help, and also makes the Pentagon and Veterans
          Affairs Department submit reviews of their prevention programs.
          <Date>06/26/2015: Gay marriage upheld</Date>The U.S. Supreme Court
          rules 5-4 that the Constitution guarantees a right to same-sex
          marriage.
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
