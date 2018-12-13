import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jackson1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Andrew Jackson:</Headline>
        <Topic>Bio</Topic>
        <Text>
          Andrew Jackson was born on March 15, 1767, in the Waxhaws region of
          the Carolinas. His parents were Scots-Irish colonists Andrew and
          Elizabeth Hutchinson Jackson, Presbyterians who had emigrated from
          present day Northern Ireland two years earlier. Jackson's father was
          born in Carrickfergus, County Antrim, in current-day Northern Ireland,
          around 1738. Jackson's parents lived in the village of Boneybefore,
          also in County Antrim. His paternal family line originated in
          Killingswold Grove, Yorkshire, England. When they immigrated to North
          America in 1765, Jackson's parents probably landed in Philadelphia.
          Most likely they traveled overland through the Appalachian Mountains
          to the Scots-Irish community in the Waxhaws, straddling the border
          between North and South Carolina. They brought two children from
          Ireland, Hugh (born 1763) and Robert (born 1764). Jackson's father
          died in a logging accident while clearing land in February 1767 at the
          age of 29, three weeks before his son Andrew was born. Jackson, his
          mother, and his brothers lived with Jackson's aunt and uncle in the
          Waxhaws region, and Jackson received schooling from two nearby
          priests. Jackson's exact birthplace is unclear because of a lack of
          knowledge of his mother's actions immediately following her husband's
          funeral. The area was so remote that the border between North and
          South Carolina had not been officially surveyed. In 1824 Jackson wrote
          a letter saying that he was born on the plantation of his uncle James
          Crawford in Lancaster County, South Carolina. Jackson may have claimed
          to be a South Carolinian because the state was considering
          nullification of the Tariff of 1824, which he opposed. In the
          mid-1850s, second-hand evidence indicated that he might have been born
          at a different uncle's home in North Carolina. As a young boy, Jackson
          was easily offended and was considered something of a bully. He was,
          however, said to have taken a group of younger and weaker boys under
          his wing and been very kind to them.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The brave man inattentive to his duty, is worth little more to his
          country than the coward who deserts in the hour of danger."
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> March 15, 1767 Waxhaw Settlement between the
            Provinces of North Carolina and South Carolina, British America
          </Item>

          <Item>
            <strong>Died:</strong> June 8, 1845 (aged 78) Nashville, Tennessee,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1829 – March 4, 1837
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
