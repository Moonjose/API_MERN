import styled, { createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: darkgray;
  }

  html, body, #root {
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  div > h1 {
    font-size: 50px;
  }
`

export const Button = styled.button`
  width: 60px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background: ${props => props.isred ? '#ff3333' : 'green' };
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  height: ${props => props.desc === 'main' ? 'auto' : '300px' };
  width: ${props => props.desc === 'main' ? 'auto' : '70vw' };;
  max-width: ${props => props.desc === 'main' ? '360px' : 'auto' };;
  margin: 30px auto;
  padding: 15px;
  background: #e3e3e3;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.5);
`

export const Box = styled.div`
  max-height: 500px;
  margin-bottom: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  outline: auto;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 15px;
  border-radius: 4px;
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 300px;
  width: 40vw;
  margin: 30px auto;
  padding: 70px 0px 0px 30px;
  border-radius: 10px;
  background: #e3e3e3;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.5);
`