import styled from 'styled-components';

export interface ButtonStyles {
  readonly background?: string;
  readonly color?: string;
  readonly fontSize?: string;
  readonly fontWeight?: number;
  readonly radius?: string;
  readonly marginTop?: string;
  readonly marginBottom?: string;
}

export const ButtonWrapper = styled.button<ButtonStyles>`
  display: block;
  border: none;
  text-align: center;
  box-sizing: border-box;
  text-decoration: none;
  padding: 10px 25px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;

  background: ${({ background }) => background || "black"};
  color: ${({ color }) => color || "rgb(255, 255, 255)"};
  font-size: ${({ fontSize }) => fontSize || "15px"};
  font-weight: ${({ fontWeight }) => fontWeight || "600"};
  border-radius: ${({ radius }) => radius || "6px"};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.25);
  }
`;
