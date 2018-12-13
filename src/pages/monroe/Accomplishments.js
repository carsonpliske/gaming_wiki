import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/monroe1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>James Monroe:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "There is a price tag on human liberty. That price is the willingness
          to assume the responsibilities of being free men. Payment of this
          price is a personal matter with each of us."
        </Subhead>
        <Text>
          <Date>04/28/1817: Rush-Bagot Agreement</Date>
          Britain's minister to the United States, Charles Bagot, agrees to the
          conditions of the Rush-Bagot Agreement. Following negotiations, acting
          Secretary of State Richard Rush sends the document to Britain in
          August 1816. This is the final version of a treaty that Monroe, while
          secretary of state under Madison, negotiated with British foreign
          minister Robert Stewart Castlereagh. The agreement limits naval
          capacity on the Great Lakes; in doing so, it alleviates possible
          tension between the two nations following the War of 1812. Each
          country is held to one ship on Lakes Champlain and Ontario, and two
          ships on all the other lakes. Limits are also placed on ship tonnage
          and armaments.
          <Date>12/10/1817: Mississippi becomes a state</Date> Mississippi
          becomes the twentieth state in the Union.
          <Date>12/03/1818: Illinois becomes a state</Date>Illinois is admitted
          as the twenty-first state of the Union.
          <Date>12/14/1818: Alabama becomes a state</Date>
          Alabama becomes the twenty-second state of the Union.
          <Date>3/03/1820: Missouri Compromise</Date> After months of fierce
          debate, Congress agrees to the first Missouri Compromise, addressing
          congressional jurisdiction over the conditions of statehood. After
          Maine petitions Congress for statehood, the balance of free and slave
          states in Senate will be maintained with a free Maine and a slave
          Missouri. The Compromise also addresses all land in the Louisiana
          Purchase territory and establishes that land north of the 36 degree,
          30' line—with the exception of Missouri—will be free, while territory
          below the line will be slave. In February 1821, Congress admits Maine
          and Missouri as states, formalizing the Missouri Compromise. Henry
          Clay, “the Great Pacificator,” is by and large the architect of the
          Compromise.
          <Date>03/15/1820: Maine becomes a state</Date> Maine is admitted as
          the twenty-third state of the Union.
          <Date>08/10/1821: Missouri becomes a state</Date> Missouri is admitted
          as the twenty-fourth state of the Union.
          <Date>05/22/1824: Tariff of 1824 </Date> Monroe signs the Tariff of
          1824 into law, implementing protectionist measures in support of local
          manufactures and goods. Complaints arise in the South with
          cotton-growers fearful of British retaliation for the increase in
          price. Northern manufacturers are pleased with the law.
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
