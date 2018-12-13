import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/Header";
import BlackOps2 from "./pages/BlackOps2";
import BlackOps3 from "./pages/BlackOps3";
import Assassins from "./pages/Assassins";
import Borderlands from "./pages/Borderlands";

// repeat these three for each prez on App.js
import Bio1 from "./pages/washington/Bio";
import Accomplishments1 from "./pages/washington/Accomplishments";
import Events1 from "./pages/washington/Events";
// repeat these three for each prez on App.js

import Bio2 from "./pages/adams/Bio";
import Accomplishments2 from "./pages/adams/Accomplishments";
import Events2 from "./pages/adams/Events";

import Bio3 from "./pages/jefferson/Bio";
import Accomplishments3 from "./pages/jefferson/Accomplishments";
import Events3 from "./pages/jefferson/Events";

import Bio4 from "./pages/madison/Bio";
import Accomplishments4 from "./pages/madison/Accomplishments";
import Events4 from "./pages/madison/Events";

import Bio5 from "./pages/monroe/Bio";
import Accomplishments5 from "./pages/monroe/Accomplishments";
import Events5 from "./pages/monroe/Events";

import Bio6 from "./pages/quincyadams/Bio";
import Accomplishments6 from "./pages/quincyadams/Accomplishments";
import Events6 from "./pages/quincyadams/Events";

import Bio7 from "./pages/jackson/Bio";
import Accomplishments7 from "./pages/jackson/Accomplishments";
import Events7 from "./pages/jackson/Events";

import Bio8 from "./pages/vanburen/Bio";
import Accomplishments8 from "./pages/vanburen/Accomplishments";
import Events8 from "./pages/vanburen/Events";

import Bio9 from "./pages/h_harrison/Bio";
import Accomplishments9 from "./pages/h_harrison/Accomplishments";
import Events9 from "./pages/h_harrison/Events";

import Bio10 from "./pages/tyler/Bio";
import Accomplishments10 from "./pages/tyler/Accomplishments";
import Events10 from "./pages/tyler/Events";

import Bio11 from "./pages/polk/Bio";
import Accomplishments11 from "./pages/polk/Accomplishments";
import Events11 from "./pages/polk/Events";

import Bio12 from "./pages/taylor/Bio";
import Accomplishments12 from "./pages/taylor/Accomplishments";
import Events12 from "./pages/taylor/Events";

import Bio13 from "./pages/fillmore/Bio";
import Accomplishments13 from "./pages/fillmore/Accomplishments";
import Events13 from "./pages/fillmore/Events";

import Bio14 from "./pages/pierce/Bio";
import Accomplishments14 from "./pages/pierce/Accomplishments";
import Events14 from "./pages/pierce/Events";

import Bio15 from "./pages/buchanan/Bio";
import Accomplishments15 from "./pages/buchanan/Accomplishments";
import Events15 from "./pages/buchanan/Events";

import Bio16 from "./pages/lincoln/Bio";
import Accomplishments16 from "./pages/lincoln/Accomplishments";
import Events16 from "./pages/lincoln/Events";

import Bio17 from "./pages/ajohnson/Bio";
import Accomplishments17 from "./pages/ajohnson/Accomplishments";
import Events17 from "./pages/johnson/Events";

import Bio18 from "./pages/grant/Bio";
import Accomplishments18 from "./pages/grant/Accomplishments";
import Events18 from "./pages/grant/Events";

import Bio19 from "./pages/hayes/Bio";
import Accomplishments19 from "./pages/hayes/Accomplishments";
import Events19 from "./pages/hayes/Events";

import Bio20 from "./pages/garfield/Bio";
import Accomplishments20 from "./pages/garfield/Accomplishments";
import Events20 from "./pages/garfield/Events";

import Bio21 from "./pages/arthur/Bio";
import Accomplishments21 from "./pages/arthur/Accomplishments";
import Events21 from "./pages/arthur/Events";

import Bio22 from "./pages/cleveland/Bio";
import Accomplishments22 from "./pages/cleveland/Accomplishments";
import Events22 from "./pages/cleveland/Events";

import Bio23 from "./pages/harrison/Bio";
import Accomplishments23 from "./pages/harrison/Accomplishments";
import Events23 from "./pages/harrison/Events";

import Bio24 from "./pages/cleveland/Bio";
import Accomplishments24 from "./pages/cleveland/Accomplishments";
import Events24 from "./pages/cleveland/Events";

import Bio25 from "./pages/mckinley/Bio";
import Accomplishments25 from "./pages/mckinley/Accomplishments";
import Events25 from "./pages/mckinley/Events";

