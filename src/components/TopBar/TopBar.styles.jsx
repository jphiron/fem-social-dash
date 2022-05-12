import styled from "styled-components";

const Header = styled.header`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Title = styled.h1`
  margin-bottom: 0.5rem;
  transition: color 0.2s ease-in;
`;

const FollowerCount = styled.span`
  /* color: hsl(228, 34%, 66%); */
  color: ${props =>
    props.theme === "dark" ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
  font-weight: 700;
  transition: color 0.2s ease-in;
`;

export { Header, TextContainer, Title, FollowerCount };
