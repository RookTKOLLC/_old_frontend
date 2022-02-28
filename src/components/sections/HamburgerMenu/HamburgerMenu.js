import React, { useEffect, useState } from "react";
import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export const HamburgerMenu = () => {

    const [showMenu, setShowMenu] = useState(false)
    const navItemsList = ['Games', 'DevBlog', 'Swag', 'About']


    const onClickHandler = (e) => {
        console.log(e)
        console.log(showMenu)
        setShowMenu(!showMenu)
    }

    const bounceIn = keyframes`
    from {
        transform: translateY(0%);
    }


    to {
        transform: translateY(100%);
    }
    `
    const bounceOut = keyframes`
    from {
        transform: translateY(100%);
    }


    to {
        transform: translateY(0%);
    }
    `
    const NavItem = styled.li`
        list-style-type:none;
    `
    const BurgerNavigation = styled.ul`
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        padding-left: 1.5rem;
    `

    useEffect(() => {
        const bg = document.getElementById('burgerBackground')
        bg.addEventListener('animationend', () => {
            console.log('this is an animation')
        });

        return () => bg.removeEventListener('animationend', () => { })
    }, [showMenu])


    return (
        <section
            css={css`
                width:100%;
                background-color: #171717; //#252423;
                z-index: 1;
                position: sticky;
                top:0px;
                margin-bottom: 45px;
                height: 4rem;

            `}
        >
            <div onClick={onClickHandler}
                css={
                    css`
                    width: 2rem;
                    height: 1rem;
                    top: 1rem;
                    padding: 1rem 0.5rem 0.2rem;
                    left: 1.5rem;
                    position: relative;
                    content: '';
                    &:hover{
                        cursor: pointer;
                    }
                    `
                }>
                <span

                    css={
                        css`
                        &:hover{
                            color: #ffa039;
                        }
                    background-color: white;
                    z-index: 10000;
                    display: block;
                    width: 2rem;
                    height: 3px;
                    content: '';
                    poisiton:relative;
                    top: 4rem;
                    left: 1.5rem;
                    &::before,&::after {
                        width: 2rem;
                        height: 3px;
                        background-color: white;
                        position: absolute;
                        content: '';
                    }
                    &::after{
                        width: 1.2rem;
                        bottom:0.5rem;
                    }
                    &::before{
                        width: 2rem;
                        top:0.5rem;
                    }
                    transition: transform 250ms ease-in-out, opacity 200ms linear;
                    ${showMenu &&
                            css`
                        transform: rotate(45deg);
                        &::after{
                            opacity:0;
                        }
                        &::before{
                            transform: rotate(90deg) translate(-0.5rem);
                        }
                    `}
                `
                    }
                >

                </span>
            </div>

            <div
                id="burgerBackground"
                css={
                    css`
                        z-index: -10;
                        background-color: #171717;
                        color: white;
                        height: 100vh;
                        width: 100vw;
                        top: -101vh;
                        ${showMenu ?
                            css`animation: ${bounceIn} 300ms ease 1 forwards`
                            : css`animation: ${bounceOut} 300ms ease 1 forwards`} ;
                        //transform: ${showMenu ? 'translateY(100%)' : 'translateY(0%)'};
                        //transition: transform 300ms cubic-bezier(.5,0,.5,1);
                        position: absolute;
                        content: '';
                    `
                }>
                <BurgerNavigation>
                    {navItemsList.map((item, idx) => (
                        <NavItem key={idx}>
                            <Link
                                css={css`
                                text-decoration: none;
                                color: #ffffff;
                                font-size: 2rem;
                                font-family: 'Montserrat';
                                text-shadow: 1px 1px 2px rgb(170 170 170 / 62%);
                            `}
                                to={'/' + `${item.toLowerCase()}`}>
                                {item}
                            </Link>
                        </NavItem>
                    ))}
                </BurgerNavigation>
            </div>
        </section>
    )
}