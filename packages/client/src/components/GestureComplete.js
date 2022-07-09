import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import avatarComplete from "../resources/avatar_completion.png";
import CloseButton from "../components/CloseButton";
import styled from "styled-components";
import ReactConfetti from 'react-confetti';

const GestureComplete = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    visibility: hidden;
    opacity: 0;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    transition: opacity 500ms;
  `;

  const Popup = styled.div`
    position: absolute;
    text-align: center;
    z-index: 11;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: auto;
    padding: 10px;
    background: rgb(255, 255, 255);
    border-radius: 15px;
    width: 30%;
    transition: all 5s ease-in-out;

    h2 {
      color: #333;
      font-size: 30px;
    }

    .close:hover {
      cursor: pointer;
      color: #000;
    }
  `;

  return (
    <Overlay
      onClick={closeHandler}
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0",
      }}
    >
      <ReactConfetti />
      <Popup>
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ fontSize: "50px" }}>Nice work!</h2>
          <p style={{ fontSize: "22px", marginTop: "-25px" }}>
            Gesture completed
          </p>
          <img src={avatarComplete} style={{ height: "200px" }} />
        </div>
        <div style={{ marginTop: "-25px", marginBottom: "30px" }}>
          <CloseButton onClick={closeHandler}> &times; </CloseButton>
        </div>
      </Popup>
    </Overlay>
  );
};

GestureComplete.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default GestureComplete;
