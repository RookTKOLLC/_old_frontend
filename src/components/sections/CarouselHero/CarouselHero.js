import React, {useState} from "react";
import { css, keyframes } from "@emotion/react"
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack'
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward'

export default function CarouselHero({ featured }) {
    const [shown, setShown] = useState(0)


    function forwardClick(){
        setShown(shown === featured.length-1  ? 0: shown+1)
    }

    function backwardClick(){
        setShown(shown === 0 ? featured.length-1 : shown-1)
    }

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
            <div
                css={css`
                    background: linear-gradient(180deg, rgba(0,0,0,0.60) 0%, rgba(255,5,5,0) 100%);
                    border-top-color:  rgba(31, 27, 29, 0.31);
                    border-top-width: 1px;
                    border-top-style: solid;
                    position: absolute;
                    top: 75%;
                    width: 100vw;
                    height: 12rem;
                `}
            >wewewe</div>
        </section>
    )
}