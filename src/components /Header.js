import React from "react";
import styled from "styled-components";
import dandrumpic from "../media/dandrumpic.png";

const MainContainer = styled.div`
  height: 35vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fdfbfb;

  img {
    height: 240px;
    width: 240px;
    border-radius: 50%;
    margin-left: 50px;
  }
`;

const Header = () => {
  return (
    <>
      <MainContainer>
        <div>@DanielPossehl</div>
        <img className="img" src={dandrumpic} alt="DrumPic" />
      </MainContainer>
    </>
  );
};

export default Header;
