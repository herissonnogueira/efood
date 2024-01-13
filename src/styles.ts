import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  orange: '#E66767',
  white: '#FFFFFF',
  lightPeach: '#FFEBD9',
  peach: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.lightPeach};
    color: ${colors.orange};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Logo = styled.img`
  width: 124px;
  max-width: 100%;
`

export const Container = styled.div`
  width: 1024px;
  max-width: 100%;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 120px;
  background-color: ${colors.lightPeach};
`
