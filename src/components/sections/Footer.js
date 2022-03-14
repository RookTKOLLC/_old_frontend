import * as React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Logo from '../../media/images/RookTKO.png'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Newsletter = styled.section`
    grid-area: Newsletter;
    display: flex;
    justify-content: center;
`
const LogoCopyright = styled.section`
    grid-area: LogoCopyright;
    display: flex;
    justify-content: center;
    border-right: 1px solid #ffa039;
    align-items: center;
`

const SiteMap = styled.section`
    grid-area: SiteMap;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
    "Heading Heading Heading"
    "Link Link Link"
    
`

const Heading = styled.h6`
    grid-area: Heading;
    margin: 0px;
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 1.2rem;
    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.623);
`

const FooterLinks = styled.ul`
    grid-area: Link;
    display: grid;
    justify-content: center;
    align-content: center;
    grid-auto-flow: column;
    margin: 0px;
`

const MainFooter = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-row: auto;
    grid-template-areas:
        "Newsletter     Newsletter      Newsletter  Newsletter"
        "LogoCopyright  LogoCopyright   SiteMap     SiteMap";
    background-color: #171717;
    width: 100%;
    color: #FFF;
    height: 180px;
    grid-gap: 10px;
`


export default function Footer() {

    return (
        <MainFooter>
            <Newsletter>Subscribe to me now</Newsletter>
            <LogoCopyright>
                <img
                    src={Logo}
                    style={{
                        width: '4rem'
                    }}
                    alt="Company Logo"
                />
                <span>© 2020-present RookTKO LLC. All Rights Reserved.</span></LogoCopyright>
            <SiteMap>
                <Heading>Links</Heading>
                <FooterLinks css={css`
                        padding: 0rem;
                        li{
                            padding:0rem 0.5rem;
                            list-style-type: none;
                        }

                `}>
                    <li><Link>ContactUs</Link></li>
                    <li><Link>Jobs</Link></li>
                    <li><Link>About Us</Link></li>
                </FooterLinks>

            </SiteMap>
        </MainFooter>
    )
}