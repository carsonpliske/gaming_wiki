import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import codbo2 from "../images/codbo2.jpg";
import codbo3 from "../images/codbo3.jpg";
import assassin from "../images/assassinscreed.jpg";
import borderlands from "../images/borderlands.jpg";
import washington from "../images/washington.jpg";
import adams from "../images/adams.jpg";
import jefferson from "../images/jefferson.jpg";
import madison from "../images/madison.jpg";
import monroe from "../images/monroe.jpg";
import quincyadams from "../images/quincyadams.jpg";
import jackson from "../images/jackson.jpg";
import vanburen from "../images/vanburen.jpg";
import h_harrison from "../images/h_harrison.jpg";
import tyler from "../images/tyler.jpg";
import polk from "../images/polk.jpg";
import taylor from "../images/taylor.jpg";
import fillmore from "../images/fillmore.jpg";
import pierce from "../images/pierce.jpg";
import buchanan from "../images/buchanan.jpg";
import lincoln from "../images/lincoln.jpg";
import ajohnson from "../images/ajohnson.jpg";
import grant from "../images/grant.jpg";
import hayes from "../images/hayes.jpg";
import garfield from "../images/garfield.jpg";
import arthur from "../images/arthur.jpg";
import cleveland from "../images/cleveland.jpg";
import harrison from "../images/harrison.jpg";
import mckinley from "../images/mckinley.jpg";
import roosevelt from "../images/roosevelt.jpg";
import taft from "../images/taft.jpg";
import wilson from "../images/wilson.jpg";
import harding from "../images/harding.jpg";
import coolidge from "../images/coolidge.jpg";
import hoover from "../images/hoover.jpg";
import fdr from "../images/fdr.jpg";
import truman from "../images/truman.jpg";
import ike from "../images/ike.jpg";
import jfk from "../images/jfk.jpg";
import johnson from "../images/johnson.jpg";
import nixon from "../images/nixon.jpg";
import ford from "../images/ford.jpg";
import carter from "../images/carter.jpg";
import reagan from "../images/reagan.jpg";
import bush from "../images/bush.jpg";
import clinton from "../images/clinton.jpg";
import wbush from "../images/wbush.jpg";
import obama from "../images/obama.jpg";
import trump from "../images/trump.jpg";

