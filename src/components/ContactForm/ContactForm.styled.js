import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  display: block;
  width: 300px;
  margin-bottom: 6px;
`;

export const Emessage = styled(ErrorMessage)`
  width: 300%;
  padding: 4px;
  display: block;
  font-size: 12px;
  box-sizing: border-box;
  color: red;
`;
