import * as React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'
import { Container } from '../components/layouts/Container'
import {css, keyframes } from "@emotion/react"
import BackgroundMedia from '../media/images/dropkick_demo.gif'
import { navigate } from "gatsby"

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt(pruneLength: 180)
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          type

        }
        id
        body
        slug
      }
    }
  }
`
const borderAnimation = keyframes`
  to {
    background-position: 50% 0%, 50% 100%, 0% 0%, 100% 100%;

  }
`
const RecentPosts = styled.article`
  position: relative;
  margin-bottom: 3em;
  //width: 100%;
  //background: linear-gradient(0deg, rgba(255,255,255, 1) 0%, rgba(255,255,255, 0) 50%);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`
const Wrapper = styled.section`

`



const Index = ({ data }) => {
  // const [bgImage, setBgImage] = useState("")
  // const im = import('../media/images/dropkick_demo.gif').then(image => {
  //   setBgImage(image)
  // });
  return (

    <Container css={css`
      display: grid;
      grid-template-columns: 1fr min(80ch, calc(100% - 64px)) 1fr;
      grid-column-gap: 32px;
      & > *{
          grid-column: 2;
      }
    `}>
      {/* Todo: add hero??
           Todo: add other info? */}
      <ul css={css`
    margin: 0px;
    padding: 0px;
    //padding-right:3rem;
    &:first-of-type {
      margin-top: 3em;
    }
  `}>
        {
          data.allMdx.nodes.map((node) => (
            <RecentPosts
              key={node.id}>
              <section css={css`
               position:relative;
                cursor: pointer;
                &:before{
                  content:"";
                  background: linear-gradient(90deg, rgba(255,160,57,1) 60%, transparent 50%), 
                  linear-gradient(90deg, rgba(255,160,57,1) 60%, transparent 50%), 
                  linear-gradient(0deg, rgba(255,160,57,1) 60%, transparent 50%), 
                  linear-gradient(0deg, rgba(255,160,57,1) 60%, transparent 50%);
                background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
                background-size: 6px 3px, 6px 3px, 3px 6px, 3px 6px;
                background-position: 5% 0%, 98% 100%, 0% 100%, 100% 0px;
                border-radius: 2px;
                transition: all 150ms ease-in-out; 
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                
                }
                &:hover::before{
                  animation: ${borderAnimation} 16s linear infinite alternate;
                  //transform: scale(1);
                  -webkit-box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                  -moz-box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
                  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

                };
          `}
          onClick={event => {
            event.preventDefault()
            navigate("/" + node.slug)
          }}
          >
            <Wrapper 
            
            css={css`
            //border: 2px solid red;
                content: "";
                &:hover:before{
                  background-color: white;
                  background: linear-gradient(0deg, rgba(255,255,255, 1) 50%, rgba(255,255,255, 0.5) 80%, rgba(255,255,255, 0) 100%), url(${BackgroundMedia});
                  background-size: cover;
                  background-repeat: no-repeat;
                  content:"";
                  top:3rem;
                  left: 3px;
                  right: 3px;
                  bottom: 3px;
                  position: absolute;
                  opacity: 1;
                  z-index:0;
                  filter:  opacity(70%) blur(2px);
                };


                // };              
            `}>

                <heading css={css`
                    display: flex;
                    flex-direction: column;
                     background-image: url('../media/images/dropkick_demo.gif'); // BackgroundMedia
                    //background-color:red;
                `}>

              
                  <h2 css={css`
                    position: relative;
                    //top: -3rem;
                    text-align: center;
                    background-color: #252423;
                    float: right;
                    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.623);
                    padding: 0rem 0.5rem;
                    border: 3px solid #ffa039;
                    margin: 0rem;
                    //position: absolute;
                    //top: -1.5rem;
                    right: 0rem;
                    color: #FFF;
                    font-family: 'Montserrat';
                    text-decoration: none;
                    &:hover{
                      color: #FFF;
                      //box-shadow: none;
                    }
                    //padding: 0.2em 2em;
                  `}>
                      {node.frontmatter.title.split(' ').slice(0, 5).join(' ') + (node.frontmatter.title.split(' ').length > 5 ? '...' : '')}
                  </h2>
                  <h3 css={css`
                      position: relative;
                      padding-top: 4rem;
                      padding-left: 2rem;
                      padding-right: 0.2rem;
                      margin: 0rem;

                      
                  `}>
              {node.frontmatter.type}</h3>

                </heading>



                <p css={css`
              color: #999999;
              margin: 0rem;
              position: relative;
              //top: -1rem;
              font-size: 0.8rem;
              padding: 0rem 2rem 1rem;
              line-height: 0;
            `}> Posted: {node.frontmatter.date}
                </p>
                <p css={css`
                  padding: 0.2rem 2rem  2rem;
                  margin:0px;
                  position: relative;
                `}>{node.excerpt}
                <br />E:\Projects\RookTKO_frontend\RookTKO_Frontend\rooktko-frontend\src\media\images\icon.png
                <img src={require(`../media/images/icon.png`)}/>
                <span>
                  Read More -&gt;
                </span>
                
                </p>
                {/* <MDXRenderer>

                {node.exc}
          </MDXRenderer> */}
          </Wrapper>
              </section>
            </RecentPosts>
          ))
        }
      </ul>
    </Container>

  )
}
export default Index