class Home extends Component {
  componentDidMount() {
    this.props.changeHeader("default");
  }
  render() {
    return (
      <HomeWrapper>
        <StyledLink to="/washington-bio">
          <GameBlock style={washingtonImage}>
            <GameInfo>
              <GameName>George Washington</GameName>
              <GameCompany>1st President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/adams-bio">
          <GameBlock style={adamsImage}>
            <GameInfo>
              <GameName>John Adams</GameName>
              <GameCompany>2nd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/jefferson-bio">
          <GameBlock style={jeffersonImage}>
            <GameInfo>
              <GameName>Thomas Jefferson</GameName>
              <GameCompany>3rd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/madison-bio">
          <GameBlock style={madisonImage}>
            <GameInfo>
              <GameName>James Madison</GameName>
              <GameCompany>4th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/monroe-bio">
          <GameBlock style={monroeImage}>
            <GameInfo>
              <GameName>James Monroe</GameName>
              <GameCompany>5th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/quincyadams-bio">
          <GameBlock style={quincyadamsImage}>
            <GameInfo>
              <GameName>John Quincy Adams</GameName>
              <GameCompany>6th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/jackson-bio">
          <GameBlock style={jacksonImage}>
            <GameInfo>
              <GameName>Andrew Jackson</GameName>
              <GameCompany>7th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/vanburen-bio">
          <GameBlock style={vanburenImage}>
            <GameInfo>
              <GameName>Martin van Buren</GameName>
              <GameCompany>8th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/h_harrison-bio">
          <GameBlock style={h_harrisonImage}>
            <GameInfo>
              <GameName>William H. Harrison</GameName>
              <GameCompany>9th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/tyler-bio">
          <GameBlock style={tylerImage}>
            <GameInfo>
              <GameName>John Tyler</GameName>
              <GameCompany>10th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/polk-bio">
          <GameBlock style={polkImage}>
            <GameInfo>
              <GameName>James K. Polk</GameName>
              <GameCompany>11th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/taylor-bio">
          <GameBlock style={taylorImage}>
            <GameInfo>
              <GameName>Zachary Taylor</GameName>
              <GameCompany>12th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/fillmore-bio">
          <GameBlock style={fillmoreImage}>
            <GameInfo>
              <GameName>Millard Fillmore</GameName>
              <GameCompany>13th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/pierce-bio">
          <GameBlock style={pierceImage}>
            <GameInfo>
              <GameName>Franklin Pierce</GameName>
              <GameCompany>14th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/buchanan-bio">
          <GameBlock style={buchananImage}>
            <GameInfo>
              <GameName>James Buchanan</GameName>
              <GameCompany>15th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/lincoln-bio">
          <GameBlock style={lincolnImage}>
            <GameInfo>
              <GameName>Abraham Lincoln</GameName>
              <GameCompany>16th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/ajohnson-bio">
          <GameBlock style={ajohnsonImage}>
            <GameInfo>
              <GameName>Andrew Johnson</GameName>
              <GameCompany>17th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/grant-bio">
          <GameBlock style={grantImage}>
            <GameInfo>
              <GameName>Ulysses S. Grant</GameName>
              <GameCompany>18th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/hayes-bio">
          <GameBlock style={hayesImage}>
            <GameInfo>
              <GameName>Rutherford Hayes</GameName>
              <GameCompany>19th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/garfield-bio">
          <GameBlock style={garfieldImage}>
            <GameInfo>
              <GameName>James Garfield</GameName>
              <GameCompany>20th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/arthur-bio">
          <GameBlock style={arthurImage}>
            <GameInfo>
              <GameName>Chester Arthur</GameName>
              <GameCompany>21st President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/cleveland-bio">
          <GameBlock style={clevelandImage}>
            <GameInfo>
              <GameName>Grover Cleaveland</GameName>
              <GameCompany>22nd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/harrison-bio">
          <GameBlock style={harrisonImage}>
            <GameInfo>
              <GameName>Benjamin Harrison</GameName>
              <GameCompany>23rd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/cleveland-bio">
          <GameBlock style={clevelandImage}>
            <GameInfo>
              <GameName>Grover Cleaveland</GameName>
              <GameCompany>24th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/mckinley-bio">
          <GameBlock style={mckinleyImage}>
            <GameInfo>
              <GameName>William Mckinley</GameName>
              <GameCompany>25th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/roosevelt-bio">
          <GameBlock style={rooseveltImage}>
            <GameInfo>
              <GameName>Theodore Roosevelt</GameName>
              <GameCompany>26th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/taft-bio">
          <GameBlock style={taftImage}>
            <GameInfo>
              <GameName>William Taft</GameName>
              <GameCompany>27th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/wilson-bio">
          <GameBlock style={wilsonImage}>
            <GameInfo>
              <GameName>Woodrow Wilson</GameName>
              <GameCompany>28th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/harding-bio">
          <GameBlock style={hardingImage}>
            <GameInfo>
              <GameName>Warren Harding</GameName>
              <GameCompany>29th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/coolidge-bio">
          <GameBlock style={coolidgeImage}>
            <GameInfo>
              <GameName>Calvin Coolidge</GameName>
              <GameCompany>30th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/hoover-bio">
          <GameBlock style={hooverImage}>
            <GameInfo>
              <GameName>Herbet C. Hoover</GameName>
              <GameCompany>31st President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/fdr-bio">
          <GameBlock style={fdrImage}>
            <GameInfo>
              <GameName>Franklin Roosevelt</GameName>
              <GameCompany>32nd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/truman-bio">
          <GameBlock style={trumanImage}>
            <GameInfo>
              <GameName>Harry S. Truman</GameName>
              <GameCompany>33rd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/ike-bio">
          <GameBlock style={ikeImage}>
            <GameInfo>
              <GameName>Dwight Eisenhower</GameName>
              <GameCompany>34th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/jfk-bio">
          <GameBlock style={jfkImage}>
            <GameInfo>
              <GameName>John F. Kennedy</GameName>
              <GameCompany>35th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/johnson-bio">
          <GameBlock style={johnsonImage}>
            <GameInfo>
              <GameName>Lyndon Johnson</GameName>
              <GameCompany>36th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/nixon-bio">
          <GameBlock style={nixonImage}>
            <GameInfo>
              <GameName>Richard Nixon</GameName>
              <GameCompany>37th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/ford-bio">
          <GameBlock style={fordImage}>
            <GameInfo>
              <GameName>Gerald R. Ford</GameName>
              <GameCompany>38th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/carter-bio">
          <GameBlock style={carterImage}>
            <GameInfo>
              <GameName>Jimmy Carter</GameName>
              <GameCompany>39th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/reagan-bio">
          <GameBlock style={reaganImage}>
            <GameInfo>
              <GameName>Ronald Reagan</GameName>
              <GameCompany>40th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/bush-bio">
          <GameBlock style={bushImage}>
            <GameInfo>
              <GameName>George H.W. Bush</GameName>
              <GameCompany>41st President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/clinton-bio">
          <GameBlock style={clintonImage}>
            <GameInfo>
              <GameName>Bill Clinton</GameName>
              <GameCompany>42nd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/wbush-bio">
          <GameBlock style={wbushImage}>
            <GameInfo>
              <GameName>George W. Bush</GameName>
              <GameCompany>43rd President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/obama-bio">
          <GameBlock style={obamaImage}>
            <GameInfo>
              <GameName>Barack Obama</GameName>
              <GameCompany>44th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>

        <StyledLink to="/trump-bio">
          <GameBlock style={trumpImage}>
            <GameInfo>
              <GameName>Donald Trump</GameName>
              <GameCompany>45th President</GameCompany>
            </GameInfo>
          </GameBlock>
        </StyledLink>
      </HomeWrapper>
    );
  }
}