import Bio26 from "./pages/roosevelt/Bio";
import Accomplishments26 from "./pages/roosevelt/Accomplishments";
import Events26 from "./pages/roosevelt/Events";

import Bio27 from "./pages/taft/Bio";
import Accomplishments27 from "./pages/taft/Accomplishments";
import Events27 from "./pages/taft/Events";

import Bio28 from "./pages/wilson/Bio";
import Accomplishments28 from "./pages/wilson/Accomplishments";
import Events28 from "./pages/wilson/Events";

import Bio29 from "./pages/harding/Bio";
import Accomplishments29 from "./pages/harding/Accomplishments";
import Events29 from "./pages/harding/Events";

import Bio30 from "./pages/coolidge/Bio";
import Accomplishments30 from "./pages/coolidge/Accomplishments";
import Events30 from "./pages/coolidge/Events";

import Bio31 from "./pages/hoover/Bio";
import Accomplishments31 from "./pages/hoover/Accomplishments";
import Events31 from "./pages/hoover/Events";

import Bio32 from "./pages/fdr/Bio";
import Accomplishments32 from "./pages/fdr/Accomplishments";
import Events32 from "./pages/fdr/Events";

import Bio33 from "./pages/truman/Bio";
import Accomplishments33 from "./pages/truman/Accomplishments";
import Events33 from "./pages/truman/Events";

import Bio34 from "./pages/ike/Bio";
import Accomplishments34 from "./pages/ike/Accomplishments";
import Events34 from "./pages/ike/Events";

import Bio35 from "./pages/jfk/Bio";
import Accomplishments35 from "./pages/jfk/Accomplishments";
import Events35 from "./pages/jfk/Events";

import Bio36 from "./pages/johnson/Bio";
import Accomplishments36 from "./pages/johnson/Accomplishments";
import Events36 from "./pages/johnson/Events";

import Bio37 from "./pages/nixon/Bio";
import Accomplishments37 from "./pages/nixon/Accomplishments";
import Events37 from "./pages/nixon/Events";

import Bio38 from "./pages/ford/Bio";
import Accomplishments38 from "./pages/ford/Accomplishments";
import Events38 from "./pages/ford/Events";

import Bio39 from "./pages/carter/Bio";
import Accomplishments39 from "./pages/carter/Accomplishments";
import Events39 from "./pages/carter/Events";

import Bio40 from "./pages/reagan/Bio";
import Accomplishments40 from "./pages/reagan/Accomplishments";
import Events40 from "./pages/reagan/Events";

import Bio41 from "./pages/bush/Bio";
import Accomplishments41 from "./pages/bush/Accomplishments";
import Events41 from "./pages/bush/Events";

import Bio42 from "./pages/clinton/Bio";
import Accomplishments42 from "./pages/clinton/Accomplishments";
import Events42 from "./pages/clinton/Events";

import Bio43 from "./pages/wbush/Bio";
import Accomplishments43 from "./pages/wbush/Accomplishments";
import Events43 from "./pages/wbush/Events";

import Bio44 from "./pages/obama/Bio";
import Accomplishments44 from "./pages/obama/Accomplishments";
import Events44 from "./pages/obama/Events";

import Bio45 from "./pages/trump/Bio";
import Accomplishments45 from "./pages/trump/Accomplishments";
import Events45 from "./pages/trump/Events";

