import styled from '@emotion/styled'

export const Container = styled.div`
  margin: 12px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

export const HeaderContainer = styled.div`
  background-color: rgba(23, 23, 23, 0.8);
  border-radius: 12px 12px 0 0;
  width: 100%;
`

HeaderContainer.Inner = styled.div`
  padding: 12px;
`

HeaderContainer.Inner.Title = styled.h1`
  text-align: center;
`

HeaderContainer.Inner.SubTitle = styled.h3`
  padding-top: 8px;
  text-align: center;
  color: rgb(201, 154, 34);
`

HeaderContainer.Lower = styled.div`
  height: 40px;
  background-color: rgba(10, 10, 10, 0.4);
  border-radius: 0 0 4px 4px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`

HeaderContainer.Lower.Button = styled.button`
  text-align: center;
  color: #fff;
  font-size: 14px;
  text-decoration: none;
  background-color: rgba(0,0,0,0);
  border-radius: 4px;
  padding: 6px;
  margin: 6px 0;

  &:hover {
    transition: 50ms ease-in-out;
    transform: scale(1.1);
  }
`
