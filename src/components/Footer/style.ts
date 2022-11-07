import styled from "styled-components";

export const FooterStyled = styled.footer`
  border-bottom: 3px solid var(--gold);
  border-top: 3px solid var(--gold);

  background-color: ${(props) =>
    props.theme === "dark" ? " var(--grey-3)" : " var(--grey-4)"};
  color: var(--platinum);

  font-weight: 500;

  z-index: 995;
  position: static;
  bottom: 0;
  width: 100%;

  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
