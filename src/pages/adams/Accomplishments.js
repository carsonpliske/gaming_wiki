import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/adams1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Adams:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Let us tenderly and kindly cherish therefore, the means of knowledge.
          Let us dare to read, think, speak, and write .”{" "}
        </Subhead>
        <Text>
          <Date>01/08/1798: The Eleventh Amendment</Date>
          The Eleventh Amendment to the Constitution of the United States is
          declared in full force by President Adams. It stipulates that federal
          courts shall not have the jurisdiction over litigation between
          individuals from one state against individuals from another state.
          <Date>04/03/1798: XYZ Affair exposed</Date> President Adams exposes
          the XYZ affair, providing Congress with letters from the peace
          commission indicating French efforts to bribe and intimidate U.S.
          officials seeking to speak with French diplomat, Charles Maurice
          Talleyrand. The reaction was one of outrage and intimidation.
          <Date>04/07/1798: Mississippi Territory</Date>Congress establishes the
          government for the new Mississippi Territory. The Spanish had ceded
          the territory to the United States in the 1795 Treaty of San Lorenzo.
          President Adams appoints native Winthrop Sergeant as governor and
          selects the town of Natchez to serve as its first capital.
          <Date>06/18/1798: Alien and Sedition Acts</Date>
          The first of four acts known collectively as the Alien and Sedition
          Acts is adopted. The Alien and Sedition acts aimed to curb criticism
          of administration policies and prevent internal subversion. The first
          act, stipulating requirements for naturalized citizenship, demanded
          residence in the United States for period of fourteen years and a
          declaration of intention for five years.
          <Date>04/04/1800: Federal Bankruptcy Act</Date>Congress passes and
          Adams signs into law the Federal Bankruptcy Act, providing merchants
          and traders protection from debtors.
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
