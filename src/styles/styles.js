import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 30px;
  max-width: 800px;
  border-radius: 4px;
  display: flex;
  margin: 80px auto;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 50px;
    margin-top: 15px;
    align-items: center;
    flex-direction: row;
    display: flex;
  }

  img {
    max-width: 150px;
  }
`;

export const ChocolateList = styled.ul`
  border-top: 1px solid #eee;
  list-style: none;
  margin-top: 20px;

  li {
    & + li {
      margin-top: 10px;
      border-top: 1px solid #eee;
    }
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 15px 10px;
      border-radius: 4px;

      h2 {
        margin-bottom: 5px;
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #eee;
      }

      div {
        display: block;
        margin-left: 10px;
      }
    }
  }
`;
