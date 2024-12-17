import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  max-width: 150rem;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 0.7rem;
`
export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`
export const CardName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`
export const CardImage = styled.img`
  width: 2.3rem;
  height: 2.3rem;
`
export const CardTitle = styled.h1`
  font-size: 2rem;
`
export const RemoveButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: white;
`
export const Image = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`

