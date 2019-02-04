import React from "react";
import axios from "axios";
import Header from "./components/Header";
import "./styles/styles.scss";
import LaunchCard from "./components/LaunchCard";

export default class App extends React.Component {
  state = {
    launches: []
  };

  getLaunches() {
    const launchIDs = [];

    axios.get("https://launchlibrary.net/1.3/launch").then(launches => {
      launches.data.launches.forEach(launch => {
        launchIDs.push(launch.id);
      });

      launchIDs.forEach(launchID => {
        axios
          .get("https://launchlibrary.net/1.3/launch/" + launchID)
          .then(launchDetail => {
            let launchDataObject = launchDetail.data.launches[0];

            this.setState({
              launches: [...this.state.launches, launchDataObject]
            });
          });
      });
    });
  }

  componentWillMount() {
    this.getLaunches();
  }

  render() {
    console.log(this.state.launches);
    return (
      <div>
        <Header />
        {this.state.launches.map(launch => (
          <LaunchCard
            title={launch.name}
            img={launch.rocket.imageURL}
            countdown={launch.net}
            location={launch.location.name}
          />
        ))}
      </div>
    );
  }
}
