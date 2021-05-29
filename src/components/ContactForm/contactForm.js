import styled from "styled-components/macro";

export const FormHeader = styled.h4`
  margin-left: 0.2em;
  margin-bottom: 0.25em;
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.85;
  color: ${(props) => props.theme.colors.dark1};

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
  font-size: 0.75rem;
  opacity: 0.85;
  margin-bottom: 3px;
  margin-left: 0.25em;
  color: ${(props) => props.theme.colors.dark2};
`;
export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  padding: 0.375em 0.625em;
  margin-bottom: 8px;
  outline: 0;
  color: ${(props) => props.theme.colors.dark2};
  background-color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};

  &:focus {
    border: 1px solid transparent;
    outline: 1px solid ${(props) => props.theme.colors.primary};
    ${(props) => props.theme.boxShadow};
  }
`;
export const TextArea = styled.textarea`
  width: 100%;
  padding: 0.375em 0.625em;
  font-size: 18px;
  resize: vertical;
  outline: 0;
  color: ${(props) => props.theme.colors.dark2};
  background-color: ${(props) => props.theme.colors.light};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};

  &:focus {
    border: 1px solid transparent;
    outline: 1px solid ${(props) => props.theme.colors.primary};
    ${(props) => props.theme.boxShadow};
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.2em;
  padding: 10px;
  font-size: 1.2rem;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.light};
  letter-spacing: 1px;
  border: 0;
  opacity: 1;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
    ${(props) => props.theme.boxShadow};
  }
`;
