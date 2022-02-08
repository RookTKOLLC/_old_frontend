import React from "react";
import './src/styles/globalReset.css'
import './src/styles/theme.css'
import globalStyles from "./src/styles/globalStyles";
import { css } from '@emotion/react';
import globalReset from "./src/styles/globalReset";
import MainLayout from './src/components/layouts/MainLayout'

export const wrapRootElement = ({ element, props }) => {
    // props provide same data to Layout as Page element will get
    // including location, data, etc - you don't need to pass it
    return <MainLayout styles={css`${globalReset}`} {...props}>{element}</MainLayout>
  }

// export const wrapRootElement = ({element, props }) => {
//     return <div data-testid="test"{...props}>{element} </div>
// }