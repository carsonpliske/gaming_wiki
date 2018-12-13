import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/adams1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>John Adams:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Let us tenderly and kindly cherish therefore, the means of knowledge.
          Let us dare to read, think, speak, and write .”{" "}
        </Subhead>
        <Text>
          <Date>05/19/1797: Negotiating with France</Date>
          Adams appoints a three man commission, composed of Charles C.
          Pinckney, Elbridge Gerry, and John Marshall, to negotiate a settlement
          with France.
          <Date>John Adams - The XYZ Affair</Date> On October 18, 1797, three
          Americans who were sent to France by President John Adams to represent
          a U.S. peace commission, were received coolly and then asked to pay a
          bribe in order to speak with French Foreign Minister Charles Maurice
          Talleyrand. This episode became known as the “XYZ Affair,” after the
          French agents who met with the American delegation. The incident
          affected U.S. relations with France and damaged the
          Democratic-Republican Party because of its traditional pro-French
          stance. When France broke diplomatic ties with the United States in
          1796, incoming President John Adams organized a delegation to
          negotiate with the French government. Charles Pinckney, John Marshall,
          and Elbridge Gerry arrived in Paris in October 1797 with instructions
          to normalize diplomatic relations and ensure French privateers would
          no longer harass American shipping. The American delegation
          encountered open hostility, and the French minister of foreign
          relations, Charles Maurice Talleyrand, refused to meet with them. On
          various occasions, four agents, later called W, X, Y, and Z by
          President Adams, contacted the Americans. They demanded an apology for
          insulting remarks made by Adams and wanted loans to the French
          government along with some $25,000 in bribes for French officials in
          return for talks with Talleyrand. Further, they implied war would
          result if the Americans did not meet the demands. Pinckney and
          Marshall refused to negotiate under such circumstances. Gerry, who
          sympathized with the French, urged patience. He remained in Paris
          until the fall of 1798, although Marshall and Pinckney left in the
          early months of the year. When President Adams received news of the
          failed mission in March 1798, he called for restraint. Initially
          giving Congress only a partial account of events, he favored continued
          attempts to negotiate, but also urged Congress to strengthen the
          country's defenses. Many, such as Secretary of State Timothy
          Pickering, called for an immediate declaration of war, and war fever
          grew steadily throughout 1798. Federalists denounced opposition to
          strong government action as unpatriotic and labeled Gerry treasonous
          for remaining in France. After President Adams turned over to Congress
          all of the delegation's correspondence on the failed negotiations,
          Democratic-Republicans, traditionally supporters of France, found
          themselves on shaky ground. Unsuccessfully trying to separate
          patriotism from support for a particular administration, they were
          seen as public enemies. The issues with France remained unresolved.
          Congress activated the tiny, new navy in 1798, and fought an
          undeclared naval war with France for two years. Of longer-term
          significance, Federalists used the anti-Democratic-Republican fervor
          to try to solidify their leadership. The Alien and Sedition Acts,
          passed in 1798 by the Federalist Congress, essentially outlawed French
          immigrants and criticism of the government. This step backward in
          Democratic-Republican's attempts to establish the idea of loyal
          opposition caused opposition leaders to turn to state governments as
          bulwarks against unrestrained federal power.
          <Date>05/28/1798: Preparing for war</Date>Congress empowers Adams to
          enlist 10,000 men for service in case of a declaration of war or
          invasion of the country's domain. It also authorizes Adams to instruct
          commanders of ships-of-war to seize armed French vessels praying upon
          or attacking American merchantmen about the coast.
          <Date>02/09/1799: Victory against France</Date>
          The United States Navy scores its first clear victory against France
          when the frigate Constellation captures the French ship L'Insurgente
          near the island of St. Kitts.
          <Date>John Adams - Washington Becomes U.S. Capital</Date>On June 11,
          1800, Philadelphia, Pennsylvania, ceased to be the capital of the
          United States, as the new city of Washington in the District of
          Columbia became the country's official capital. The federal government
          moved its offices to Washington, D.C., in June. In November, President
          John Adams first slept in the unfinished Executive Mansion (now known
          as the White House) and Congress met for the first time in the U.S.
          Capitol building. In 1790, Congress passed “An Act for Establishing
          the Temporary and Permanent Seat of the Government of the United
          States,” commonly known as the Residence Act. The act made
          Philadelphia the temporary capital for ten years and authorized the
          President to select a site for the nation's permanent capital along
          the Potomac River. As President, George Washington energetically
          promoted the development of his namesake city so it would be ready to
          receive the federal government in 1800, according to the terms of the
          Residence Act. In 1791, President Washington asked the French engineer
          Pierre Charles L'Enfant to design the city. L'Enfant's plans included
          great public squares, extensive parks and gardens, a system of avenues
          radiating from the city's center, and public buildings located
          majestically along the Potomac. His dismissal from the project in
          1792, combined with a lack of funding for construction, rendered the
          city woefully underdeveloped when the federal government arrived in
          1800. (It was not until the twentieth century, in fact, that
          L'Enfant's designs for the city were gradually implemented.) At the
          dawn of the nineteenth century, only one wing of the U.S. Capitol
          building was complete, and the federal city consisted of less than 400
          houses with a population of about 3,000. Roads were scarce,
          entertainment virtually nonexistent, and housing limited. Fewer than
          300 federal personnel moved into the city. Congressmen frequently
          rented rooms in boarding houses two to a bed. In November, President
          John Adams moved into the still incomplete White House, of which only
          the box-like center had been built. Life in the White House seemed
          only a slight improvement over congressmen's circumstances. John and
          Abigail Adams lacked an expense account to furnish the house and a
          staff to maintain it. Yet, they were expected to host social functions
          and official receptions. However, President Adams did not have to
          struggle under the burden for long. Just a few months after moving
          into the White House, he turned it over to Thomas Jefferson, who
          defeated him in the election of 1800. Despite the initial hardships
          and inadequacies of the federal government's new home, a general
          optimism about the city prevailed. Unlike the Adamses, who were from
          Massachusetts, Jefferson knew the Potomac region well and had long
          supported its location for the nation's capital. His election, the
          “Revolution of 1800,” along with the rapid progression of construction
          in Washington, breathed life into the fledgling capital city.
          Jefferson's election renewed enthusiasm for the federal government and
          provided impetus for the further development of Washington, D.C.
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
