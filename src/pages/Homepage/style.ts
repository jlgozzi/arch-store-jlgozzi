import styled from "styled-components";

export const HomepageStyled = styled.div`
  width: 100vw;
  height: 100vh;

  transition: all 0.5s linear;
  background-color: ${(props) =>
    props.theme === "dark" ? " var(--grey-4)" : " var(--platinum)"};

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  position: relative;

  overflow-x: hidden;

  main {
    margin: 0 auto;
    margin-top: 180px;
    width: 80%;
  }

  main h1 {
    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-4)"};
  }

  main ul {
    background-color: blue;
    display: flex;
    height: 450px;
    width: 100%;
    overflow: auto;
  }

  @media (min-width: 420px) {
    .main-title {
      font-size: 2rem;
    }
  }
`;
