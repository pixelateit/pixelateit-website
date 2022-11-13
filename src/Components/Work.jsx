import React from 'react'
import styled from 'styled-components'
import Behance from '../assets/Behance.svg'
import CardBg from '../assets/CardBg.svg'
import NewTxt from '../assets/new.svg'
import CardOne from '../assets/CardOne.png'
import CardTwo from '../assets/CardTwo.png'
import CardThree from '../assets/CardThree.png'
import CardFour from '../assets/CardFour.png'
import CardFive from '../assets/CardFive.png'

function Work() {
    return (
        <WorkSection id='work'>
            <div className="workContainer">
                <h2>
                    Some of <span>my</span> a.....<br />
                    <span>so far</span>
                </h2>

                <div className="workFlex">
                    <Card className='latest'>
                        <div className="cardImg">
                            <img src={CardOne} alt="Card img" />
                        </div>
                        <div className="cardTxt">
                            <p className="cardTitle">IFSC Consultants</p>
                            <div className="tagsBox">
                                <div className="tags">
                                    visual design
                                </div>
                                <div className="tags">
                                    web design
                                </div>
                                <div className="tags">
                                    interaction design
                                </div>
                            </div>
                            <a className='cardBtn' target="_blank" href="https://www.behance.net/gallery/156765115/IFSC-Consultants-Website">see it on <img src={Behance} alt="Behance" /> </a>
                        </div>
                        <img className='cardBg' src={CardBg} alt="Card Background" />
                    </Card>
                    <Card>
                        <div className="cardImg">
                            <img src={CardTwo} alt="Card img" />
                        </div>
                        <div className="cardTxt">
                            <p className="cardTitle">Indoor Plants App</p>
                            <div className="tagsBox">
                                <div className="tags">
                                    Logo design
                                </div>
                                <div className="tags">
                                    prototyping
                                </div>
                                <div className="tags">
                                    app design
                                </div>
                                <div className="tags">
                                    visual design
                                </div>
                            </div>
                            <a className='cardBtn' target="_blank" href="https://www.behance.net/gallery/129747911/Indoor-Plants-App-UIUX-Design">see it on <img src={Behance} alt="Behance" /> </a>
                        </div>
                        <img className='cardBg' src={CardBg} alt="Card Background" />
                    </Card>
                    <Card>
                        <div className="cardImg">
                            <img src={CardThree} alt="Card img" />
                        </div>
                        <div className="cardTxt">
                            <p className="cardTitle">Smriti INTERIOR website DESIGN</p>
                            <div className="tagsBox">
                                <div className="tags">
                                    Logo design
                                </div>
                                <div className="tags">
                                    prototyping
                                </div>
                                <div className="tags">
                                    web design
                                </div>
                                <div className="tags">
                                    visual design
                                </div>
                            </div>
                            <a className='cardBtn' target="_blank" href="https://www.behance.net/gallery/133362899/Smriti-INTERIOR-DESIGN">see it on <img src={Behance} alt="Behance" /> </a>
                        </div>
                        <img className='cardBg' src={CardBg} alt="Card Background" />
                    </Card>
                    <Card>
                        <div className="cardImg">
                            <img src={CardFour} alt="Card img" />
                        </div>
                        <div className="cardTxt">
                            <p className="cardTitle">Museum of Ancient Indian History</p>
                            <div className="tagsBox">
                                <div className="tags">
                                    Logo design
                                </div>
                                <div className="tags">
                                    web design
                                </div>
                                <div className="tags">
                                    interaction design
                                </div>
                            </div>
                            <a className='cardBtn' target="_blank" href="https://www.behance.net/gallery/131298679/Museum-of-Ancient-Indian-History-Website-Design">see it on <img src={Behance} alt="Behance" /> </a>
                        </div>
                        <img className='cardBg' src={CardBg} alt="Card Background" />
                    </Card>
                    <Card>
                        <div className="cardImg">
                            <img src={CardFive} alt="Card img" />
                        </div>
                        <div className="cardTxt">
                            <p className="cardTitle">Zomato App REDESIGN</p>
                            <div className="tagsBox">
                                <div className="tags">
                                    Logo design
                                </div>
                                <div className="tags">
                                    App design
                                </div>
                                <div className="tags">
                                    prototyping
                                </div>

                            </div>
                            <a className='cardBtn' target="_blank" href="https://www.behance.net/gallery/129009185/Zomato-App-Redesign">see it on <img src={Behance} alt="Behance" /> </a>
                        </div>
                        <img className='cardBg' src={CardBg} alt="Card Background" />
                    </Card>
                </div>
            </div>

        </WorkSection>
    )
}

const WorkSection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0px;
    border-bottom: 1px solid #798089;
    .workContainer {
        width: 340px;
        height: auto;

        @media (min-width: 768px) {
            width: 680px;
        }
        @media (min-width: 1100px) {
            width: 1080px;
        }

        h2 {
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 40px;
            color: #3E6265;
            margin-bottom: 100px;
            >span {
                font-family: 'Days One';
                font-weight: 400;
                font-size: 36px;
                line-height: 40px;
                text-transform: uppercase;
            }
        }

        .workFlex {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;

            @media (min-width: 1100px){
                row-gap: 40px;
                column-gap: 30px;
                justify-content: flex-start;
            }
        }
    }
`;

const Card = styled.div`
    width: 340px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all ease 0.25s;
    transform: translateY(0px);

    &.latest::after {
        position: absolute;
        top: -50px;
        left: 50%;
        transform: translateX(-50%);
        content: url(${NewTxt});
        width: 50px;
        height: 40px;
    }

    .cardImg {
        width: 340px;
        height: 265px;
        z-index: 99;
        >img {
            width: 340px;
            height: 265px;
            border-radius: 40px 10px 0px 0px;
            object-fit: cover;
            background-position: top;
        }
    }
    .cardTxt {
        width: 340px;
        height: 235px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        z-index: 99;

        .cardTitle{
            width: 100%;
            font-family: 'Montserrat';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 20px;
            text-transform: uppercase;
            color: #222;
        }

        .tagsBox{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: space-between;
            row-gap: 8px;

            .tags {
                background: #86B1B4;
                border-radius: 5px;
                padding: 4px 12px;
                font-family: 'Montserrat';
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 20px;
                text-transform: uppercase;
                color: #3E6265;
            }
        }

        .cardBtn{
            width: 250px;
            height: 40px;
            background: #E4623F;
            border-radius: 5px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 12px;
            transition: all 0.25s ease;

            font-family: 'Days One';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            line-height: 20px;
            letter-spacing: -0.04em;
            text-transform: uppercase;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.75);
            >img {
                width: 40px;
                height: 40px;
            }

            &:hover{
                box-shadow: 4px 4px 0px rgba(228, 98, 63, 0.5);
            }
        }
    }

    .cardBg {
        width: 340px;
        height: 500px;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    &:hover {
        filter: drop-shadow(0px 34px 34px rgba(0, 0, 0, 0.25));
        transform: translateY(-20px);
    }
`;


export default Work