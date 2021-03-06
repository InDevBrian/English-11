import styled from '@emotion/styled'

export const Container = styled.div`
  text-align: center;
  background-color: rgb(251, 188, 5);
  border-radius: 12px;
  width: 100%;
  :nth-child(2n) {
    background-color: rgb(0, 105, 237);
  }

  @media screen and (min-width: 901px) {
    margin: 12px 0;
    padding: 16px;
    width: 43%;
  }

  @media screen and (max-width: 900px) {
    padding: 16px;
    margin: 16px 0;
  }
  
  @media screen and (max-width: 650px) {
    padding: 12px;
    margin: 12px 0;
  }
`

Container.Title = styled.h2`
  margin-bottom: 8px;
  padding: 6px 0;
  background-color: rgba(25, 25, 25, 0.3);
  border-radius: 8px;

  @media screen and (min-width: 901px) {
    font-size: 26px;
  }

  @media screen and (max-width: 900px) {
    font-size: 22px;
  }
  
  @media screen and (max-width: 650px) {
    font-size: 18px;
  }
`

Container.Text = styled.p`
  padding: 8px 5%;
  background-color: rgba(25, 25, 25, 0.3);
  border-radius: 8px;

  @media screen and (min-width: 901px) {
    font-size: 14px;
  }

  @media screen and (max-width: 900px) {
    font-size: 12px;
  }
  
  @media screen and (max-width: 650px) {
    font-size: 10px;
  }
`
