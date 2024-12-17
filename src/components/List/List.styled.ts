import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.12rem;
`
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`
export const Button = styled.button`
  width: 15.6rem;
  height: 2.5rem;
  outline: 0;
  align-items: center;
  background: green;
  color: white;
  border-radius: 0.25rem;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  gap: 0.5rem;
  justify-content: center;
  line-height: 1.5;
  overflow: hidden;
  padding: 0.75rem 1rem;
  text-decoration: none;
  text-overflow: ellipsis;
  transition: all .14s ease-out;

  &:hover {
    box-shadow: 4px 4px 0 black;
    transform: translate(-0, 25rem, -0, 25rem);
  }

  &:focus {
    outline-offset: 1px;
  }
`