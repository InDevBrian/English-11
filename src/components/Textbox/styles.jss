import styled from '@emotion/styled'

export const Container = styled.div`
  text-align: center;
  background-color: rgba(65, 25, 75, 0.4);

  @media screen and (max-width: 900px) {
    padding: 16px;
    margin: 16px 15%;
  }
  
  @media screen and (max-width: 650px) {
    padding: 12px;
    margin: 12px 10%;
  }
`

Container.Title = styled.h2`
  margin-bottom: 8px;
  padding: 2px;
  background-color: rgba(140, 130, 160, 0.4);
`

Container.Text = styled.p`
  font-size: 16px;
  background-color: rgba(180, 180, 180, 0.4);
`
