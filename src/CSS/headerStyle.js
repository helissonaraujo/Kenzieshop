import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: #F5F5F5;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E0E0E0;
  padding: 10px;

  h2 {
    cursor: pointer;
    color: black;
  }
  span{
    color: red;
  }
`;
export const Content = styled.div`
  display: flex;
`;

export const IconHeader = styled.div`
  margin-right: 30px;
  display: flex;
  cursor: pointer;

  svg {
    margin-right: 30px;
    width: 30px;
      background: black;
      width: 40px;
      height: 40px;
      padding: 5px;
      border-radius: 5px;
  }

  span {
    background-color: red;
    height: 20px;
    border-radius: 100%;
    width: 20px;
    text-align: center;
    position: relative;
    bottom: 4px;
    right: 14px;
    color: white;
  }
  p{
    color: black;
  }
`;
