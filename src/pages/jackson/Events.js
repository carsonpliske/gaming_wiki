import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/jackson1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Andrew Jackson:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The brave man inattentive to his duty, is worth little more to his
          country than the coward who deserts in the hour of danger."
        </Subhead>
        <Text>
          <Date>04/13/1830: Tensions between Jackson and Calhoun</Date>
          Following his anonymous printing of the South Carolina Exposition and
          Protest in 1828, Vice President John C. Calhoun suggests that his
          state of South Carolina annul the federally imposed protective cotton
          tariff. Jackson threatens to deploy federal troops to occupy the state
          in the event of nullification. On April 13, at the Jefferson Day
          Dinner in Washington, D.C., Jackson denounces Calhoun and his theory
          of nullification, declaring, “Our Union—it must be preserved!” Calhoun
          responds, “The Union, next to our liberty most dear!” The following
          month, Jackson will receive confirmation that in 1818, Calhoun
          supported a measure to discipline Jackson for his military involvement
          in Florida. This discovery generates terse correspondence between the
          two.
          <Date>Jackson Signs Indian Removal Act</Date> On May 28, 1830,
          President Andrew Jackson signed the Indian Removal Act, which gave the
          President additional powers in speeding the removal of American Indian
          communities in the eastern United States to territories west of the
          Mississippi River. The Indian Removal Act set the stage for the forced
          removals of the Cherokees, Creeks, and other southern Native American
          nations that took place during the 1830s. President Jackson's annual
          message of December 1829 contained extensive remarks on the present
          and future state of American Indians in the United States. His message
          contained many observations, assessments, and prejudices about Native
          Americans that had been widely held by American policy makers since
          Thomas Jefferson's presidency. Jackson observed that as white
          settlement in the east expanded, the range for Native American hunters
          diminished, and that this would gradually lead to their extinction.
          For their own good, American Indians needed to be resettled on vacant
          lands west of the Mississippi River, the President argued. In
          Congress, debates on a bill that would authorize the removals that
          Jackson proposed began in late February 1830. The debates in both the
          Senate and the House were quite contentious. Those opposed to
          Jackson's plans had many reasons for concern. They felt for the Native
          American situation, and many pleaded eloquently for the inviolable
          nature of the Native American nations' sovereignty. They also did not
          want to alter the established practices of Native American
          treaty-making, and many did not like Jackson himself. Generally, those
          opposed to the bill constituted the emerging anti-Jackson party.
          Despite the debate, the Indian Removal Bill passed the Senate at the
          end of April and passed the House at the end of May. Officially, the
          Indian Removal Act did not directly remove any Native American
          communities; it simply provided for a government apparatus that made
          it much easier to do so. The act allowed the President to exchange
          eastern Native American lands for unsettled western lands and grant
          the Native American nations involved full title to this new land.
          Officially, such exchanges would have take place through voluntary
          treaties with the Native Americans themselves. To expedite matters,
          the federal government would pay all the costs involved; it would
          reimburse the Native Americans for any structures they had built on
          their lands, and subsidize the new Native American settlements in the
          West. This Indian Removal Act was Jackson's creature. He worked behind
          the scenes to get his friends and allies appointed to the proper
          Congressional committees, in order to produce a bill congruent with
          his desires. The new law now fully committed the United States
          government to a policy of Native American removal, a policy that
          Jackson and his allies would bring to life in the latter years of his
          presidency.
          <Date>03/02/1836: Texas declares independence</Date>
          In Washington, D.C., the delegates of the people of Texas officially
          and unanimously declare their independence.
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

export default Events;
