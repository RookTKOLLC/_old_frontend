import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Spiral as Hamburger } from "hamburger-react";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { ImSteam } from "@react-icons/all-files/im/ImSteam";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { SiTiktok } from "@react-icons/all-files/si/SiTiktok";
import { FaItchIo } from "@react-icons/all-files/fa/FaItchIo";
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin";
// import { IconContext } from "react-icons";
import { RiMoonClearLine } from "@react-icons/all-files/ri/RiMoonClearLine";
import { FaSun } from "@react-icons/all-files/fa/FaSun";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

export const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  const navItemsList = [
    { name: "Home", url: "/" },
    { name: "DevBlog", url: "/devblog" },
    { name: "Games", url: "/games" },
    { name: "Swag", url: "/swag" },
    { name: "About", url: "/about" },
  ];



  const SocialMediaIcons = styled.section`
    // background-color: rgba(244, 130, 37, 0.7);
    position: absolute;
    bottom: 0px;
    width: 100%;
    ul {
      margin-top: 0;
      // margin-left: 50%;
      display: flex;
      justify-content: space-evenly;
    }
    ol {
      margin: 0;
      padding: 0px 1rem;
    }
    ol a {
      color: white;
      text-decoration: none;
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    }
  `;
  const pulsate = keyframes`
  0% {
      transform: scale(1);
      filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0.2));
  }

  50% {
      transform: rotate(10deg) scale(1.2);
      filter: drop-shadow(0 0 10px rgba(255, 255, 255, 1));
  }

  90%{
      transform: scale(0.85);
  }
  100% {
      transform: scale(1);
      //filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0.2));
      filter: drop-shadow(1px 1px 0 rgba(234,191,255,0.5)) drop-shadow(-1px -1px 0 rgba(234,191,255,0.5)) drop-shadow(1px -1px 0 rgba(234,191,255,0.5)) drop-shadow(-1px 1px 0 rgba(234,191,255,0.5));
  }
  `;
  const SocialLinks = styled.ol`
    &:hover {
      cursor: pointer;
      animation: ${pulsate} 800ms ease-in-out 1;
      animation-fill-mode: forwards;
    }
  `;
  const onClickHandler = (e) => {
    setShowMenu(!showMenu);
    setIsOpen(!isOpen);
  };

  const bounceIn = keyframes`
    from {
        transform: translateY(0%);
    }


    to {
        transform: translateY(100%);
    }
    `;
  const bounceOut = keyframes`
    from {
        transform: translateY(100%);
    }


    to {
        transform: translateY(0%);
    }
    `;
  const NavItem = styled.li`
    list-style-type: none;
  `;
  const BurgerNavigation = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    padding-left: 1.5rem;
  `;

  useEffect(() => {
    const bg = document.getElementById("burgerBackground");
    bg.addEventListener("animationend", () => {
      // console.log('this is an animation')
    });

    return () => bg.removeEventListener("animationend", () => {});
  }, [showMenu]);

  return (
    <section
      css={css`
        width: 100%;
        background-color: #171717; //#252423;
        z-index: 1000;
        position: sticky;
        top: 0px;
        height: 4rem;
      `}
    >
      <div
        onClick={onClickHandler}
        css={css`
          width: 2rem;
          height: 2rem;
          top: -0.5rem;
          padding: 1rem 0.5rem 0.2rem;
          left: 1rem;
          position: relative;
          content: "";
          &:hover {
            cursor: pointer;
          }
        `}
      >
        <Hamburger
          hideOutline={false}
          rounded
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      <div
        id="burgerBackground"
        css={css`
          position: absolute;
          z-index: -10;
          background-color: #171717;
          color: white;
          height: 100vh;
          width: 100vw;
          top: -98vh;
          ${!showMenu &&
          css`
            opacity: 0;
          `}
          ${showMenu &&
          css`
            opacity: 1;
          `}
            ${showMenu &&
          css`
            animation: ${bounceIn} 300ms ease 1 forwards;
          `};
          ${!showMenu &&
          css`
            animation: ${bounceOut} 300ms ease 1 forwards;
          `}
          //transform: ${showMenu ? "translateY(100%)" : "translateY(0%)"};
                        //transition: transform 300ms cubic-bezier(.5,0,.5,1);

                        content: '';
        `}
      >
        <BurgerNavigation>
          {navItemsList.map((item, idx) => (
            <NavItem key={idx}>
              <Link
                css={css`
                  text-decoration: none;
                  color: #ffffff;
                  font-size: 2rem;
                  font-family: "Montserrat";
                  text-shadow: 1px 1px 2px rgb(170 170 170 / 62%);
                `}
                to={item.url}
                onClick={onClickHandler}
              >
                {item.name}
              </Link>
            </NavItem>
          ))}

        </BurgerNavigation>

          <SocialMediaIcons animationComplete={animationComplete}>
            <ul
              css={css`
                font-size: 1.4rem;
                padding: 0;
              `}
            >
              <SocialLinks>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare />
                </a>
              </SocialLinks>
              <SocialLinks>
                <a href="">
                  <FaTwitter />
                </a>
              </SocialLinks>
              <SocialLinks>
                <a href="">
                  <FiInstagram />{" "}
                </a>
              </SocialLinks>
              <SocialLinks>
                <a href="">
                  <SiTiktok />{" "}
                </a>
              </SocialLinks>
              <SocialLinks>
                <a href="">
                  <ImSteam />
                </a>
              </SocialLinks>
              <SocialLinks>
                <a href="">
                  <FaItchIo />
                </a>
              </SocialLinks>
              <SocialLinks>
                <ThemeToggler>
                  {({ theme, toggleTheme }) => {
                    if (theme == null) return null;
                    console.log("theme", theme);
                    if (theme == "light") {
                      return (
                        <FaSun
                          onClick={() => {
                            toggleTheme("dark");
                          }}
                        />
                      );
                    }
                    return (
                      <RiMoonClearLine
                        onClick={() => {
                          toggleTheme("light");
                        }}
                      />
                    );
                  }}
                </ThemeToggler>
              </SocialLinks>
            </ul>
          </SocialMediaIcons>
      </div>
    </section>
  );
};
