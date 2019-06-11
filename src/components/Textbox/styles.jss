import styled from '@emotion/styled'

export const Container = styled.div`
  text-align: center;
  background-color: rgba(65, 25, 75, 0.4);
  padding: 12px;
  width: 40%;
  min-width: 300px;
  max-width: 600px;
  display: inline-grid;
  margin: 12px 2.5% 0 0;

  &:nth-child(2n-1) {
    margin: 12px 0 0 2.5%;
    float: right;
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
