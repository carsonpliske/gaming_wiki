import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jackson1.jpg";
import { Date, Subhead } from "../../styles";

class Accomplishments extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Andrew Jackson:</Headline>
        <Topic>Accomplishments</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The brave man inattentive to his duty, is worth little more to his
          country than the coward who deserts in the hour of danger."
        </Subhead>
        <Text>
          <Date>05/26/1830: Indian Removal Act</Date>
          Congress passes the Indian Removal Act, sanctioning the forcible
          relocation of Creek, Chickasaw, Cherokee, Choctaw, and Seminole tribes
          to land allotments west of the Mississippi river. Ninety-four removal
          treaties follow the bill's enactment. From 1835 to 1838, Cherokee and
          Creek are forcibly removed from the Southeast onto reservations.
          Nearly one quarter die along what became known as the “Trail of
          Tears.”
          <Date>05/27/1830: Jackson vetoes Maysville Road bill</Date> Jackson
          vetoes the Maysville Road bill, which would have sanctioned the
          federal government's purchase of stock for the creation of a road
          entirely within Kentucky, the home state of longtime foe Henry Clay.
          Jackson regards the project as a local matter and thinks its funding
          should come from local sources. Jackson is not entirely opposed to the
          federal financing of such projects, supporting the allocation of
          federal monies for the National Road. Nevertheless, his veto of the
          Maysville Road bill indicates a shift in how the federal government
          intends to pay for internal improvements. Meanwhile, opponents
          interpret the move as an abuse of power.
          <Date>
            07/10/1832: Jackson opposes Second Bank of the United States
          </Date>
          Jackson vetoes a bill that would have extended the life of the Second
          Bank of the United States. Henry Clay, running against Jackson in the
          presidential election, proposes the bill to bring the issue of the
          Bank to the forefront in the election. Jackson's opposition to the
          Bank actually garners him additional popular support.
          <Date>03/01/1833: Force Bill</Date> Pressed by Jackson, Congress
          passes the Force Bill, authorizing Jackson's use of the army to gain
          compliance for federal law in South Carolina. Vice President Calhoun
          voices his dissent.
          <Date>03/02/1836: Texas declares independence</Date> In Washington,
          D.C., the delegates of the people of Texas officially and unanimously
          declare their independence.
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
