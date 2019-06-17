import styled from '@emotion/styled'

export const Container = styled.div`
  text-align: center;
  background-color: rgb(0, 235, 100);
  border-radius: 12px;
  width: 100%;

  @media screen and (min-width: 901px) {
    margin: 12px 0;
    padding: 16px;
    width: auto;
    max-width: 93%;
  }

  @media screen and (max-width: 900px) {
    padding: 16px;
    margin: 16px 0;
    width: auto;
  }
  
  @media screen and (max-width: 650px) {
    padding: 12px;
    margin: 12px 0;
  }
`

Container.Title = styled.h2`
  margin-bottom: 8px;
  padding: 6px 12px;
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

Container.Table = styled.table`
  width: 100%;
  font-size: 16px;
  padding: 8px;
  border-collapse: collapse;
  background-color: rgba(25, 25, 25, 0.3);
  border-radius: 8px;

  tr {
    border-bottom: 1px solid #666;

    &:last-child {
      border-bottom: none;
    }

    th {
      padding: 6px 3px;
      font-size: 18px;

      @media screen and (max-width: 600px) {
        font-size: 16px;
      }

      @media screen and (max-width: 500px) {
        font-size: 12px;
      }

      @media screen and (max-width: 400px) {
        font-size: 11px;
      }

      @media screen and (max-width: 360px) {
        font-size: 8px;
      }
    }

    td {
      padding: 4px 2px;
      
      @media screen and (max-width: 600px) {
        font-size: 12px;
      }

      @media screen and (max-width: 500px) {
        font-size: 11px;
      }

      @media screen and (max-width: 400px) {
        font-size: 8px;
      }

      @media screen and (max-width: 360px) {
        font-size: 6px;
      }
    }
  }
`
