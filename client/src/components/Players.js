import axios from "axios";
import React from "react";
import styled from "styled-components";

const MainCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px auto;
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
      .get(`http://localhost:5000/api/players`)
      .then(res => this.setState({ player: res.data }))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <MainCard>
          <Players player={this.state.player} />;
        </MainCard>
      </div>
    );
  }
}

export default Players;
 