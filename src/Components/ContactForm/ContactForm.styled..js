import styled from 'styled-components';
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border: 2px solid black;
  padding: 10px;
`;
export const StyledInput = styled.input`
  margin-bottom: 15px;
  height: 20px;
  border-radius: 5px;
  width: 250px;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const StyledButton = styled.button`
  box-sizing: border-box;
  width: 100px;
  height: 24px;
  background: grey;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-weight: 400;
  font-size: 15px;
`;
