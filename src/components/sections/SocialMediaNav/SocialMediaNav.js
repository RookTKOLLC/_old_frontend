import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import { Link } from 'gatsby'



//const socialMediaDropDownEffect = (props) => typeof props.position === 'Number' ?

export default function SocialMediaNav({tween}) {

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
        padding-top: 0.5rem;
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
        top: -2.2rem;
        z-index: 10;
        //top: 4rem
        // background-color: ${props =>
             props.tween ? 'hotpink' : 'turquoise'};
        animation: ${props =>
            props.tween ? css`${bounce} 1s cubic-bezier(.8,.04,.83,.67) 1 forwards,
                            ${moveDown} 1s linear 1 forwards;`: ''};
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
            top:1.4rem;
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
                <ol><a href="">Facebook</a></ol>
                <ol><a href="">Insta</a></ol>
                <ol><a href="">Steam</a></ol>
                <ol><a href="">IndieDb</a></ol>
                <ol><a href="">Twitter</a></ol>
            </ul>
        </SocialMediaIcons>
    )
}


