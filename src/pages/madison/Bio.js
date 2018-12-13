import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/madison1.jpg";
import { Item, Subhead } from "../../styles";

class Bio extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>James Madison:</Headline>
        <Topic>Bio</Topic>
        <Text>
          the Constitution. After the ratification of the Constitution in 1788,
          Madison won election to the United States House of Representatives.
          While simultaneously serving as a close adviser to President George
          Washington, Madison emerged as one of the most prominent members of
          the 1st Congress, helping to pass several bills establishing the new
          government. For his role in drafting the first ten amendments to the
          Constitution during the 1st Congress, Madison is known as the "Father
          of the Bill of Rights." Though he had played a major role in the
          enactment of a new constitution that created a stronger federal
          government, Madison opposed the centralization of power sought by
          Treasury Secretary Alexander Hamilton during Washington's presidency.
          To oppose Hamilton, Thomas Jefferson and Madison organized the
          Democratic-Republican Party, which became one of the nation's two
          first major political parties alongside Hamilton's Federalist Party.
          After Jefferson won the 1800 presidential election, Madison served as
          Jefferson's Secretary of State from 1801 to 1809. In this role,
          Madison supervised the Louisiana Purchase, which doubled the nation's
          size. Madison succeeded Jefferson with a victory in the 1808
          presidential election, and he won re-election in 1812. After the
          failure of diplomatic protests and a trade embargo against the United
          Kingdom, he led the U.S. into the War of 1812. The war was an
          administrative morass, as the United States had neither a strong army
          nor a robust financial system. As a result, Madison came to support a
          stronger national government and military, as well as the national
          bank, which he had long opposed. Historians have generally ranked
          Madison as an above-average president. Contents 1 Early life and
          education 2 Military service and early political career 3 Father of
          the Constitution 4 The Federalist Papers and ratification debates 5
          Member of Congress 5.1 Election to Congress and adviser to Washington
          5.2 Bill of Rights 5.3 Founding the Democratic-Republican Party 6
          Marriage and family 7 United States Secretary of State (1801–1809) 7.1
          Election of 1808 8 Presidency (1809–1817) 8.1 War of 1812 8.1.1
          Prelude to war 8.1.2 Military action 8.2 Postwar economy and internal
          improvements 8.3 Indian policy 9 Later life 10 Political and religious
          views 10.1 Federalism 10.2 Religion 10.3 Slavery 11 Legacy 12 See also
          13 Notes 14 References 14.1 Works cited 15 Further reading 15.1
          Biographies 15.2 Analytic studies 15.3 Historiography 15.4 Primary
          sources 16 External links Early life and education James Madison Jr.
          was born on March 16, 1751, (March 5, 1751, Old Style, Julian
          calendar) at Belle Grove Plantation near Port Conway, Virginia, to
          James Madison Sr. and Nelly Conway Madison. He grew up as the oldest
          of twelve children, with seven brothers and four sisters, though only
          six of his siblings would live to adulthood. His father was a tobacco
          planter who grew up on a plantation, then called Mount Pleasant, which
          he had inherited upon reaching adulthood. He later acquired more
          property and slaves, and with 5,000 acres (2,000 ha), he became the
          largest landowner and a leading citizen in the Piedmont. James Jr.'s
          mother was born at Port Conway, the daughter of a prominent planter
          and tobacco merchant. In the early 1760s, the Madison family moved
          into a newly built house, which they named Montpelier. From age 11 to
          16, Madison was sent to study under Donald Robertson, a Scottish
          instructor who served as a tutor for a number of prominent plantation
          families in the South. Madison learned mathematics, geography, and
          modern and classical languages—he became especially proficient in
          Latin. At age 16, Madison returned to Montpelier, where he began a
          two-year course of study under the Reverend Thomas Martin in
          preparation for college. Unlike most college-bound Virginians of his
          day, Madison did not attend the College of William and Mary, where the
          lowland Williamsburg climate—more susceptible to infectious
          disease—might have strained his delicate health. Instead, in 1769, he
          enrolled at the College of New Jersey (now Princeton University),
          where he became roommates and close friends with poet Philip Freneau.
          His studies at Princeton included Latin, Greek, science, geography,
          mathematics, rhetoric, and philosophy. Great emphasis was placed on
          both speech and debate; Madison helped found the American Whig
          Society, in direct competition to fellow student Aaron Burr's
          Cliosophic Society. After long hours of study that may have
          compromised his health, Madison graduated in 1771 and remained at
          Princeton to study Hebrew and political philosophy under President
          John Witherspoon. He returned home to Montpelier in early 1772, still
          unsure of his future career. His ideas on philosophy and morality were
          strongly shaped by Witherspoon, who converted Madison to the
          philosophy, values, and modes of thinking of the Age of Enlightenment.
          Biographer Terence Ball says that at Princeton: He was immersed in the
          liberalism of the Enlightenment, and converted to eighteenth-century
          political radicalism. From then on James Madison's theories would
          advance the rights of happiness of man, and his most active efforts
          would serve devotedly the cause of civil and political liberty.
        </Text>
        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “I believe there are more instances of the abridgment of the freedom
          of the people by gradual and silent encroachments of those in power
          than by violent and sudden usurpations.”{" "}
        </Subhead>
        <Text>
          <Item>
            <strong>Born:</strong> March 16, 1751 Port Conway, Colony of
            Virginia, British America
          </Item>

          <Item>
            <strong>Died:</strong> June 28, 1836 (aged 85) Orange, Virginia,
            U.S.
          </Item>

          <Item>
            <strong>Political Party:</strong> Democratic-Republican
          </Item>

          <Item>
            <strong>In Office:</strong> March 4, 1809 – March 4, 1817
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
