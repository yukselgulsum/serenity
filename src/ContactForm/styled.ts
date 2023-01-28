import styled from "@emotion/styled";

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: col;

  > *:not(:last-child) {
    margin-right: 16px;
  }
`;

export const StyledForm = styled.form`
  margin: 16px;
  > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
