import React from 'react';

import { ButtonWrapper, ButtonStyles } from './button.styles';

interface ButtonProps extends ButtonStyles {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonWrapper {...props}>
    {children}
  </ButtonWrapper>
);

export default Button;
