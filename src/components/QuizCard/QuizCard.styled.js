import styled from 'styled-components';



export const Wrapper = styled.div`
 
  border: 1px solid black;
 
`;

export const Topic = styled.h2`
  margin-top: 0;

`;

export const MetaWrapper = styled.div`
  display: flex;
  
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  
  margin: 0;
  border: none;
  color: red;

  :hover {
    color: green;
    background-color: blue;
  }

  svg {
    display: block;
  }
`;