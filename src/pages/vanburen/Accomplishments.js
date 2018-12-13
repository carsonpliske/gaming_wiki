import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/vanburen1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Martin van Buren:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The less government interferes with private pursuits, the better for
          general prosperity."
        </Subhead>
        <Text>
          <Date>01/1838: Van Buren remains neutral</Date>
          Following the Caroline incident, Van Buren criticizes the British but
          maintains a neutral stance in the conflict. While Van Buren's peace
          appeals to the invading partisans and enjoys initial success, even the
          Neutrality Law of 1838 -- which provides for the arrest of people and
          the confiscation of arms, vehicles, and supplies flowing illegally
          across the border -- fails to deter additional incursions. Rebel
          assistance by secret rebel societies will continue in Detroit,
          Cleveland, and along the New York and Vermont borders.
          <Date>03/25/1839: Ending the Aroostook War</Date> A treaty ending the
          Aroostook War, which begins in 1838, is signed between the United
          States and Canada. Lumberjacks in Maine and New Brunswick had disputed
          the border and disagreed on the ownership of trees in the Aroostook
          Valley; the claims stemmed from an ambiguous boundary determination in
          the 1783 Treaty of Paris. Van Buren sends General Winfield Scott to
          calm matters in the area before working toward the treaty.
          <Date>07/04/1840: Independent Treasury Act</Date>
          By signing the Independent Treasury Act, Van Buren “divorces” the
          federal Treasury Department from its relationship with all banks. His
          action stems from the controversy surrounding the Deposit Act of 1836.
          The Whigs will repeal the Independent Treasury Act in 1841; it will be
          restored in 1846.
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
