import React, { Component } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import somename from "./images/reagan1.jpg";
import { Date, Subhead } from "../../styles";

class Events extends Component {
  render() {
    return (
      <AboutWrapper>
        <Menu />
        <Headline>Ronald Reagan:</Headline>
        <Topic>Events</Topic>

        <Photo src={somename} alt="washiongton" />
        <Subhead>
          “Government exists to protect us from each other. Where government has
          gone beyond its limits is in deciding to protect us from ourselves.”
        </Subhead>
        <Text>
          <Date>President Reagan Shot</Date>On March 30, 1981, President Ronald
          Reagan was shot by John W. Hinkley, Jr., while leaving the Washington
          Hilton Hotel after giving a speech. The President was hit under his
          left arm by a bullet that ricocheted off his limousine. Once the sound
          of shots rang in the air, Secret Service agent Jerry Parr shoved
          Reagan into his limousine, and then, after noticing the President had
          been shot, directed the car to the George Washington University
          Hospital. Press Secretary James Brady, Secret Service Agent Timothy
          McCarthy, and Washington, D.C., police officer Thomas Delahanty were
          also shot and seriously wounded. Parr's quick-witted diversion of the
          presidential limousine to the hospital was a move that probably saved
          Reagan's life. The bullet had missed Reagan's heart by a mere inch.
          Although not believed to be serious at the time, Reagan's wounds were
          in fact life-threatening. He underwent surgery to remove the bullet
          and repair a lung that had collapsed. Still President Reagan, ever the
          trouper, walked into the hospital before he collapsed. Later he won
          the heart of the nation when the stories of his courage and humor
          disarmed critics and endeared him to the public. When he arrived at
          the hospital, he reportedly joked with the medical staff, “Please tell
          me you're Republicans,” and he quipped to an anxious Nancy, “Honey, I
          forgot to duck.” One of the older Presidents when elected, Reagan was
          70 years old when he took the oath of office; questions about his
          stamina and energy were commonplace during the early months of his
          presidency. His quick recovery from the assassination attempt,
          however, helped to brush those concerns aside. President Reagan
          appeared before a joint session of Congress a few months after the
          assassination attempt to thunderous support. The attempt on his life
          and speedy recovery from his wounds helped establish his reputation
          for toughness, humility, and strength-a far cry from the public
          perception of his predecessor, Jimmy Carter. Press Secretary James
          Brady, however, suffered permanent brain damage from his wounds, and
          later advocated the passage of gun control laws. The “Brady Bill,”
          named in his honor, limited handgun purchases and required background
          checks on gun purchasers. In 1982, a District of Columbia jury tried
          John W. Hinkley, Jr., and found him not guilty by reason of insanity.
          He was then committed to St. Elizabeth's Hospital for treatment of his
          mental illness.
          <Date>04/24/1981: Soviet grain embargo lifted</Date>
          Reagan lifts a grain embargo imposed on Soviet Union by President
          Carter.
          <Date>11/18/1981: Negotiating with Soviet Union</Date>
          Reagan states that he will not deploy intermediate-range nuclear
          missiles in Europe if the Soviet Union agrees to dismantle similar
          weapons already in place.
          <Date>03/23/1983: Strategic Defense Initiative</Date>Reagan urges
          development of the Strategic Defense Initiative (SDI), an attempt to
          create a high-technology anti-ballistic missile shield to protect the
          United States from nuclear attack.
          <Date>10/25/1983: Invasion of Grenada</Date>U.S. forces invade the
          island nation of Grenada to overthrow the military government that had
          carried out a government coup days before. Grenada, a small country,
          was no match for U.S. military force, and the U.S. forces subdued the
          opposing forces within a few days.
          <Date>11/13/1986: U.S. illegally sells arms to Iran</Date>Reagan
          informs Congress that the United States secretly sold arms to Iran in
          violation of federal laws prohibiting arms deals with Iran. The
          administration denies that the sales were part of an attempt to secure
          the release of American hostages held by Iranian-backed forces.
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
