import React from 'react';

import { StyledHeader } from './styled';
import logo from './logo.png';

export const Header = () => (
    <StyledHeader>
      <img src={logo} alt='logo' width='100px'/>
    </StyledHeader>
);
