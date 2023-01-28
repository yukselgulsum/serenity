import React from 'react';
import { InputGroup } from '../InputGroup';
import { Title } from '../Title';

import { InputRow, StyledForm, StyledWrapper } from './styled';

export function ContactForm() {
  return (
    <>
    <StyledWrapper>
      <Title title="Formulaire de contact" />
      <StyledForm name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="contact" value="Contact Form" />
        <InputRow>
          <InputGroup type="text" id="name" label="Nom" />
        </InputRow>
        <InputRow>
          <InputGroup type="tel" id="phone" label="Téléphone" />
        </InputRow>
        <InputGroup type="textArea" id="message" label="Votre demande" />
        <button type="submit">Send</button>
      </StyledForm>
    </StyledWrapper>
    </>
  );
}
