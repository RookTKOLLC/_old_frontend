import { css } from '@emotion/react';
import globalReset from './globalReset';
import '@fontsource/montserrat/900.css'
import "@fontsource/playfair-display/400.css"
import "@fontsource/fira-sans-condensed/400.css"


const globalTypography = css`
  * {
    font-family: "Fira Sans Condensed";
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Montserrat'
  }
  body {
    color: ${props => props.theme.light.text.primary}
  }
  a{
    color: ${props => props.theme.light.text.primary}
  }
  a:hover {
    color: ${props => props.theme.light.text.tertiary}
  }
`

const globalStyles = css`
  ${globalReset}
  ${globalTypography}
`;

export default globalStyles;