const HomeWrapper = styled.div`
  padding: 50px;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
`;

const GameBlock = styled.div` 
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 8px rgb(90, 89, 89);
  transition: all 0.3s ease-in-out;
  border: 1px grey solid;
  height: 440px;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
}`;

const codbo2Image = {
  backgroundImage: `url(${codbo2})`
};

const codbo3Image = {
  backgroundImage: `url(${codbo3})`
};

const assassinImage = {
  backgroundImage: `url(${assassin})`
};

const borderlandsImage = {
  backgroundImage: `url(${borderlands})`
};

const washingtonImage = {
  backgroundImage: `url(${washington})`
};

const adamsImage = {
  backgroundImage: `url(${adams})`
};

const jeffersonImage = {
  backgroundImage: `url(${jefferson})`
};

const madisonImage = {
  backgroundImage: `url(${madison})`
};

const monroeImage = {
  backgroundImage: `url(${monroe})`
};

const quincyadamsImage = {
  backgroundImage: `url(${quincyadams})`
};

const jacksonImage = {
  backgroundImage: `url(${jackson})`
};

const vanburenImage = {
  backgroundImage: `url(${vanburen})`
};

const h_harrisonImage = {
  backgroundImage: `url(${h_harrison})`
};

const tylerImage = {
  backgroundImage: `url(${tyler})`
};

const polkImage = {
  backgroundImage: `url(${polk})`
};

const taylorImage = {
  backgroundImage: `url(${taylor})`
};

const fillmoreImage = {
  backgroundImage: `url(${fillmore})`
};

const pierceImage = {
  backgroundImage: `url(${pierce})`
};

const buchananImage = {
  backgroundImage: `url(${buchanan})`
};

const lincolnImage = {
  backgroundImage: `url(${lincoln})`
};

const ajohnsonImage = {
  backgroundImage: `url(${ajohnson})`
};

const grantImage = {
  backgroundImage: `url(${grant})`
};

const hayesImage = {
  backgroundImage: `url(${hayes})`
};

const garfieldImage = {
  backgroundImage: `url(${garfield})`
};

const arthurImage = {
  backgroundImage: `url(${arthur})`
};

const clevelandImage = {
  backgroundImage: `url(${cleveland})`
};

const harrisonImage = {
  backgroundImage: `url(${harrison})`
};

const mckinleyImage = {
  backgroundImage: `url(${mckinley})`
};

const rooseveltImage = {
  backgroundImage: `url(${roosevelt})`
};

const taftImage = {
  backgroundImage: `url(${taft})`
};

const wilsonImage = {
  backgroundImage: `url(${wilson})`
};

const hardingImage = {
  backgroundImage: `url(${harding})`
};

const coolidgeImage = {
  backgroundImage: `url(${coolidge})`
};

const hooverImage = {
  backgroundImage: `url(${hoover})`
};

const fdrImage = {
  backgroundImage: `url(${fdr})`
};

const trumanImage = {
  backgroundImage: `url(${truman})`
};

const ikeImage = {
  backgroundImage: `url(${ike})`
};

const jfkImage = {
  backgroundImage: `url(${jfk})`
};

const johnsonImage = {
  backgroundImage: `url(${johnson})`
};

const nixonImage = {
  backgroundImage: `url(${nixon})`
};

const fordImage = {
  backgroundImage: `url(${ford})`
};

const carterImage = {
  backgroundImage: `url(${carter})`
};

const reaganImage = {
  backgroundImage: `url(${reagan})`
};

const bushImage = {
  backgroundImage: `url(${bush})`
};

const clintonImage = {
  backgroundImage: `url(${clinton})`
};

const wbushImage = {
  backgroundImage: `url(${wbush})`
};

const obamaImage = {
  backgroundImage: `url(${obama})`
};

const trumpImage = {
  backgroundImage: `url(${trump})`
};

const GameInfo = styled.span`
  position: absolute;
  display: block;
  bottom: 0;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

const GameName = styled.p`
  color: gold;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
  padding: 0;
`;

const GameCompany = styled.p`
  color: white;
  margin: 5px;
  padding: 0;
`;

const StyledLink = styled(Link)`
  transition: all 0.2s ease;

  box-shadow: 0px 2px 0px rgb(0, 0, 0);

  &:hover {
    box-shadow: 0px 2px 40px rgb(0, 0, 0);
    transition: all 0.2s ease;
  }
`;

export default Home;
