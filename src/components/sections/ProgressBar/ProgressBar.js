import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'


export default function ProgressBar() {
    const [scrollTop, setScrollTop] = useState(0);
    const [distanceFromTop, setDistanceFromTop] = useState(0)
    const onScroll = () => {
        const docEl = document.documentElement;
        const windowScrollHeight = docEl.scrollTop;
        const currentWindowHeight = docEl.scrollHeight - docEl.clientHeight;
        const scrolled = (windowScrollHeight / currentWindowHeight) * 100;
        setScrollTop(scrolled)
      };

      useEffect(() => {
          //console.log("navBar")
          window.addEventListener("scroll", onScroll);

          return () => window.removeEventListener('scroll', onScroll)
      }, []);

      useEffect(() => {
        let root = document.documentElement;
        document.addEventListener("scroll", evt => {
            setDistanceFromTop(root.scrollTop);
            //root.style.setProperty("--scrollTop", root.scrollTop);
        });
      }, [])
      const scrollState = props => props.isScrolling ? 
        css`
            width: ${props.isScrolling}%
        `:
        css`
            width: 0%
      `
      const ProgressBarWrapper = styled.section`
         z-index: 9999 !important;
        @media (max-width: 766px) {
            display:none;
        };
        width: 100%;
        position: fixed;
        top: 3.9rem;
      `
      const ProgressBar = styled.section`
        ${scrollState}
        background-color: #ffa039; //#ffa039
        height: 4px;
        position: relative;
        @supports (top: max(1em, 1px)){
            top: max(calc(-1rem), calc(2.72rem - max(${distanceFromTop} * 1px, 0rem) )); //- max(${distanceFromTop} * 1px, 0rem)
        }
      `
    return (
        <ProgressBarWrapper>

            <ProgressBar isScrolling={scrollTop} />
         </ProgressBarWrapper>)
}