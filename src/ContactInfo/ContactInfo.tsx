import React from 'react';
import { Title } from '../Title';

import { ContactWrapper, Info } from './styled';

export interface ContactInfoProps {
  name: string;
  phone: string;
  mail: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ name, phone, mail }) => {
  return (
    <ContactWrapper>
      <Title title="Contact Info" />
      <Info>
        {name}
      </Info>
      <Info>
        {phone}
      </Info>
      <Info>
        {mail}
      </Info>
    </ContactWrapper>
  );
};
