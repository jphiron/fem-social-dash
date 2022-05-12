import styled from "styled-components";

const handleColor = site => {
  switch (site) {
    case "facebook":
      return "hsl(208, 92%, 53%)";
    case "twitter":
      return "hsl(203, 89%, 53%)";
    case "instagram":
      return "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))";
    case "youtube":
      return "hsl(348, 97%, 39%)";
    default:
      return "none";
  }
};

const Card = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  background: hsl(228, 28%, 20%);
  min-height: 250px;
`;

const Handle = styled.div`

`;

export { Card }; 
