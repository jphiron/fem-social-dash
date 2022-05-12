import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: ${({columns}) => `repeat(${columns}, 1fr)`};
  grid-template-rows: ${({rows}) => `repeat(${rows}, 1fr)`};
  position: relative;
  z-index: 3;
`

export { Grid };