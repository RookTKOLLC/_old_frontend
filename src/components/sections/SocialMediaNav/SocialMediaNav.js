import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram'
import { FaFacebookSquare} from '@react-icons/all-files/fa/FaFacebookSquare'
import { ImSteam } from '@react-icons/all-files/im/ImSteam'
import { FaTwitter } from '@react-icons/all-files/fa/FaTwitter'
import { SiTiktok } from '@react-icons/all-files/si/SiTiktok'
import { FaItchIo } from '@react-icons/all-files/fa/FaItchIo'
import { GrLinkedin } from '@react-icons/all-files/gr/GrLinkedin'
//const socialMediaDropDownEffect = (props) => typeof props.position === 'Number' ?

function SocialMediaNav({tween}) {

    const [toggleNavDisplay, setToggleNavDisplay] = useState(false)
    console.log('re-render')
    //console.log('tween in social', tween)
    //console.log('toggleNavDisplay', toggleNavDisplay)
    useEffect(() => {
        //console.log("toggletween")
        if(!tween && !toggleNavDisplay){
            console.log('this hsould only happen once!!!')
            setToggleNavDisplay(!tween);
        }
        //console.log('toggleNavDisplay2', toggleNavDisplay)
    }, [tween])

    //console.log('toggleNavDisplay3', toggleNavDisplay)
    const SocialMediaIcons = styled.section`
        background-color: rgba(255, 160, 57, 0.5);
        padding-top: 0.2rem;
        width: 100%;
        ul{
            display: flex;
            margin: 0;
            justify-content: flex-end;
        }
        ol{
            margin:0;
            padding: 0px 0.2rem;
        }
        ol a {
            color: white;
            text-decoration: none;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        ol:last-child {
            padding-right: 0.4rem;
        }
        position: ${props => props.tween ? 'sticky' : 'relative'};
        top: -3rem;
        z-index: 10;
        //top: 4rem
        // background-color: ${props =>
             props.tween ? 'hotpink' : 'turquoise'};
        animation: ${props =>
            props.tween ? css`${bounce} 1s cubic-bezier(.8,.04,.83,.67) 1 forwards,
                            ${moveDown} 1s linear 1 forwards;`: ''};
        @media (max-width: 620px) {
            display:none;
        };
        //background: rgba(255, 255, 255, 0.2);
        //border-radius: 16px;
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        //border: 1px solid rgba(255, 255, 255, 0.3);
    `
    const bounce = keyframes`
        from, 20%, 53%, 80%, to {
        transform: translate3d(0,0,0);
        }
    
        40%, 43% {
        transform: translate3d(0, 30px, 0);
        }
    
        70% {
        transform: translate3d(0, 15px, 0);
        }
    
        90% {
        transform: translate3d(0,4px,0);
        }
    `
    const moveDown = keyframes`
        0%{
            top: -1rem;
        }
        100%{
            top:3rem;
        }
    `
    // const tweenNav = props => props.toggleNavDisplay ?
    // css`
    //     animation: ${bounce} 1s ease infinite;
    // `
    // : ''

    return (
        <SocialMediaIcons tween = {toggleNavDisplay} >
            <ul>
                <ol><a href=""><FaFacebookSquare /></a></ol>
                <ol><a href=""><FaTwitter /></a></ol>
                <ol><a href=""><FiInstagram/> </a></ol>
                <ol><a href=""><SiTiktok/> </a></ol>
                <ol><a href=""><ImSteam /></a></ol>
                <ol><a href=""><FaItchIo /></a></ol>
                <ol><a href=""><GrLinkedin /></a></ol>
            </ul>
        </SocialMediaIcons>
    )
}

export default React.memo(SocialMediaNav)