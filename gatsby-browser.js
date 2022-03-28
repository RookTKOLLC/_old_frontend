import React from "react";
import './src/styles/globalReset.css'
import './src/styles/theme.css'
import '@fontsource/montserrat/900.css'
import "@fontsource/playfair-display/400.css"
import "@fontsource/fira-sans-condensed/400.css"
import MainLayout from './src/components/layouts/MainLayout'




export const wrapRootElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return   <MainLayout  {...props}>{element}</MainLayout>
}

// export const wrapRootElement = ({element, props }) => {
//     return <div data-testid="test"{...props}>{element} </div>
// }