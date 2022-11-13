import React from 'react'
import styled from 'styled-components'
import logoFooter from '../assets/Logos/logoFooter.svg'

function Footer() {

    return (
        <FooterSection>
            <div className="footerContainer">
                <div className="footerFlex">
                    <div className="socialLinks">
                        <a href="https://www.behance.net/thepixelateit">
                            behance.net
                            <span>/thepixelateit</span>
                        </a>
                        <a href="https://www.instagram.com/thepixelateit/">
                            instagram.com
                            <span>/thepixelateit</span>
                        </a>
                        <a href="https://dribbble.com/pixelateit">
                            dribbble.com
                            <span>/pixelateit</span>
                        </a>
                    </div>
                    <p onClick={() => {
                        navigator.clipboard.writeText('PrakharS@protonmail.com');
                    }}>PrakharS@protonmail.com</p>
                </div>
            </div>
            <div className="footerCopy">
                <div className="footerContainer">
                    <p><span>Prakhar</span>Srivastava</p>

                    <img src={logoFooter} alt="Logo Footer" />
                </div>
            </div>
        </FooterSection>
    )
}


const FooterSection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #86B1B4;

    .footerContainer {
        width: 340px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 20px;

        @media (min-width: 768px) {
            width: 680px;
            flex-direction: row;
            justify-content: space-between;
        }
        @media (min-width: 1100px) {
            width: 1080px;
        }

        .footerFlex {
            display: flex;
            width: 100%;
            flex-direction: column;
            gap: 40px;
            align-items:  flex-start;
            justify-content: center;
            padding: 80px 0px;

            @media (min-width: 768px) {
                flex-direction: row;
                justify-content: space-between;
            }

            .socialLinks {
                display: flex;
                flex-direction: column;
                gap: 8px;
                align-items: flex-start;

                >a {
                    display: flex;
                    flex-direction: row;
                    font-family: 'Montserrat';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 24px;
                    line-height: 30px;
                    color: #FFFFFF;
                    text-decoration: none;
                    

                    >span{
                        font-weight: 400;
                        color: #3E6265;
                        opacity: 0;
                        transition: all ease 0.25s;
                        
                    }

                    &:hover span {
                        opacity: 1;
                    }
                }
            }
            >p{
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 400;
                font-size: 24px;
                line-height: 30px;
                color: #3E6265;
                text-decoration: none;
                cursor: pointer;
                position: relative;


            }
            .textCopy::after {
                content: 'Copied!';
                width: auto;
                height: auto;
                background: #000;
                padding: 4px 12px;
                color: #fff;
                border-radius: 5px;
                position: absolute;
                top: -50px;
                left: 50%;
                transform: translateX(-50%);
            
            }
        }
    }

    .footerCopy{
        width: 100%;
        height: 100px;
        border-top: 1px solid #798089;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 40px;
            color: #3E6265;

            span {
                font-weight: 700;
            }
        }
    }
`;

export default Footer