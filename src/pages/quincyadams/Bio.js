import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/quincyadams1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Quincy Adams:</Headline>
        <Topic>Bio</Topic>
        <Text>
          John Quincy Adams was born on July 11, 1767, to John and Abigail Adams
          (née Smith) in a part of Braintree, Massachusetts that is now Quincy.
          He was named for his mother's maternal grandfather, Colonel John
          Quincy, after whom Quincy, Massachusetts, is named. Young Adams was
          educated by private tutors – his cousin James Thaxter and his father's
          law clerk, Nathan Rice. He soon began to exhibit his literary skills,
          and in 1779 he initiated a diary which he kept until just before he
          died in 1848. Until the age of ten, Adams grew up on the family farm
          in Braintree, largely in the care of his mother. Though frequently
          absent due to his participation in the American Revolution, John Adams
          maintained a correspondence with his son, encouraging him to read
          works by authors like Thucydides and Hugo Grotius. With his father's
          encouragement, Adams would also translate classical authors like
          Virgil, Horace, Plutarch, and Aristotle. In 1778, Adams and his father
          departed for Europe, where John Adams would serve as part of American
          diplomatic missions in France and the Netherlands. During this period,
          Adams studied French, Greek, and Latin, and attended several schools,
          including Leiden University. In 1781, Adams traveled to Saint
          Petersburg, Russia, where he served as the secretary of American
          diplomat Francis Dana. He returned to the Netherlands in 1783, and
          accompanied his father to Great Britain in 1784. Though Adams enjoyed
          Europe, he and his family decided he needed to return to the United
          States to complete his education and eventually launch a political
          career. Adams returned to the United States in 1785 and earned
          admission as a member of the junior class of Harvard College the
          following year. He was elected to Phi Beta Kappa and excelled
          academically, graduating second in his class in 1787. After graduating
          from Harvard, he studied law with Theophilus Parsons in Newburyport,
          Massachusetts from 1787 to 1789. Adams initially opposed the
          ratification of the United States Constitution, but he ultimately came
          to accept the document, and in 1789 his father was elected as the
          first Vice President of the United States. In 1790, Adams opened his
          own legal practice in Boston. Despite some early struggles, he
          experienced moderate success as an attorney and was able to establish
          his financial independence from his parents.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Courage and perseverance have a magical talisman, before which
          difficulties disappear and obstacles vanish into air.”
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> July 11, 1767 Braintree, Province of
            Massachusetts Bay, British America
          </Item>

          <Item>
            <strong>Died:</strong> February 23, 1848 (aged 80) Washington, D.C.,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Whig
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1825 – March 4, 1829
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
