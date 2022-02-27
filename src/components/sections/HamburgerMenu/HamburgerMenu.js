import React from "react";
import { css } from '@emotion/react'

export const HamburgerMenu = () => {

    return(
        <section
            css={css`
                width:100%;
                background-color: #171717; //#252423;
                z-index: 1;
                position: sticky;
                top:0px;
                margin-bottom: 45px;
            `}
        >
            X
        </section>
    )
}