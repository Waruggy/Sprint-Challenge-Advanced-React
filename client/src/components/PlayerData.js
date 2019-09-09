import axios from "axios";
import React from "react";
import PlayerCard from "./PlayerCard";

class PlayerData extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => this.setState(res.data))
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <div>
          <PlayerCard player={this.state.player} />
        </div>
      </div>
    );
  }
}

export default PlayerData;