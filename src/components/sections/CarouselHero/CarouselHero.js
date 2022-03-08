import React, { Fragment, useState } from "react"
import { css, keyframes } from "@emotion/react"
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward'
import styled from '@emotion/styled'
import Slide from 'react-reveal/Slide';
import makeCarousel from 'react-reveal/makeCarousel';
import { Link } from "gatsby"


export default function CarouselHero({ featured }) {

    const Container = styled.div`
        //border: 1px solid red;
        position: relative;
        overflow: hidden;
        width: auto;
        height: 30rem;
        
    `

    const Arrow = styled.div`
        z-index: 10;
        text-align: center;
        position: absolute;
        top: 0;
        width: 10%;
        font-size: 3em;
        cursor: pointer;
        user-select: none;
        height: 100%;
        color: #ffa039;
        ${props => props.right ? css`left: 90%;` : css`left: 0%;`}
  `;
    const CarouselUI = ({ position, handleClick, children }) => (
        <Container>
            {children}
            <Arrow
                onClick={handleClick}
                data-position={position - 1}>
                <IoIosArrowBack
                    css={css`
                        height: 100%;
                `} />
            </Arrow>
            <Arrow
                right
                onClick={handleClick}
                data-position={position + 1}>
                <IoIosArrowForward
                    css={css`
                        height: 100%;
                `} />
            </Arrow>
        </Container>
    );
    const Carousel = makeCarousel(CarouselUI);

    const pulsate = keyframes`
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255,160,57, 0.2);
        }

        50% {
            transform: scale(0.9);
            box-shadow: 0 0 0 10px rgba(255,160,57, 0);
        }

        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255,160,57, 0);
        }
    `
    const HeroSelectionButton = styled.div`
        width: 4rem;
        height: 0.4rem;
        background: ${props => props.current ? '#ffa039' : 'rgba(0,0,0, 0.5)'};
        border-radius: 2%;
        margin: 0px 0.5rem 1rem;
        position: relative;
        &:hover{
            cursor: pointer;
            background: #ffa039;
            animation: ${pulsate} 1s ease-in-out infinite;
        };
        &:after{
            content: "";
            position: absolute;
            top: 0px;
            left: -5px;
            top: -10px;
            width: 5rem;
            height: 2rem;
        }
    `

    const HeroSelectionButtonWrapper = styled.div`
        position: absolute;
        top: 60%;
        width: 100vw;
        height: 12rem;
        display: flex;
        justify-content: center;
        align-items: self-end;
    `
    console.log(featured)
    return (
        <Carousel defaultWait={90000}>
            {featured.map((node, idx) => (
                <Slide right key={idx} >
                    <div style={{ height: '100%' }}>
                        <section
                            css={css`
                            position: absolute;
                            bottom:0px;
                            z-index: 10000;
                            padding: 0px 2rem 1rem;
                            width:100%;

                        `}
                        >
                            <Link
                                to={`/${node.slug}`}
                                css={css` 
                                color: white; 
                                text-decoration: none;
                                position: relative;
                                overflow: hidden;
                                transition: background 375ms ease-in-out;
                                &:hover{
                                    color:white; 
                                    background: #ffa039;
                                    p{
                                        span{
                                            background: #ffa039;
                                        }
                                    }
                                }

                            `}>
                                <h1
                                    css={css`
                                    display:inline;
                                    margin: 0px 1rem 0px 0px;    
                                    text-shadow: 1px 1px 2px rgba(170, 170, 170, 0.623);
                                    padding: 0px 1rem 0px 1rem;
                                `}>
                                    {node.frontmatter.title}
                                </h1>
                                <p
                                    css={css`
                                        text-shadow: 1px 1px 1px #824708, 
                                        3px 3px 5px #7F501C; 
                                        margin: 0px 2rem 0px 0rem;  
                                        padding: 0px 1rem 0px 0rem;
                                        //width: 50%; //TODO change width depending on screen side
                                        `}
                                >
                                    <span
                                        css={css`
                                        padding: 0 1rem;
                                        -webkit-box-decoration-break: clone;
                                        box-decoration-break: clone;
                                        transition: background 375ms ease-in-out;
                                        `}
                                    >{node.excerpt} </span>
                                </p>
                            </Link>
                        </section>

                        <img
                            css={css`
                                position: relative;
                                top:0px;
                                background: url(${node.frontmatter.headingImage.publicURL}) no-repeat 50% 10%; 
                                user-select: none;
                                width: 100%;
                                height: 100%;
                                background-size: cover;
                                box-shadow:inset 0 -2rem 4rem -6px black;
                                // &:hover{
                                //     cursor: pointer;
                                // }          
                            `}
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
                    </div>
                </Slide>
            ))}
        </Carousel>
    )
}