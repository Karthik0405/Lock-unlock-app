// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ImageElement = styled.img`
  width: 100px;
`

export const HeadingElement = styled.p`
  color: #e2e8f0;
  font-family: Roboto;
  font-size: 32px;
  font-weight: 400;
`

export const ButtonElement = styled.button`
  background-color: #06b6d4;
  outline: none;
  cursor: pointer;
  border-style: none;
  color: #ffffff;
  font-family: Roboto;
  height: 45px;
  width: 90px;
  border-radius: 10px;
  font-weight: 500;
  self-justify: flex-end;
  margin-top: 100px;
`
