import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 57px;
  width: 100%;
  max-width: 100vw;
  background-color: var(--grey-4);
  color: var(--grey-0);
  box-shadow: 0 0 1.5em black;

  border-top: 3px solid var(--gold);
  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  z-index: 999;
  /* .header-top-line {
    height: 3px;
    background-color: var(--gold);
    z-index: 999;
  } */
  .header-container {
    width: 85%;
    margin: 0 auto;
    padding-top: 6px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--grey-0);
    }

    span {
      font-size: 2rem;
      font-weight: 700;
    }
    button {
      background-color: transparent;
      border: none;
    }
    svg {
      color: white;
      width: 20px;
      height: 20px;
    }
  }
`;
