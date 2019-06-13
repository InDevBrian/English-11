import styled from '@emotion/styled'

export const Container = styled.div`
  text-align: center;
  background-color: rgba(65, 25, 75, 0.4);
  border-radius: 12px;

  @media screen and (min-width: 901px) {
    margin: 12px 0;
    padding: 16px;
    width: 45%;
  }

  @media screen and (min-width: 1600px) {
    width: 30%;
  }

  @media screen and (max-width: 900px) {
    padding: 16px;
    margin: 16px 0;
    width: 80%;
  }
  
  @media screen and (max-width: 650px) {
    padding: 12px;
    margin: 12px 0;
    width: 80%;
  }
`

Container.Title = styled.h2`
  margin-bottom: 8px;
  padding: 6px 0;
  background-color: rgba(140, 130, 160, 0.4);
  border-radius: 8px;
`

Container.Text = styled.p`
  font-size: 16px;
  padding: 8px 5%;
  background-color: rgba(180, 180, 180, 0.4);
  border-radius: 8px;
`
