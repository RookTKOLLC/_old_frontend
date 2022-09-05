import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import { Sling as Hamburger } from "hamburger-react";

export const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navItemsList = [
    { name: "Home", url: "/" },
    { name: "Games", url: "/games" },
    { name: "DevBlog", url: "/devblog" },
    { name: "Swag", url: "/swag" },
    { name: "About", url: "/about" },
  ];

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
          width: 4rem;
          height: 4rem;
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
        <Hamburger hideOutline={false} rounded  toggled={isOpen} toggle={setIsOpen} />
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
          top: -95vh;
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
      </div>
    </section>
  );
};
