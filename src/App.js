import React from "react";
import axios from "axios";
import Header from "./components/Header";
import "./styles/styles.scss";
import LaunchCard from "./components/LaunchCard";

export default class App extends React.Component {
  state = {
    name: undefined,
    time: undefined,
    location: undefined,
    launchId: []
  };

  // componentDidMount() {
  //   axios.get("https://launchlibrary.net/1.3/launch/1434").then(res => {
  //     console.log(res.data.launches[0].name);
  //     // console.log(res.data.launches[0].name);
  //     let name = res.data.launches[0].name;
  //     let time = res.data.launches[0].windowstart;
  //     let location = res.data.launches[0].location.name;
  //     this.setState({
  //       name,
  //       location,
  //       time
  //     });
  //   });
  // }

  // componentDidMount() {
  //   axios.get("https://launchlibrary.net/1.3/launch").then(launches => {
  //     console.log(launches.data.launches);
  //   });
  // }

  componentDidMount() {
    const rocketLaunches = [];
    axios.get("https://launchlibrary.net/1.3/launch").then(launches => {
      launches.data.launches.forEach(rockets => {
        rocketLaunches.push(rockets.id);
        // console.log(rocketLaunches);
      });
      rocketLaunches.forEach(rocketDetails => {
        axios
          .get("https://launchlibrary.net/1.3/launch/" + rocketDetails)
          .then(launchDetails => {
            let rocketData = launchDetails.data.launches;
            this.setState({
              launchId: [...this.state.launchId, rocketData]
            });
          });
      });
    });
  }

  render() {
    console.log(this.state.launchId[0]);
    return (
      <div>
        <Header />
        <LaunchCard
          title={this.state.name}
          countdown={this.state.time}
          location={this.state.location}
        />
      </div>
    );
  }
}
