import React from "react";
import styled from "styled-components";

const BodyCard = styled.div`
  width: 300px;
  background-color: red;
  margin: 30px;
  flex-direction: column;
  border-radius: 25px;
  padding-bottom: 20px;
  color: black;
  height: 400px;
  border-color: black;
`;
const Header = styled.div`
  background-color: blue;
  color: white;
  padding: 20px;
  border-radius: 25px 25px 0 0;
`;

function PlayerCard(props) {
  console.log(props);
  return (
    <div>
      {props.player.map(player => {
        return (
          <div>
            <BodyCard>
              <Header>
                <h2>{player.name}</h2>
              </Header>
              <p>Country: {player.country}</p>
              <p>Searches: {player.searches}</p>
            </BodyCard>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerCard;