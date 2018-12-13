import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/monroe1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>James Monroe:</Headline>
        <Topic>Bio</Topic>
        <Text>
          James Monroe was born on April 28, 1758, in his parents' house located
          in a wooded area of Westmoreland County, Virginia. The marked site is
          one mile from the unincorporated community known today as Monroe Hall,
          Virginia. The James Monroe Family Home Site was listed on the National
          Register of Historic Places in 1979. His father Spence Monroe
          (1727–1774) was a moderately prosperous planter who also practiced
          carpentry. His mother Elizabeth Jones (1730–1772) married Spence
          Monroe in 1752 and they had five children: Elizabeth, James, Spence,
          Andrew, and Joseph Jones. His paternal great-grandfather Patrick
          Andrew Monroe emigrated to America from Scotland in the mid-17th
          century. In 1650 he patented a large tract of land in Washington
          Parish, Westmoreland County, Virginia. Monroe's mother was the
          daughter of a wealthy Welsh immigrant who had settled in nearby King
          George County, Virginia. Also among James Monroe's ancestors were
          French Huguenot immigrants, who came to Virginia in 1700. At age
          eleven, Monroe was enrolled in the lone school in the county. Monroe
          attended this school for only eleven weeks a year, as his labor was
          needed on the farm. During this time, Monroe formed a lifelong
          friendship with an older classmate, John Marshall. Monroe's mother
          died in 1772, and his father died two years later. Though he inherited
          property from both of his parents, the sixteen-year-old Monroe was
          forced to withdraw from school to support his younger brothers. His
          childless maternal uncle, Joseph Jones, became a surrogate father to
          Monroe and his siblings. A member of the Virginia House of Burgesses,
          Jones took Monroe to the capital of Williamsburg, Virginia and
          enrolled him in the College of William and Mary. Jones also introduced
          Monroe to important Virginians such as Thomas Jefferson, Patrick
          Henry, and George Washington. In 1774, opposition to the British
          government grew in the Thirteen Colonies in reaction to the
          "Intolerable Acts," and Virginia sent a delegation to the First
          Continental Congress. Monroe became involved in the opposition to Lord
          Dunmore, the colonial governor of Virginia, and he took part in the
          storming of the Governor's Palace.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "There is a price tag on human liberty. That price is the willingness
          to assume the responsibilities of being free men. Payment of this
          price is a personal matter with each of us."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> April 28, 1758 Monroe Hall, Colony of
            Virginia, British America
          </Item>

          <Item>
            <strong>Died:</strong> July 4, 1831 (aged 73) New York City, U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic-Republican
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1817 – March 4, 1825
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
