import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/ford1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>General R. Ford:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "Never be satisfied with less than your very best effort. If you
          strive for the top and miss, you'll still 'beat the pack.'"
        </Subhead>
        <Text>
          <Date>09/30/1974: Economic Policy Board formed</Date>Ford forms the
          Economic Policy Board, which will oversee all aspects of economic
          policy.
          <Date>10/15/1974: Federal Elections Campaign Act</Date>Ford signs the
          Federal Elections Campaign Act of 1974, the most significant attempt
          at campaign finance reform since the 1920s.
          <Date>1/01/1975: Privacy Act of 1974</Date>
          Ford signs the Privacy Act of 1974, ensuring the right of Americans to
          individual privacy.
          <Date>03/29/1975: Tax Reduction Act of 1975</Date>Ford tells the
          nation he will reluctantly sign the Tax Reduction Act of 1975, which
          calls for a $22.8 billion tax cut.
          <Date>12/22/1975: Energy Policy Conservation Act</Date>Ford signs the
          Energy Policy Conservation Act.
          <Date>09/13/1976: Ford makes fifty-sixth veto</Date>
          Ford signs the “sunshine” law and vetoes government funding for a
          prototype electrical automobile engine, which Congress and the Senate
          override soon thereafter. The veto marks Ford's fifty-six while in
          office.
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
