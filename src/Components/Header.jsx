import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import LogoHeader from "../assets/Logos/logoHeader.svg";
import { Link } from "react-router-dom";
import ResumePdf from "../assets/documents/Prakhar_Resume.pdf";
// import "../header";

function Header() {

  const menuBtn = useRef();
  const navMenuContainer = useRef();


  useEffect(() => {
    menuBtn.current.addEventListener("click", () => {
      menuBtn.current.classList.toggle("menuClose");
      navMenuContainer.current.classList.toggle("menuDisplay");
    })
  }, [])


  return (
    <HeaderSection>
      <div className="navContainer">
        <img src={LogoHeader} width="164" height="24" alt="pixelateit" />
        <div className="navMenuContainer" ref={navMenuContainer}>
          <a href="#about">about</a>
          <a href="#skills">skills</a>
          <a href="#work">work</a>
          <Link to="#" className="ctaBtn" target="_blank" download={ResumePdf}>
            Resume
          </Link>
        </div>

        <div className="navMenu" ref={menuBtn}>
          <div className="lineOne"></div>
          <div className="lineTwo"></div>
        </div>
      </div>
    </HeaderSection>
  );
}

const HeaderSection = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #b9c0c5;
  border-bottom: 1px solid #798089;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 999;

  .navContainer {
    width: 340px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
      width: 768px;
    }
    @media (min-width: 1100px) {
      width: 1080px;
    }

    .navMenuContainer {
      width: 100%;
      height: calc(100vh - 60px);
      display: flex;
      flex-direction: column;
      gap: 40px;
      align-items: center;
      justify-content: center;
      background: #b9c0c5;
      position: absolute;
      top: 60px;
      left: 100%;
      z-index: 999;
      transition: left ease-in-out 0.5s;

      @media (min-width: 1100px) {
        display: flex;
        width: auto;
        height: 60px;
        background: transparent;
        position: unset;
        flex-direction: row;
      }

      a {
        color: #26888d;
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 38px;
        text-transform: lowercase;
        text-decoration: none;
        position: relative;
        outline: none;
        @media (min-width: 1100px) {
          font-size: 18px;
          line-height: 22px;
        }

        ::after {
          content: "";
          width: 100%;
          height: 4px;
          background: #3e6265;
          position: absolute;
          bottom: -19px;
          left: 0px;
          transform: translateY(-2px);
          border-radius: 4px 4px 0px 0px;
          opacity: 0;
          transition: all ease-in-out 0.2s;
        }
        :hover {
          ::after {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        &.ctaBtn {
          padding: 5px 30px;
          background: #e4623f;
          border-radius: 20px;
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          text-transform: lowercase;
          color: rgba(255, 255, 255, 0.75);
          transition: box-shadow ease-in-out 0.25s;
          &::after {
            display: none;
          }
          &:hover {
            box-shadow: 2px 4px 0px rgba(228, 98, 63, 0.5);
          }
        }
      }
    }

    .menuDisplay{
      left: 0px;
    }
    .navMenu {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 24px 10px;
      align-items: flex-end;
      cursor: pointer;
      transition: transform ease 0.25s;

      @media (min-width: 1100px) {
        display: none;
      }

      .lineOne {
        width: 25px;
        height: 4px;
        background: #3e6265;
        transition: all ease 0.25s;
      }
      .lineTwo {
        width: 45px;
        height: 4px;
        background: #3e6265;
        transition: transform ease 0.25s;
      }
    }
    .menuClose {
      align-items: center !important;
      .lineOne {
        width: 45px !important;
        transform: rotate(-45deg) translateY(8px);
      }
      .lineTwo {
        transform: rotate(45deg) translateY(-8px);
      }
    }
  }
`;

export default Header;
