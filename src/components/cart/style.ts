import styled from "styled-components";

export const CartContainer = styled.div`
  background-color: var(--gold);

  margin: 0 auto;

  width: 90%;

  border-radius: 8px;

  .cart-title {
    text-align: center;
    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-2)" : " var(--grey-4)"};

    color: var(--grey-0);

    padding: 10px;
    border: 2px solid var(--gold);
    border-radius: 8px 8px 0px 0px;
  }
  .cart-list {
    margin: 0 auto;
    width: 90%;

    height: 100%;
  }
  .cart-list > ul {
    width: 100%;
    height: 420px;

    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10px;

    margin-bottom: 10px;
  }
  .cart-resume {
    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-2)" : " var(--grey-4)"};
    color: var(--grey-0);

    display: flex;
    justify-content: space-between;
    padding: 10px;

    border-bottom: 2px solid var(--gold);
  }
  .empty-cart {
    width: 100%;
    height: 420px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 2rem;
    opacity: 0.2;
  }

  .cart-button-clear {
    width: 100%;
    border: none;
    padding: 15px;
    font-size: 1rem;
    font-weight: 600;

    background-color: ${(props) =>
      props.theme === "dark" ? " var(--grey-0)" : " var(--grey-4)"};

    color: ${(props) =>
      props.theme === "dark" ? " var(--grey-3)" : " var(--grey-0)"};
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;
