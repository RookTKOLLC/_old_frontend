import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Header from '../sections/Header/Header'
import Footer from '../sections/Footer'
import styled from '@emotion/styled'
import { Container } from './Container'
import NavBar from '../sections/NavBar/NavBar'
import SocialMediaNav from '../sections/SocialMediaNav/SocialMediaNav'


const Content = styled.main`
min-height: calc(100vh - 150px);
`
export default function Post({children }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                title
                }
            }
        }
        `)
    return (
        <>
            <Content>
                <Container>
                    {children}
                </Container>
            </Content>
        </>
    )
}



