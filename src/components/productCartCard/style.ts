import styled from "styled-components";

export const ProductCart = styled.li`
  height: 120px;
  width: 90%;
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
  justify-content: flex-end;
  align-items: flex-start;

  /* background-color: red; */

  figure {
    display: none;
    height: 100px;

    /* background-color: green; */
  }
  figure img {
    height: 100px;
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
    width: 30px;
    height: 30px;

    margin: 0 auto;
    margin-top: 10px;

    background-color: transparent;

    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-4)"};
    font-size: 1rem;
    font-weight: 600;

    border: 5px solid transparent;
  }
  button:hover svg {
    color: ${(props) =>
      props.theme === "dark" ? " var(--platinum)" : " var(--grey-2)"};

    transition: 0.5s;
  }
  button:active svg {
    color: var(--negative);
    transform: scale(0.97);
    transition: 0.25s;
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

  @media (min-width: 768px) {
    figure {
      display: block;
    }
  }
`;
