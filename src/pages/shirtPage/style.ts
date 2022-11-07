import styled from "styled-components";

export const HomepageStyled = styled.div`
  width: 100vw;

  transition: all 0.5s linear;
  background-color: ${(props) =>
    props.theme === "dark" ? " var(--grey-4)" : " var(--platinum)"};

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;

  /* position: relative; */

  overflow-x: hidden;

  main {
    margin: 0 auto;
    margin-top: 180px;
    width: 80%;

    box-sizing: inherit;
    /* background-color: RED; */
  }

  main h1 {
    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-4)"};
  }

  main ul {
    /* background-color: blue; */
    margin: 0 auto;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 15px;

    height: 500px;
    overflow: auto;
  }

  @media (min-width: 420px) {
    .main-title {
      font-size: 2rem;
    }
  }
  @media (min-width: 1024px) {
    main {
      height: 100%;
    }
    main ul {
      /* background-color: blue; */
      height: 100%;
      flex-wrap: wrap;
      overflow: unset;
    }
    main ul li {
      height: 500px;
    }
    main ul li:hover {
      box-shadow: 0 0 0.5em black;
      transform: scale(1.05);
      transition: 0.5s;
      border: 3px solid transparent;
    }
  }
`;
