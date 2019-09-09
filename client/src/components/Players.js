import axios from "axios";
import React from "react";
import styled from "styled-components";
import PlayerCard from "./PlayerCard";

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
`;

class Players extends React.Component {
  constructor() {
    super();
    this.state = {
      player: []
    };
  }
  componentDidMount() {
    this.fetchMyUser();
  }
  fetchMyUser = () => {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => this.setState({ player: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <MainCard>
          <PlayerCard player={this.state.player} />
        </MainCard>
      </div>
    );
  }
}

export default Players;
 