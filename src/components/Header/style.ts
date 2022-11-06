import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 57px;
  background-color: var(--grey-4);
  color: var(--grey-0);
  box-shadow: 0 0 1.5em black;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .header-top-line {
    height: 3px;
    background-color: var(--gold);
  }
  .header-container {
    width: 85%;
    margin: 0 auto;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

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
