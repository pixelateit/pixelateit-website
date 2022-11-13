import React from "react";
import styled from "styled-components";
import Profile from "../assets/Profile.png";
import ProfileS from "../assets/Profile-340.png";
import Spiral from "../assets/spiral.png";

function About() {
  return (
    <AboutSection id="about">
      <img id="spiral" src={Spiral} alt="Spiral" />

      <div className="aboutContainer">
        <div className="profileImg">
          <picture>
            <source
              media="(max-width: 1099px)"
              width="320"
              height="320"
              srcSet={ProfileS}
            />
            <source
              media="(min-width: 1100px)"
              width="320"
              height="500"
              srcSet={Profile}
            />
            <img src={Profile} alt="Profile" />
          </picture>
        </div>
        <div className="aboutTxt">
          <p className="mainTxt">
            <span className="aboutLineOne">
              My name is <span className="fontTwo">Prakhar</span> and I am a
              <span className="fontTwo"> UI Designer</span> with {""}
            </span>
            <span className="aboutLineTwo">
              expertise is in <span className="fontTwo">Visual</span> design
              <span className="gapOne"></span>and {""}
              <span className="fontTwo">Brand</span> {""}
            </span>
            <span className="aboutLineThree">
              communication.<span className="gapTwo"></span>I use my design
              knowledge to {""}
            </span>
            <span className="aboutLineFour">
              bring <span className="fontTwo">Ideas</span> to
              <span className="gapThree"></span>life, helping companies to {""}
            </span>
            <span className="aboutLineFive">
              differentiate<span className="gapFour"></span>their brand from
              others in a complex market.
            </span>
          </p>
          <p className="subTxt">
            <span className="fontTwo">Pixel-ate-it</span> is a name I use for
            personal branding/ like a alias for my name(Prakhar).
          </p>
        </div>
      </div>
    </AboutSection>
  );
}

const AboutSection = styled.div`
  width: 100%;
  height: auto;
  padding-top: 110px;
  padding-bottom: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  #spiral {
    position: absolute;
    top: -40px;
    right: 70px;
    animation: upDown infinite ease 3s;
    display: none;

    @media (min-width: 1100px){
      display: block;
    }
  }
  

  @keyframes upDown {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .aboutContainer {
    width: 340px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 768px) {
      width: 680px;
      flex-direction: row;
    }
    @media (min-width: 1100px) {
      width: 1080px;
      height: auto;
      gap: 50px;
    }

    .profileImg {

        &:hover picture::after {
            animation: colorCh infinite 3s ease;
        }

        @keyframes colorCh {
            0% {
                background: #86B1B4;
            }
            25% {
                background: #3E6265;
            }
            50% {
                background: #E4623F;
            }
            75% {
                background: #DF3838;
            }
            100% {
                background: #86B1B4;
            }
        }
      picture {
        position: relative;

        &::after {
          content: "";
          width: 160px;
          height: 160px;
          background: #86b1b4;
          border-radius: 20px 0px;
          position: absolute;
          bottom: -10px;
          right: -15px;
          z-index: -1;

          @media (min-width: 1100px) {
            bottom: -30px;
            right: -30px;
          }
        }

        img {
          width: 340px;
          height: 340px;
          background: #080808;
          border-radius: 10px;
          object-fit: cover;
          position: sticky;
          top: 70px;

          @media (min-width: 1100px) {
            width: 320px;
            height: 500px;
            border-radius: 20px 40px 10px 80px;
            position: unset;
          }
        }
      }
    }
    .aboutTxt {
      width: 340px;
      height: auto;

      @media (min-width: 1100px) {
        width: 710px;
        height: auto;
      }

      .fontTwo {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
      }

      .mainTxt {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;
        color: #df3838;
        mix-blend-mode: difference;

        width: 100%;
        @media (min-width: 1100px) {
          width: 800px;
          font-size: 32px;
          line-height: 39px;
          transform: translateX(-90px);
          margin-top: 80px;
        }
        .gapOne {
          display: inline-block;
          width: 8px;

          @media (min-width: 1100px) {
            width: 94px;
          }
        }
        .gapTwo {
          display: inline-block;
          width: 8px;

          @media (min-width: 1100px) {
            width: 54px;
          }
        }
        .gapThree {
          display: inline-block;
          width: 8px;

          @media (min-width: 1100px) {
            width: 200px;
          }
        }
        .gapFour {
          display: inline-block;
          width: 8px;

          @media (min-width: 1100px) {
            width: 120px;
          }
        }
      }
      .subTxt {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 39px;
        color: #df3838;
        mix-blend-mode: difference;
        margin-top: 56px;
      }
    }
  }
`;

export default About;
