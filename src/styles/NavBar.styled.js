import styled from "styled-components";

export const NavBarLinksCointainerStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 55vw;
  height: 100%;

  p {
    font-size: 1rem;
    font-weight: 400;
  }

  span {
    color: #fff;
    font-weight: bold;
  }

  ul {
    width: ${(props) => (props.center ? "100%" : "50%")};
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) =>
      props.center ? "space-around" : "space-between"};
  }

  & .logo {
    width: 5rem;
  }
`;
