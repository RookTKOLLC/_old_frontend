import styled from '@emotion/styled'
import * as React from 'react'

const SiteMap = styled.div`
    grid-area: sitemap;
    display: flex;
    justify-content: center;
`
const Latest = styled.div`
    grid-area: latest;
    display: flex;
    justify-content: center;
`
const Contact = styled.div`
    grid-area: contact;
    display: flex;
    justify-content: center;
`
const Newsletter = styled.div`
    grid-area: newsletter;
    display: flex;
    justify-content: center;
`
const Copyright = styled.div`
    grid-area: copyright;
    display: flex;
    justify-content: center;
`


const MainFooter = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-row: auto;
    grid-template-areas:
        "sitemap    latest      contact"
        "newsletter newsletter  newsletter"
        ".      copyright   .";
    background-color: #252423;
    width: 100%;
    color: #FFF;
    height: 100px;
`


export default function Footer(){

    return(
        <MainFooter>
            <SiteMap>Hello</SiteMap>
            <Latest>Stuff</Latest>
            <Contact>Stuf and more</Contact>
            <Newsletter>SUbscribe to me now</Newsletter>
            <Copyright>© 2020-present RookTKO LLC. All Rights Reserved.</Copyright>
        </MainFooter>
    )
}