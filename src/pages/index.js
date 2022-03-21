import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Container } from '../components/layouts/Container'
import { css, keyframes } from "@emotion/react"
import BackgroundMedia from '../media/images/dropkick_demo.gif'
import { navigate } from "gatsby"
import { FullBleed } from '../components/sections/FullBleed'
import { StaticImage } from "gatsby-plugin-image"
import CarouselHero from '../components/sections/CarouselHero/CarouselHero'
import { HiChevronRight } from '@react-icons/all-files/hi/HiChevronRight'


// export const query = graphql`
//   query {
//     allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//       nodes {
//         excerpt(pruneLength: 270)
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           type
//           headingImage {
//             publicURL
//           }
//           featureHero
//         }
//         id
//         body
//         slug
//       }
//     }
//   }
// `

const borderAnimation = keyframes`
  to {
    background-position: 50% 0%, 50% 100%, 0% 0%, 100% 100%;
  }
`

const moveUp = keyframes`
  to {
    top: -0.5rem;
  }
`

const RecentPosts = styled.article`
  top: 0rem;
  position: relative;
  margin-bottom: 3em;
  //width: 100%;
  //background: linear-gradient(0deg, rgba(255,255,255, 1) 0%, rgba(255,255,255, 0) 50%);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(255, 160, 57, 0.2);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 160, 57, 0.3);
  &:hover{
    animation: ${moveUp} 360ms ease-in-out 1 normal forwards;
    box-shadow: 0 4px 35px rgba(255, 160, 57, 0.4);
  }
`
const Wrapper = styled.section`

`
const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)
const FeaturedHero = styled.section`
  display: flex;
  height:36rem;
  @media (max-width: 650px) {
    background-color: red;
    color: #fff;
    height:20rem;
  }
`
const HeroSelection = styled.div`
  width: 12rem;
  background-color: pink;
  border: 2px solid red;
  margin:0 1rem;
  border-radius: 8px;
`


