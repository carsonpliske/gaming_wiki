import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/h_harrison1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>William H. Harrison:</Headline>
        <Topic>Bio</Topic>
        <Text>
          William Henry Harrison, the seventh and youngest child of Benjamin
          Harrison V and Elizabeth (Bassett) Harrison, was born on February 9,
          1773, at Berkeley Plantation, the Harrison family home along the James
          River in Charles City County, Virginia. He was a member of a prominent
          political family of English descent, whose ancestors had been in
          Virginia since the 1630s. Harrison was the last U.S. president born as
          a British subject before the American Revolution. His father was a
          Virginia planter who served as a delegate to the Continental Congress
          (1774–1777) and who signed the Declaration of Independence. The senior
          Harrison also served in the Virginia legislature, and as the fifth
          governor of Virginia (1781–84) in the years during and after the
          American Revolutionary War. William's older brother, Carter Bassett
          Harrison, represented Virginia in the U.S. House (1793–99). Harrison
          was tutored at home until age fourteen when he entered Hampden–Sydney
          College, a Presbyterian college in Virginia. He studied there for
          three years, receiving a classical education that included Latin,
          Greek, French, logic, and debate. Harrison's Episcopalian father
          removed him from the college, possibly for religious reasons, and he
          briefly attended a boys' academy in Southampton County, before being
          transferred to Philadelphia in 1790. He boarded with Robert Morris and
          entered the University of Pennsylvania, where he studied medicine
          under Doctor Benjamin Rush. Harrison later told his biographer that he
          did not enjoy the subject. In the spring of 1791, shortly after he
          began his medical studies, his father died. When the eighteen-year-old
          Harrison, who was left in the guardianship of Morris, discovered that
          his family's financial situation left him without funds for further
          schooling, he abandoned medical school in favor of a military career.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The liberties of a people depend on their own constant attention to
          its preservation."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> February 9, 1773 Charles City County, Colony
            of Virginia, British America
          </Item>

          <Item>
            <strong>Died:</strong> April 4, 1841 (aged 68) White House,
            Washington, D.C., U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Whig
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1841 – April 4, 1841
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
