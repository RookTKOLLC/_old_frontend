import React, {useState} from "react";
import { css, keyframes } from "@emotion/react"
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward'
import styled from '@emotion/styled'

export default function CarouselHero({ featured }) {
    const [shown, setShown] = useState(0)


    function forwardClick(){
        setShown(shown === featured.length-1  ? 0: shown+1)
    }

    function backwardClick(){
        setShown(shown === 0 ? featured.length-1 : shown-1)
    }
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
    `

    const HeroSelectionButtonWrapper  = styled.div`
        position: absolute;
        top: 60%;
        width: 100vw;
        height: 12rem;
        display: flex;
        justify-content: center;
        align-items: self-end;
    `
    
    console.log('carouselHero', featured)
    return (
        <section css={css`
            height: 30rem;
            background: white;
            position: relative;

            `}>
                <IoIosArrowBack 
                css={css`
                    color: #ffa039;
                    position: absolute;
                    top: 45%;
                    left: 0%;
                    font-size: 3rem;
                    &:hover{
                        cursor: pointer;
                    }
                `}
                onClick = {backwardClick}
                />
                {/* <img src={featured[0].frontmatter.headingImage.publicURL} alt={featured[0].frontmatter.headingImageAlt} /> */}
                {/** or center for background and then maybe use intersectionobserver to parllax the carousel image */}
                <img 
                css={css`
                    user-select: none;
                    width: 100%;
                    height: 100%;
                    background: url(${featured[shown].frontmatter.headingImage.publicURL}) no-repeat 50% 10%; 
                    background-size: cover;
                    box-shadow:inset 0 -2rem 4rem -6px black;
                    top: 100px;
                    &:hover{
                        cursor: pointer;
                    }
                `} 
                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
            <IoIosArrowForward 
            css={css`
                color: #ffa039;
                position: absolute;
                top: 45%;
                left: calc(100% - 3rem);
                font-size: 3rem;
                &:hover{
                    cursor: pointer;
                }
            `}
            
            onClick={forwardClick}
            />
            <HeroSelectionButtonWrapper>
            {featured.map((node, idx) => (
                <HeroSelectionButton 
                key = {idx} 
                current = {shown == idx}
                onClick={() => setShown(idx)}
                
                />
            ))}

            </HeroSelectionButtonWrapper>
        </section>
    )
}