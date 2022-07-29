import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 30px auto;
  flex-wrap: wrap;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: 275px;
  border-radius: 6px;
  margin-top: 15px;

  @media (min-width: 768px) {
  button {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: none;
    background-color: grey;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }
  button:hover {
    background-color: black;
    transition: 0.5s;
    color: white;
    font-weight: bold;
  }
  div {
    display: flex;
    padding: 10px;
    flex-direction: column;
  }
  h3 {
    margin: 5px 0;
    color: #212125;
  }
  span {
    margin-bottom: 5px;
    color: red;
  }
`;
