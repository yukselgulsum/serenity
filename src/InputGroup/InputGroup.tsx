import React from 'react';

import { InputWrapper, StyledError, StyledInput, StyledLabel, StyledTextArea } from './styled';

export interface InputGroupProps {
  id: string;
  placeholder?: string;
  type?:
    | 'color'
    | 'date'
    | 'text'
    | 'hidden'
    | 'password'
    | 'number'
    | 'tel'
    | 'email'
    | 'textArea'
    | 'select';
  label?: string;
  error?: string;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  error,
  label,
  placeholder,
  type = 'text',
  id,
}) => {
  return (
    <InputWrapper>
      {label && <StyledLabel>{label}</StyledLabel>}
      {type !== 'textArea' && (
        <StyledInput id={id} name={id} type={type} placeholder={placeholder} />
      )}
      {type === 'textArea' && <StyledTextArea id={id} name={id} placeholder={placeholder} />}
      {error && <StyledError>{error}</StyledError>}
      {type === 'select' && (
        <select id="menu" title="Sujet">
          <option value="sujet">Sujet</option>
          <option value="shooting">Shooting Bébé</option>
          <option value="mariage">Engagement/Mariage</option>
          <option value="pro">Evènement Professionnel</option>
        </select>
      )}
    </InputWrapper>
  );
};
