import React, { Component } from "react";
import Navigationbar from "./components/Navigationbar/Navbar";
import SideDrawer from "./components/Navigationbar/SideDrawer";
import Bcakdrop from "./components/Navigationbar/Backdrop";

class App extends Component {
  state = {
    SideDrawerOpen: false,
  };

  //this function show side bar naviagtion when clicked
  drawerToggleClickHanndler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  //this function handle when click beyond the backdrop it will disappear.
  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let bcakdrop;
    if (this.state.SideDrawerOpen) {
      bcakdrop = <Bcakdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Navigationbar
          drawerToggleClickHanndler={this.drawerToggleClickHanndler}
        />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {bcakdrop}
        <div style={{ marginTop: "64px" }}>Tharakadissnayake</div>
      </div>
    );
  }
}

export default App;
