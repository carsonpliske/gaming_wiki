import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/h_harrison1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>William H. Harrison:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          "The liberties of a people depend on their own constant attention to
          its preservation."
        </Subhead>
        <Text>
          <Date>03/04/1841: William Henry Harrison inaugurated</Date>
          William Henry Harrison inaugurated as the ninth President of the
          United States.
          <Date>4/04/1841: Harrison dies of pneumonia</Date> Harrison dies of
          pneumonia only one month after his inauguration, making him the first
          President to die while in office.
          <Date>President Harrison Dies</Date>On April 4, 1841, President
          William Henry Harrison died of pneumonia, exactly one month after his
          inauguration as the ninth President of the United States. The
          sixty-eight-year-old President likely had caught a cold while standing
          outside in harsh weather with no hat or coat during his nearly
          two-hour inaugural speech. Harrison's health further deteriorated
          under the constant barrage of office seekers who sought his favor from
          the moment he assumed office. Only three weeks after his inauguration,
          Harrison was bedridden, his cold having developed into pneumonia. He
          whispered his last words to the attending doctor, although they may
          have been intended for Vice President John Tyler: “Sir, I wish you to
          understand the true principles of the government. I wish them carried
          out. I ask nothing more.” Harrison's administration was the shortest
          in American history, and his death marked the first of a sitting
          President. Harrison's death also opened the sticky and untested issue
          of presidential succession. The Constitution stated that upon the
          death of a President the “Duties of said office” were to “devolve on
          the Vice President,” and the 12th Amendment provided for the Vice
          President to “act as President” when there was no Executive. But
          neither document stated explicitly whether the vice president was now
          himself President, or merely taking on the responsibilities of the
          office until a new election could be held. Harrison's cabinet
          dispatched a messenger to inform Vice President Tyler of Harrison's
          death, summoning him to the nation's capital. Upon his arrival two
          days later in Washington, D.C., Tyler immediately met with Harrison's
          cabinet to discuss the matter of succession. Quickly the cabinet
          members agreed that Tyler should take the oath of office and become
          President in his own right. Tyler's assumption of the vacated office
          in the wake of Harrison's sudden death established the procedure and
          precedent for presidential succession - and averted a possible
          constitutional and political problem.
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
