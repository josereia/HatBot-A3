import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #785EDD;
  padding: 16px;
  margin: 30px auto;
  border-radius: 5px;
  width: 60%;
  max-width: 300px;
  height: 60vw;
  max-height: 300px
`

export const Title = styled.h3`
  color: #fff;
  font-size: 1.3rem
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
`