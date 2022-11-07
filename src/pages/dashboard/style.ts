import styled, { keyframes } from "styled-components";

const blinkCursor = keyframes`
  from {
      
    }
    to {
      border-right-color: transparent;
      }
`;

const typing = keyframes`
  from{
    width: 0px;
  }
  to{
    width: 100%;
  }
`;

export const DashboardStyled = styled.div`
  width: 100vw;
  height: 100vh;
  transition: all 0.5s linear;
  background-color: var(--grey-3);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  overflow-x: hidden;

  main {
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
  }

  .main-button {
    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-2)" : " var(--grey-0)"};

    color: var(--gold);
    padding: 10px;
    font-size: 1rem;
    font-weight: 600;

    border: 5px solid transparent;
  }
  .main-button:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-3)" : " var(--platinum)"};
    border-bottom: 5px solid var(--gold);

    transition: 0.5s;
  }
  .main-button:active {
    transform: scale(0.97);
    transition: 0.5s;
  }

  figure img {
    width: 100vw;
    min-width: 500px;
    min-height: 200px;
    height: 1000px;
  }

  .main-container {
    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-3)"};
    max-width: 80%;
    height: 300px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50;
    left: 50;
    z-index: 995;
  }

  .main-title {
    /* background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-3)"}; */
    padding: 10px;
    max-width: fit-content;
    transition: 0.5s;

    font-size: 2rem;

    width: 20%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;

    /* border-radius: 10px; */
    border-right: 2px solid
      ${(props) =>
        props.theme === "dark" ? " var(--grey-3)" : " var(--grey-0)"};

    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-3)" : " var(--grey-0)"};

    animation: ${blinkCursor} 800ms infinite normal,
      ${typing} 2s steps(40) 0.5s normal both;
  }
  .main-paragraph {
    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-3)" : " var(--grey-0)"};
    width: 80%;
    font-weight: 500;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 20px;
  }

  @media (min-width: 420px) {
    .main-title {
      font-size: 2rem;
    }
  }
`;
