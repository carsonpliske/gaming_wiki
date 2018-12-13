import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/tyler1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Tyler:</Headline>
        <Topic>Bio</Topic>
        <Text>
          John Tyler was born on March 29, 1790; like his future running mate,
          William Henry Harrison, Tyler hailed from Charles City County,
          Virginia and was descended from aristocratic and politically
          entrenched families. The Tyler family traced its lineage to colonial
          Williamsburg in the 17th century. John Tyler Sr., commonly known as
          Judge Tyler, was a friend and college roommate of Thomas Jefferson and
          served in the Virginia House of Delegates alongside Benjamin Harrison
          V, father of William. The elder Tyler served four years as Speaker of
          the House of Delegates before becoming a state court judge. He
          subsequently served as governor and as a judge on the U.S. District
          Court at Richmond. His wife, Mary Marot (Armistead), was the daughter
          of a prominent plantation owner, Robert Booth Armistead. She died of a
          stroke when her son John was seven years old. With two brothers and
          five sisters, Tyler was reared on Greenway Plantation, a 1,200-acre (5
          km2) estate with a six-room manor house his father had built. The
          Tylers' forty slaves grew various crops, including wheat, corn and
          tobacco. Judge Tyler paid high wages for tutors who challenged his
          children academically. Tyler was of frail health, thin and prone to
          diarrhea throughout life. At the age of twelve, he entered the
          preparatory branch of the elite College of William and Mary,
          continuing the Tyler family's tradition of attending the college.
          Tyler graduated from the school's collegiate branch in 1807, at age
          seventeen. Among the books that formed his economic views was Adam
          Smith's The Wealth of Nations, and he acquired a lifelong love of
          Shakespeare. His political opinions were shaped by Bishop James
          Madison, the college's president and namesake of the future president;
          the bishop served as a second father and mentor to Tyler. After
          graduation Tyler read the law with his father, a state judge at the
          time, and later with Edmund Randolph, former United States Attorney
          General. Tyler was erroneously admitted to the Virginia bar at the
          premature age of 19—the admitting judge neglected to ask his age. By
          this time his father was serving as Governor of Virginia (1808–1811),
          and the young Tyler started a practice in Richmond, the state capital.
          In 1813 he purchased Woodburn plantation, and resided there until
          1821.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "I contend that the strongest of all governments is that which is most
          free. "
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> March 29, 1790 Charles City County, Virginia,
            U.S.
          </Item>

          <Item>
            <strong>Died:</strong> January 18, 1862 (aged 71) Richmond,
            Virginia, C.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> None
          </Item>

          <Item>
            <strong>In Office:</strong> April 4, 1841 – March 4, 1845
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
