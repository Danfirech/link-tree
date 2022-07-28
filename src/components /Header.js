import React from "react";
import styled from "styled-components";
import dandrumpic from "../media/dandrumpic.png";

const MainContainer = styled.div`
  height: 25vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdfbfb;

  img {
    margin-top: 250px;
    height: 240px;
    width: 240px;
    border-radius: 50%;
    margin-left: 50px;
  }

  .words {
    margin-top: 250px;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 20px;
    color: #30aadd;
    font-weight: bold;
  }
`;

const Header = () => {
  return (
    <>
      <MainContainer>
        <div className="words">@DanielPossehl</div>
        <img className="img" src={dandrumpic} alt="DrumPic" />
      </MainContainer>
    </>
  );
};

export default Header;
