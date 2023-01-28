import styled from '@emotion/styled';

export const StyledDynamicComponent = styled.button`
  box-sizing: border-box;
  position: relative;
  display: inline-flex !important;
  padding: 12px 10px 12px 10px;
  margin: 10px;
  font: inherit;

  color: inherit;
  text-decoration: none;
  cursor: pointer !important;
  border: 1px solid #00000033;
  outline: 0;
  font-weight: 500;

  white-space: nowrap;
  border-radius: 12px;
  height: 20px;

  display: flex;
  flex-direction: row;

  &:hover,
  &:focus {
    outline: none;
    background-color: #202333;
    color: white;
    text-decoration: none;
  }
`;
export const TextPart = styled.span`
  flex: 1;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  align-self: center;
`;
