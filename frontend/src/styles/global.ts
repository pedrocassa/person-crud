import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

export const GlobalStyles: GlobalStyleComponent<
  any,
  DefaultTheme
> = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }
  
    html {
      height: 100%;
      min-height: 100%;
    }
  
    body {
      height: 100%;
      min-height: 100%;
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
    }
  
    #root {
      display: flex;
      flex-direction: column;
      flex: 1 1 0;
      position: relative;
      min-height: 100%;
      max-height: 100%;
      font-size: ${({ theme }) => theme.font.sizes.small};
    }
  `
