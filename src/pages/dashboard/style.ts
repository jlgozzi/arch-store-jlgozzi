import styled from "styled-components";

// const blinkCursor = keyframes`
//   from {
//       border-right-color: black;
//     }
//     to {
//       border-right-color: transparent;
//       }
// `;

export const DashboardStyled = styled.div`
  width: 100vw;
  height: 100vh;
  transition: all 0.5s linear;
  background-color: ${(props) =>
    props.theme === "dark" ? " var(--grey-2)" : " var(--grey-0)"};

  main {
    width: 85%;
    margin: 0 auto;
  }

  .main-title {
    width: 17%;
    border-right: 2px solid
      ${(props) =>
        props.theme === "dark" ? " var(--grey-0)" : " var(--grey-2)"};
  }

  /* .typingAnimation {
    animation: blinkCursor 500ms infinite normal;
  } */
`;
