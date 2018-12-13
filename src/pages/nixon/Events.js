import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/nixon1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Richard Nixon:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "A man is not finished when he's defeated; he's finished when he
          quits."
        </Subhead>
        <Text>
          <Date>03/04/1969: Warning to Viet Cong</Date>Nixon warns that the
          United States will take action in the event of a new Viet Cong
          offensive.
          <Date>05/14/1969: Withdrawal from South Vietnam</Date>Nixon proposes a
          plan whereby the United States and North Vietnam would agree to
          withdraw forces from South Vietnam.
          <Date>06/08/1969: Leaving Vietnam</Date>
          Nixon announces a plan to withdraw 25,000 U.S. troops from South
          Vietnam by August 31.
          <Date>11/03/1969: North Vietnam rejects peace</Date>Nixon reveals that
          North Vietnam has rejected the administration's secret peace offers.
          He proposes a plan for the gradual and secretive withdrawal of troops.
          <Date>06/17/1972: Watergate scandal begins</Date>Police seize James
          McCord, Frank Sturgis, and three accomplices inside Democratic
          Headquarters in Washington, D.C.'s Watergate Hotel. They confiscate
          cameras, wiretapping materials, and $2,300 in cash.
          <Date>United States v. Nixon Decided</Date>
          On July 24, 1974, the Supreme Court ruled in an 8-0 decision that
          President Richard Nixon had to turn over sixty-four tapes, which
          disclosed his knowledge and participation in the cover-up of the
          Watergate burglary. The conversations on the tapes implicated Nixon
          and led to his resignation, the first time in United States history a
          President had resigned. The Watergate scandal began when five men were
          arrested for breaking into the office of the Democratic National
          Committee on June 17, 1972. Initially it was unclear if there was any
          connection between the burglary and the Nixon administration but
          gradually it was revealed that the White House was involved. Then on
          July 16, 1973, former White House aide Alexander P. Butterfield
          testified that since 1971 the White House routinely recorded
          conversations. The taping was undertaken ostensibly to provide a
          historical record of the Nixon Administration, but it soon emerged as
          a means to prove President Nixon's guilt or innocence. When the
          existence of the tapes was revealed, the Senate Watergate Committee
          requested access to them. Unable to come to an agreement with Nixon on
          releasing the tapes, the Senate Committee called on the President to
          produce the tapes. Special Prosecutor Archibald Cox also issued a
          subpoena for the tapes as part of his investigation. President Nixon
          responded by refusing to release the tapes, claiming that his
          conversations were private and hence protected from forced disclosure
          by the doctrine of executive privilege-a concept which permits
          officers of the executive branch to maintain a level of privacy to
          promote open and vigorous debate. In his refusal, Nixon stated
          unequivocally that the tapes were “entirely consistent with what I
          have stated to be the truth.” This confrontation set the stage for the
          United States v. Nixon, in which the Court ruled unanimously that
          President Nixon must turn over the tapes. Chief Justice Warren Burger
          wrote the decision, in which the Court upheld the doctrine of
          executive privilege but said it was generally limited to areas of
          national security or diplomatic affairs. The Court went on to say that
          that the President is not above the law and Nixon must turn over the
          tapes. Soon after the Court's decision, Nixon released the tapes. The
          tapes revealed that the President had participated in a cover-up of
          the burglary as early as June 23, 1972, just days after it occurred.
          The release of the tapes eroded what was left of Nixon's support.
          Beginning July 27, the House of Representatives adopted three Articles
          of Impeachment against the President. In a televised speech on the
          night of August 8, 1974, President Richard Nixon announced his
          intention to resign at noon the next day. Although he conceded he had
          made some wrong judgments, he did not admit to any wrongdoing. Vice
          President Gerald Ford was sworn in as President the next day,
          remarking in his inaugural address, “My fellow Americans, our long
          national nightmare is over.” Nixon's resignation marked the first such
          act by a President in U.S. history. Among its many implications, the
          resignation confirmed that no individual-regardless of rank or
          station-was above the law, and that there were real consequences for
          those who violated the law willfully. As for its political impact, the
          resignation chipped away at the aura of the presidency and the
          public's trust in government.
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
