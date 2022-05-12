import styled from "styled-components"
import { Toggle } from "../Toggle";

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
`

const Title = styled.h1`
  margin-bottom: .5rem;
`;

const FollowerCount = styled.span`
color: hsl(228, 34%, 66%);
  font-weight: 700;
`;

const TopBar = (props) => {
  return (
    <Header>
      <TextContainer>
        <Title>Social Media Dashboard</Title>
        <FollowerCount>Total followers: 23,004</FollowerCount>
      </TextContainer>
      <Toggle />
    </Header>
  )
}

export { TopBar };