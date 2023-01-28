import React from 'react';

import {
  FooterWrapper,
  SubTitle,
} from './styled';

export interface FooterProps {
  siteTitle: string;
}

export const Footer: React.FC<FooterProps> = ({siteTitle}) => {
  const now = new Date();
  const year = now.getFullYear();

  return (
    <FooterWrapper>
      <SubTitle>{`©${year} - ${siteTitle}`}</SubTitle>
    </FooterWrapper>
  );
};
