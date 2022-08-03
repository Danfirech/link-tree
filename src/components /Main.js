import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 75vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const OutsideLinkBox = styled.div`
  height: 41px;
  width: 31%;
  border: pink solid 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const LinkBoxes = styled.div`
  height: 40px;
  width: 30%;
  border: #e1b4eb solid 1px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid #51195d;
  border-radius: 5px;

  .words {
    font-family: "Noto Sans Display", sans-serif;
    font-size: 20px;
    color: white;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Instagram</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">AudioTree</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Hire me</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Bio</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Contact: Email</div>
          </a>
        </LinkBoxes>
        <LinkBoxes>
          <a href="https://www.w3schools.com">
            <div className="words">Contact: Email</div>
          </a>
        </LinkBoxes>
      </MainContainer>
    </>
  );
};

export default Main;
