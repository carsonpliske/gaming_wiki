import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/adams1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Adams:</Headline>
        <Topic>Bio</Topic>
        <Text>
          John Adams was born on October 30, 1735, (October 19, 1735, Old Style,
          Julian calendar) to John Adams Sr. and Susanna Boylston. He had two
          younger brothers, Peter and Elihu.[3] Adams' birthplace was on the
          family farm in Braintree, Massachusetts (now Quincy,
          Massachusetts).[4] His mother was from a leading medical family of
          present-day Brookline, Massachusetts. His father was a deacon in the
          Congregational Church, a farmer, a cordwainer, and a lieutenant in the
          militia.[5] John Sr. served as a selectman (town councilman) and
          supervised the building of schools and roads. Adams often praised his
          father and recalled their close relationship.[6] Adams'
          great-grandfather Henry Adams emigrated to Massachusetts from
          Braintree, Essex, England, around 1638.[5] Though raised in modest
          surroundings, Adams felt pressured to live up to his heritage. His was
          a family of Puritans, who profoundly affected their region's culture,
          laws, and traditions. By the time of John Adams' birth, Puritan tenets
          such as predestination had waned and many of their severe practices
          moderated, but Adams still "considered them bearers of freedom, a
          cause that still had a holy urgency."[7] Adams recalled that his
          parents "held every Species of Libertinage in ... Contempt and
          horror," and detailed "pictures of disgrace, or baseness and of Ruin"
          resulting from any debauchery.[3] Adams, as the eldest child, was
          compelled to obtain a formal education. This began at age six at a
          Dame school for boys and girls, conducted at a teacher's home, and was
          centered upon The New England Primer. Shortly thereafter, Adams
          attended Braintree Latin School under Joseph Cleverly, where studies
          included Latin, rhetoric, logic, and arithmetic. Adams' early
          education included incidents of truancy, a dislike for his master, and
          a desire to become a farmer. All discussion on the matter ended with
          his father's command that he remain in school: "You shall comply with
          my desires." Deacon Adams hired a new schoolmaster named Joseph Marsh,
          and his son responded positively.[8]
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Let us tenderly and kindly cherish therefore, the means of knowledge.
          Let us dare to read, think, speak, and write .”{" "}
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> October 30, 1735 Braintree Massachusetts U.S.
          </Item>

          <Item>
            <strong>Died:</strong> July 4, 1826 Quincy, Massachusetts
          </Item>

          <Item>
            <strong>Political Party:</strong> Federalist
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1797 - March 4, 1801
          </Item>
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

export default Bio;
