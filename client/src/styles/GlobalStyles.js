import styled, { createGlobalStyle} from 'styled-components';

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

  input {
    border-radius: 5px;
    outline: none;
    border: 0px solid;
    padding: 5px 0px 5px 10px;
    width: 100%;
  }

  input:focus {
    box-shadow: 0 0 5px rgba( 0, 0, 0, 0.5);
  }

  table {
    min-width: 100%;
  }

  button:hover {
    filter: brightness(120%);
  }

  .errorDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-bottom: 150px;
    background: white;
  }

  .errorDiv h1 {
    font-size: 200px;
    font-weight: bold;
    margin-bottom: 0px;
  }

  .errorDiv h2 {
    font-weight: bold;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 400px;
  width: ${props => props.width || '600px'};
  margin: 30px auto;
  padding: 15px;
  border-radius: 10px;
  background: #e3e3e3;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.5);
`
export const CreateDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  width: 30vw;
  min-width: 500px;
  justify-content: center;
  background: #e3e3e3;
  margin: 0 auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba( 0, 0, 0, 0.5);
`

export const Box = styled.div`
  max-height: 500px;
  width: 100%;
  margin-bottom: 20px;
  overflow-y: scroll;
  overflow-x: hidden;
  outline: auto;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 90%;
  margin: 0 auto;
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
export const FormButton = styled.button`
  width: 70px;
  padding: 5px;
  background: ${props => props.color};
  border-radius: 5px;
  cursor: pointer;
`

export const ErrorDiv = styled.div`
`