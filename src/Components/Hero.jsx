import React from 'react'
import styled from 'styled-components'
import webAnim from '../assets/video/webAnim.mp4'
import arrowDown from '../assets/Logos/ArrowDown.svg'
import WebsiteAnimPreview from '../assets/video/WebsiteAnimPreview.png'

function Hero() {
    return (
        <HeroSection>
            <div className="heroContainer">
                <div className="heroTxt">
                    <h1>
                        <span className='txtOne'>
                            Every
                            <span className='fontTwo'>
                                product
                            </span>
                        </span>
                        <span className='txtTwo'>
                            was an idea in a
                        </span>
                        <span className='txtThree'>
                            stuborn
                            <span className='fontTwo'>
                                mind.
                            </span>
                        </span>
                    </h1>
                    <p>
                        Some random text to impress people who love reading
                    </p>
                </div>
                <div className="heroImg">
                    <div className="heroVideo">
                        <video autoPlay loop muted preload='auto' poster={WebsiteAnimPreview}>
                            <source src={webAnim} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            <img className='arrowDown' src={arrowDown} alt="Arrow" />
        </HeroSection>
    )
}

const HeroSection = styled.div`
    width: 100%;
    height: 560px;
    margin-top: 60px;
    border-bottom: 1px solid #798089;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    @media (min-width: 768px) {
        height: 480px;
    }

    .arrowDown {
        position: absolute;
        bottom: -90px;
        left: calc(100% - 1000px);
        display: none;

        @media (min-width: 1100px) {
            display: block;
        }
    }

    .heroContainer{
        width: 340px;
        height: auto;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        overflow: visible;

        @media (min-width: 768px){
            width: 680px;
            height: auto;
            flex-direction: row;
            justify-content: flex-end;
        }
        @media (min-width: 1100px){
            width: 1080px;
            height: 480px;
        }

        .heroTxt {
            width: 340px;
            height: auto;

            display: flex;
            flex-direction: column;
            gap: 30px;
            align-items: flex-start;
            justify-content: center;
            position: relative;
            z-index: 99;
            

            @media (min-width: 1100px) {
                width: 520px;
                height: 480px;
            }

            h1 {
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 32px;
                line-height: 32px;
                text-transform: uppercase;
                color: #26888D;

                @media (min-width: 1100px){
                    font-size: 48px;
                    line-height: 48px;
                }
                .txtOne, .txtTwo, .txtThree {
                    display: block;
                    width: 100%;
                    .fontTwo {
                        font-family: Days One;
                        display: inline-block;
                        padding-inline: 8px;
                    }
                }
            }

            p {
                font-family: 'Montserrat';
                max-width: 480px;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 22px;
                text-transform: uppercase;
                color: #3E6265;
            }
        }
        .heroImg{
            width: 340px;
            height: 340px;
            display: flex;
            align-items: flex-end;
            overflow: visible;
            position: relative;

            .heroVideo {
                width: 340px;
                height: 340px;
                display: flex;
                align-items: flex-end;
                justify-content: flex-start;
                overflow: hidden;
                border-radius: 10px;

                @media (min-width: 1100px) {
                    width: 740px;
                    height: 412px;
                    border-radius: 40px 0px 0px 160px;
                    position: absolute;
                    bottom: 0px;
                    left: calc(((100vw - 1440px)/2) - 5px);
                }


                video {
                    width: 340px;
                    height: 340px;
                    @media (min-width: 1100px) {
                        width: 740px;
                        height: 740px;
                    }
                }
            }

            

            @media (min-width: 1100px) {
                width: 560px;
                height: 480px;
            }
        }
           
    }
`


export default Hero