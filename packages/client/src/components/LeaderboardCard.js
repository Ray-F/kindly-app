import React from "react";
import styled from "styled-components";

const Container = styled.div`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  transform: translatey(5px);
  animation: float 2.5s ease-in-out infinite;

  display: flex;
  position: relative;

  --sizing: ${(props) => props.size + "px"};
  height: var(--sizing);
  width: var(--sizing);

  transition: left 0.75s, top 0.75s, height 0.75s, width 0.75s;

  --positioning: ${(props) => props.position + "%"};
  left: var(--positioning);
  top: ${(props) => props.positionX + "%"};

  .circleIcon {
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
  }

  .leaderboard-image {
    position: absolute;
    width: 110%;
    left: -5%;
    top: -6%;
    height: auto;
    //top: -20px;
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
    <Container
      size={props.size}
      position={props.position}
      positionX={props.positionX}
    >
      <div className="circleIcon"></div>
      <img className="leaderboard-image" alt="bigpp" src={props.image} />
      <div className="positionForImage"></div>
      <div className="positionOfTheDudes">
        <div className="bottomBox">
          <p style={{ fontSize: "14px", color: "white" }}>{props.points} pts</p>
        </div>
        <div className="personsName">
          <p>{props.name}</p>
        </div>
      </div>
    </Container>
  );
}
