import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";
import { Toggle } from "../Toggle";
import { Header, TextContainer, Title, FollowerCount } from "./TopBar.styles";

const TopBar = props => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <Header>
      <TextContainer>
        <Title>Social Media Dashboard</Title>
        <FollowerCount theme={theme}>Total followers: 23,004</FollowerCount>
      </TextContainer>
      <Toggle />
    </Header>
  );
};

export { TopBar };
