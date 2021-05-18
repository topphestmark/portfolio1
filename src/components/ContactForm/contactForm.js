import styled from "styled-components/macro";

export const FormHeader = styled.h4`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Label = styled.label`
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 3px;
`;
export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 5px 3px;
  margin-bottom: 8px;
  outline: 0;
  opacity: 0.85;
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 5px 3px;
  font-size: 18px;
  resize: vertical;
  outline: 0;
  opacity: 0.85;
`;
export const Button = styled.button`
  width: 100%;
  margin-top: 12px;
  padding: 12px;
  font-size: 16px;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  letter-spacing: 1px;
  border: 0;
  opacity: 0.95;
  cursor: pointer;
`;
