import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/johnson1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Lyndon Johnson:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Yesterday is not ours to recover, but tomorrow is ours to win or
          lose.”{" "}
        </Subhead>
        <Text>
          <Date>04/11/1965: Elementary and Secondary Education Act</Date>Johnson
          signs the Elementary and Secondary Education Act.
          <Date>07/30/1965: Medicare, Medicaid created</Date>
          Johnson signs legislation creating Medicare and Medicaid.
          <Date>08/05/1965: Voting Rights Act becomes law</Date>Johnson signs
          the Voting Rights Act into law.
          <Date>02/10/1967: Twenty-Fifth Amendment ratified</Date>
          The Twenty-Fifth Amendment to the Constitution is ratified, providing
          rules of succession upon the death or incapacitation of the President,
          and enabling the President to appoint a new vice-president in the case
          of a vacancy.
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