//import Monroe from "./pages/Monroe";
//import QuincyAdams from "./pages/QuincyAdams";
import Jackson from "./pages/Jackson";
import Vanburen from "./pages/Vanburen";
import H_Harrison from "./pages/H_Harrison";
import Tyler from "./pages/Tyler";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: "gray" };
  }
  changeHeader = e => {
    this.setState({ theme: e });
  };
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <Header theme={this.state.theme} />
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  header={this.state.theme}
                  changeHeader={this.changeHeader}
                />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route
              path="/blackops2"
              render={() => (
                <BlackOps2
                  header={this.state.theme}
                  changeHeader={this.changeHeader}
                />
              )}
            />
            <Route
              path="/blackops3"
              render={() => (
                <BlackOps3
                  header={this.state.theme}
                  changeHeader={this.changeHeader}
                />
              )}
            />
            <Route
              path="/assassins"
              render={() => (
                <Assassins
                  header={this.state.theme}
                  changeHeader={this.changeHeader}
                />
              )}
            />
            <Route
              path="/borderlands"
              render={() => (
                <Borderlands
                  header={this.state.theme}
                  changeHeader={this.changeHeader}
                />
              )}
            />
            {/* REPEAT THESE THREE ENTRIES FOR EACH PREZ */}
            <Route path="/washington-bio" component={Bio1} />
            <Route
              path="/washington-accomplishments"
              component={Accomplishments1}
            />
            <Route path="/washington-events" component={Events1} />
            {/* REPEAT THESE THREE ENTRIES FOR EACH PREZ */}
            <Route path="/adams-bio" component={Bio2} />
            <Route path="/adams-accomplishments" component={Accomplishments2} />
            <Route path="/adams-events" component={Events2} />
            <Route path="/jefferson-bio" component={Bio3} />
            <Route
              path="/jefferson-accomplishments"
              component={Accomplishments3}
            />
            <Route path="/jefferson-events" component={Events3} />
            <Route path="/madison-bio" component={Bio4} />
            <Route
              path="/madison-accomplishments"
              component={Accomplishments4}
            />
            <Route path="/madison-events" component={Events4} />
            <Route path="/monroe-bio" component={Bio5} />
            <Route
              path="/monroe-accomplishments"
              component={Accomplishments5}
            />
            <Route path="/monroe-events" component={Events5} />
            <Route path="/quincyadams-bio" component={Bio6} />
            <Route
              path="/quincyadams-accomplishments"
              component={Accomplishments6}
            />
            <Route path="/quincyadams-events" component={Events6} />
            />
            <Route path="/jackson-bio" component={Bio7} />
            <Route
              path="/jackson-accomplishments"
              component={Accomplishments7}
            />
            <Route path="/jackson-events" component={Events7} />
            <Route path="/vanburen-bio" component={Bio8} />
            <Route
              path="/vanburen-accomplishments"
              component={Accomplishments8}
            />
            <Route path="/vanburen-events" component={Events8} />
            <Route path="/h_harrison-bio" component={Bio9} />
            <Route
              path="/h_harrison-accomplishments"
              component={Accomplishments9}
            />
            <Route path="/h_harrison-events" component={Events9} />
            <Route path="/tyler-bio" component={Bio10} />
            <Route
              path="/tyler-accomplishments"
              component={Accomplishments10}
            />
            <Route path="/tyler-events" component={Events10} />
            <Route path="/polk-bio" component={Bio11} />
            <Route path="/polk-accomplishments" component={Accomplishments11} />
            <Route path="/polk-events" component={Events11} />
            <Route path="/taylor-bio" component={Bio12} />
            <Route
              path="/taylor-accomplishments"
              component={Accomplishments12}
            />
            <Route path="/taylor-events" component={Events12} />
            <Route path="/fillmore-bio" component={Bio13} />
            <Route
              path="/fillmore-accomplishments"
              component={Accomplishments13}
            />
            <Route path="/fillmore-events" component={Events13} />
            <Route path="/pierce-bio" component={Bio14} />
            <Route
              path="/pierce-accomplishments"
              component={Accomplishments14}
            />
            <Route path="/pierce-events" component={Events14} />
            <Route path="/buchanan-bio" component={Bio15} />
            <Route
              path="/buchanan-accomplishments"
              component={Accomplishments15}
            />
            <Route path="/buchanan-events" component={Events15} />
            <Route path="/lincoln-bio" component={Bio16} />
            <Route
              path="/lincoln-accomplishments"
              component={Accomplishments16}
            />
            <Route path="/lincoln-events" component={Events16} />
            <Route path="/ajohnson-bio" component={Bio17} />
            <Route
              path="/ajohnson-accomplishments"
              component={Accomplishments17}
            />
            <Route path="/ajohnson-events" component={Events17} />
            <Route path="/grant-bio" component={Bio18} />
            <Route
              path="/grant-accomplishments"
              component={Accomplishments18}
            />
            <Route path="/grant-events" component={Events18} />
            <Route path="/hayes-bio" component={Bio19} />
            <Route
              path="/hayes-accomplishments"
              component={Accomplishments19}
            />
            <Route path="/hayes-events" component={Events19} />
            <Route path="/garfield-bio" component={Bio20} />
            <Route
              path="/garfield-accomplishments"
              component={Accomplishments20}
            />
            <Route path="/garfield-events" component={Events20} />
            <Route path="/arthur-bio" component={Bio21} />
            <Route
              path="/arthur-accomplishments"
              component={Accomplishments21}
            />
            <Route path="/arthur-events" component={Events21} />
            <Route path="/cleveland-bio" component={Bio22} />
            <Route
              path="/cleveland-accomplishments"
              component={Accomplishments22}
            />
            <Route path="/cleveland-events" component={Events22} />
            <Route path="/harrison-bio" component={Bio23} />
            <Route
              path="/harrison-accomplishments"
              component={Accomplishments23}
            />
            <Route path="/harrison-events" component={Events23} />
            <Route path="/cleveland-bio" component={Bio24} />
            <Route
              path="/cleveland-accomplishments"
              component={Accomplishments24}
            />
            <Route path="/cleveland-events" component={Events24} />
            <Route path="/mckinley-bio" component={Bio25} />
            <Route
              path="/mckinley-accomplishments"
              component={Accomplishments25}
            />
            <Route path="/mckinley-events" component={Events25} />
            <Route path="/roosevelt-bio" component={Bio26} />
            <Route
              path="/roosevelt-accomplishments"
              component={Accomplishments26}
            />
            <Route path="/roosevelt-events" component={Events26} />
            <Route path="/taft-bio" component={Bio27} />
            <Route path="/taft-accomplishments" component={Accomplishments27} />
            <Route path="/taft-events" component={Events27} />
            <Route path="/wilson-bio" component={Bio28} />
            <Route
              path="/wilson-accomplishments"
              component={Accomplishments28}
            />
            <Route path="/wilson-events" component={Events28} />
            <Route path="/harding-bio" component={Bio29} />
            <Route
              path="/harding-accomplishments"
              component={Accomplishments29}
            />
            <Route path="/harding-events" component={Events29} />
            <Route path="/coolidge-bio" component={Bio30} />
            <Route
              path="/coolidge-accomplishments"
              component={Accomplishments30}
            />
            <Route path="/coolidge-events" component={Events30} />
            <Route path="/hoover-bio" component={Bio31} />
            <Route
              path="/hoover-accomplishments"
              component={Accomplishments31}
            />
            <Route path="/hoover-events" component={Events31} />
            <Route path="/fdr-bio" component={Bio32} />
            <Route path="/fdr-accomplishments" component={Accomplishments32} />
            <Route path="/fdr-events" component={Events32} />
            <Route path="/truman-bio" component={Bio33} />
            <Route
              path="/truman-accomplishments"
              component={Accomplishments33}
            />
            <Route path="/truman-events" component={Events33} />
            <Route path="/ike-bio" component={Bio34} />
            <Route path="/ike-accomplishments" component={Accomplishments34} />
            <Route path="/ike-events" component={Events34} />
            <Route path="/jfk-bio" component={Bio35} />
            <Route path="/jfk-accomplishments" component={Accomplishments35} />
            <Route path="/jfk-events" component={Events35} />
            <Route path="/johnson-bio" component={Bio36} />
            <Route
              path="/johnson-accomplishments"
              component={Accomplishments36}
            />
            <Route path="/johnson-events" component={Events36} />
            <Route path="/nixon-bio" component={Bio37} />
            <Route
              path="/nixon-accomplishments"
              component={Accomplishments37}
            />
            <Route path="/nixon-events" component={Events37} />
            <Route path="/ford-bio" component={Bio38} />
            <Route path="/ford-accomplishments" component={Accomplishments38} />
            <Route path="/ford-events" component={Events38} />
            <Route path="/carter-bio" component={Bio39} />
            <Route
              path="/carter-accomplishments"
              component={Accomplishments39}
            />
            <Route path="/carter-events" component={Events39} />
            <Route path="/reagan-bio" component={Bio40} />
            <Route
              path="/reagan-accomplishments"
              component={Accomplishments40}
            />
            <Route path="/reagan-events" component={Events40} />
            <Route path="/bush-bio" component={Bio41} />
            <Route path="/bush-accomplishments" component={Accomplishments41} />
            <Route path="/bush-events" component={Events41} />
            <Route path="/clinton-bio" component={Bio42} />
            <Route
              path="/clinton-accomplishments"
              component={Accomplishments42}
            />
            <Route path="/clinton-events" component={Events42} />
            <Route path="/wbush-bio" component={Bio43} />
            <Route
              path="/wbush-accomplishments"
              component={Accomplishments43}
            />
            <Route path="/wbush-events" component={Events43} />
            <Route path="/obama-bio" component={Bio44} />
            <Route
              path="/obama-accomplishments"
              component={Accomplishments44}
            />
            <Route path="/obama-events" component={Events44} />
            <Route path="/trump-bio" component={Bio45} />
            <Route
              path="/trump-accomplishments"
              component={Accomplishments45}
            />
            <Route path="/trump-events" component={Events45} />
            /> />
            <Route
              path="/Tyler"
              render={() => (
                <Tyler
                  header={this.state.theme}
                  changeHeader={this.changeHeader}
                />
              )}
            />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
