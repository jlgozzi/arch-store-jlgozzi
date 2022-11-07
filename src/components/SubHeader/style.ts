import styled from "styled-components";

export const SubHeaderStyled = styled.header`
  margin-top: 60px;

  height: 90px;
  width: 100%;
  background-color: ${(props) =>
    props.theme === "dark" ? " var(--grey-3)" : " var(--grey-4)"};
  color: var(--grey-0);
  box-shadow: 0 0 1.5em black;

  z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  z-index: 999;
  .sub-header-container {
    width: 85%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    gap: 30px;

    /* overflow: auto; */
  }
  ul li {
    font-size: 0.7rem;
    font-weight: 500;
    cursor: pointer;
  }
  ul li:hover {
    color: var(--gold);

    transition: 0.5s;
  }

  .sub-header-container div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .sub-header-container div > form {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .sub-header-container div > form > input {
    width: 200px;
    max-width: 500px;

    border-radius: 4px;
    border: none;
  }
  .sub-header-container div > form > input:focus {
    outline: none;
    box-shadow: 0 0 1em var(--grey-2);
    transform: scale(1.02);
    transition: 0.5s;
  }
  .sub-header-container div > form > button {
    background-color: transparent;
    border: none;

    width: 20px;
  }
  svg {
    color: white;
    width: 25px;
    height: 25px;
  }
  button {
    background-color: transparent;
    border: none;
  }
  button:hover svg {
    color: var(--gold);

    transition: 0.5s;
  }

  @media (min-width: 425px) {
    ul li {
      font-size: 1rem;
    }
  }
  @media (min-width: 768px) {
    .sub-header-container {
      flex-direction: row;
    }
    .sub-header-container div {
      justify-content: end;
      gap: 30px;
    }
  }
  @media (min-width: 1440px) {
    .sub-header-container {
      flex-direction: row;
    }

    .sub-header-container div {
      justify-content: end;
      gap: 30px;
    }
    .sub-header-container input {
      height: 30px;
    }
  }
`;
