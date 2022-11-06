import styled from "styled-components";

export const CartPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  /* transition: all 0.5s linear; */
  background-color: ${(props) =>
    props.theme === "dark" ? " var(--grey-4)" : " var(--grey-0)"};
`;
