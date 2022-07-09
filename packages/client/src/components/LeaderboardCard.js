import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  position: relative;

  --sizing: ${(props) => props.size + "px"};
  height: var(--sizing);
  width: var(--sizing);

  --positioning: ${(props) => props.position + "%"};
  left: var(--positioning);

  .circleIcon {
    position: absolute;
    background-color: red;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 20px 20px 0 #aaa;
    border: 1px solid red;
  }

  .leaderboard-image {
    position: absolute;
  }

  .positionOfTheDudes {
    position: absolute;
    bottom: -65px;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);

    .bottomBox {
      border-radius: 5px;
      background-color: #f78849;
      padding: 10px;
      width: 100px;

      margin: 0 auto;

      p {
        margin: 0;
        padding: 0;
      }
    }

    .personsName {
      top: -10px;
      position: relative;
    }
  }
`;

export default function LeaderboardCard(props) {
  return (
    <Container size={props.size} position={props.position}>
      <div className="circleIcon"></div>
      <img className="leaderboard-image" alt="bigpp" src={props.image}></img>
      <div className="positionForImage"></div>
      <div className="positionOfTheDudes">
        <div className="bottomBox">
          <p style={{ fontSize: "14px", color: "white" }}>570 pts</p>
        </div>
        <div className="personsName">
          <p>Chris Rock</p>
        </div>
      </div>
    </Container>
  );
}