const Index = ({ data, location }) => {
  console.log('index data', data)
  //const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMdx.nodes
  const featuredArticles = posts.filter((node) => node.frontmatter.featured);
  const nonFeaturedArticles = posts.filter((node) => !node.frontmatter.featured);
  console.log('posts', posts)
  // if (posts.length === 0) {
  //   return (
  //     // <Layout location={location} title={siteTitle}>
  //     //   <Seo title="All posts" />
  //     //   <Bio />
  //       <p>
  //         No blog posts found. Add markdown posts to "content/blog" (or the
  //         directory you specified for the "gatsby-source-filesystem" plugin in
  //         gatsby-config.js).
  //       </p>
  //     // </Layout>
  //   )
  // }

  return (
    <Container css={css`
      display: grid;
      grid-template-columns: 1fr min(80ch, calc(100% - 64px)) 1fr;
      grid-column-gap: 32px;
      & > *{
          grid-column: 2;
      }
    `}>

      <FullBleed
        css={css`
          position: relative;
          overflow: hidden;
          top: -2.8rem;
          border-width: 0rem;
          border-bottom-width: 0.1rem;
          border-style: solid;
          border-color: #ffa039;
      `}>
        <CarouselHero featured={featuredArticles} />

      </FullBleed>


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
                border-radius: 8px;
                transition: all 150ms ease-in-out; 
                position:absolute;
                top:0;
                left:0;
                right:0;
                bottom:0;
                opacity:0;
                }
                &:hover::before{
                  animation: ${borderAnimation} 16s cubic-bezier(.17,.67,.83,.67) infinite alternate;
                  -webkit-box-shadow: rgba(255, 160, 57, 0.25) 0px 14px 28px, rgba(255, 160, 57, 0.22) 0px 10px 10px;
                  -moz-box-shadow: rgba(255, 160, 57, 0.25) 0px 14px 28px, rgba(255, 160, 57, 0.22) 0px 10px 10px;
                  box-shadow: rgba(255, 160, 57, 0.25) 0px 14px 28px, rgba(255, 160, 57, 0.22) 0px 10px 10px;
                  opacity:0.8;
                };
          `}
                onClick={event => {
                  event.preventDefault()
                  navigate(node.fields.slug)
                }}
              >
                <Wrapper

                  css={css`
                  &:before{
                    background-origin: padding-box;
                    background-color: white;
                    background: linear-gradient(0deg, rgba(0,0,0, 0.9) 15%,  rgba(0,0,0, 0) 100%), url(${node.frontmatter.headingImage.publicURL});
                    -webkit-mask-image:-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
                    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
                    background-position: center;
                    background-size: cover;
                    background-repeat: no-repeat;
                    content:"";
                    top:0px;
                    left: 0px;
                    right: 0px;
                    bottom: 0px;
                    position: absolute;
                    opacity: 0.34;
                    filter:  blur(4px);
                    z-index:0;
                     transition: all .3s ease-in-out;
                  }

                    &:hover::before{
                      top:3px;
                      left: 3px;
                      right: 3px;
                      bottom: 3px;
                      opacity: 1;
                      filter: blur(0px);
                    };           
            `}>

                  <heading css={css`
                    display: flex;
                    flex-direction: column;
                `}>


                    <h2 css={css`
                  //display:inline;
                    position: relative;
                    transform: translateY(-1.5rem);
                    text-align: center;
                    background-color: #242424;
                    float: right;
                    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.623);
                    padding: 0rem 0.5rem;
                    border: 3px solid #ffa039;
                    margin: 0 auto;
                    right: 0rem;
                    color: #FFF;
                    font-family: 'Montserrat';
                    text-decoration: none;
                    z-index:0;
                  `}>
                      {node.frontmatter.title.split(' ').slice(0, 8).join(' ') + (node.frontmatter.title.split(' ').length > 5 ? '. . .' : '')}
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
                    <br />
                    <span css={css`
                      display: inline-block;
                    `}>
                    <span  css={css`
                            text-decoration: none;
                            color: #ffffff;
                            font-family: 'Montserrat';
                            transition: color .3s ease-in-out;
                            &:after{
                                content: "";
                                width: 0;
                                display: block;
                                position: relative;
                                bottom: 6px;
                                height: 4px;
                                left: 0;
                                opacity: 1;
                                background-color: #ffa039;
                                transition: all .3s ease-in-out;
                            }
                        &:hover::after{
                            width:80%;
                        }
                        &:hover{
                          color: #ffa039;
                        }
                    `}>Read More 
                    <span css={css`
                      transform:translateY(10%);
                      display: inline-block;
                      transition: transform .3s ease-in-out;
                    `}>
                    <HiChevronRight />
                    <HiChevronRight css={css`
                      transform: translateX(-12px);
                    `}/>
                    <HiChevronRight css={css`
                      transform: translateX(-24px);
                    `}/>
                    </span>
                     </span>
                      
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
    // <div>
    //   <ol style={{ listStyle: `none` }}>
    //     {posts.map(post => {
    //       const title = post.frontmatter.title || post.fields.slug

    //       return (
    //         <li key={post.fields.slug}>
    //           <article
    //             className="post-list-item"
    //             itemScope
    //             itemType="http://schema.org/Article"
    //           >
    //             <header>
    //               <h2>
    //                 <Link to={post.fields.slug} itemProp="url">
    //                   <span itemProp="headline">{title}</span>
    //                 </Link>
    //               </h2>
    //               <small>{post.frontmatter.date}</small>
    //             </header>
    //             <section>
    //               <p
    //                 dangerouslySetInnerHTML={{
    //                   __html: post.frontmatter.description || post.excerpt,
    //                 }}
    //                 itemProp="description"
    //               />
    //             </section>
    //           </article>
    //         </li>
    //       )
    //     })}
    //   </ol>
    //   </div>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt(pruneLength: 270)
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          featured
          type
          subType
          title
          author
          editor
          headingImage {
            publicURL
          }
        }
        wordCount {
          paragraphs
          sentences
          words
        }
      }
      pageInfo {
        perPage
      }
    }
  }
`