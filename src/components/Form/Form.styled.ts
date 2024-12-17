import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`
export const FormInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Label = styled.label`
  font-size: 1.3rem;
`
export const Field = styled.div`
  display: flex;
  align-items: center;
  width: 25rem;
  gap: 1.5rem;
`
export const Select = styled.select`
  width: 15rem;
  height: 2rem;
  border: none;
  appearance: none;
  padding-right: 1.87rem;
`
export const SelectField = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  gap: 0.7rem;
  border: 1px solid black;
  border-radius: 0.5rem;
`
export const HintField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.87rem;
`
export const HintArea = styled.textarea`
  width: 43.75rem;
  height: 3.12rem;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }
  &::placeholder {
    text-align: center;
    line-height: 3.3rem; 
  }
`
export const Icon = styled.img`
  width: 1.12rem;
  height: 1.12rem;
`
export const IconAppearance = styled.img`
  position: absolute;
  left: 15.9rem;
  width: 1rem;
  height: 1rem;
  pointer-events: none;
`;
export const WarningMessage = styled.p`
  font-size: 1rem;
`

