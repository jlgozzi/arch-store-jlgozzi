import styled from "styled-components";

export const Product = styled.li`
  height: 95%;
  width: 250px;

  background-color: ${(props) =>
    props.theme === "dark" ? " var(--card-dark)" : " var(--card-light)"};
  color: ${(props) =>
    props.theme === "dark" ? " var(--grey-0)" : " var(--grey-4)"};

  border-radius: 8px;
  border: 3px solid
    ${(props) =>
      props.theme === "dark"
        ? " var( --card-dark-border)"
        : " var( --card-light-border)"};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  figure {
    height: 300px;
    width: 100%;

    display: flex;
    justify-content: center;
  }
  figure img {
    height: 200px;
    border-radius: 8px;
  }

  div {
    /* background-color: red; */

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    gap: 5px;

    padding: 10px;
  }

  div h2 {
    font-size: 1.1rem;
  }
  div p {
    font-size: 1rem;
  }
  button {
    width: 100%;
    margin: 0 auto;

    margin-top: 10px;
    background-color: var(--gold);

    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-4)"};
    padding: 5px;

    border-radius: 4px;

    font-size: 1rem;
    font-weight: 600;

    border: 5px solid transparent;
  }
  button:hover {
    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-3)" : " var(--platinum)"};
    border-bottom: 5px solid var(--gold);

    transition: 0.5s;
  }
  button:active {
    transform: scale(0.97);
    transition: 0.5s;
  }
  .price {
    font-size: 1rem;
    font-weight: 500;
  }
  .category {
    width: fit-content;
    padding: 5px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 0.8rem;
    background-color: var(--gold);
  }
`;
