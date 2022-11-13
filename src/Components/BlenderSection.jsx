import React from 'react'
import styled from 'styled-components'
import Amg from '../assets/Amg.png'
import Devalaya from '../assets/Devalaya.png'
import SkullSalazar from '../assets/SkullSalazar.png'
import DevalayaKitchen from '../assets/DevalayaKitchen.png'
import DozzedOff from '../assets/DozzedOff.png'
import RoundTable from '../assets/RoundTable.png'
import ReserveTrees from '../assets/ReserveTrees.png'
import DevalayaKitchenTwo from '../assets/DevalayaKitchenTwo.png'
import SJP from '../assets/SJP.png'
import AMGTwo from '../assets/AMGTwo.png'

function BlenderSection() {
    return (
        <BlenderBox>
            <div className="blenderContainer">
                <h2><span>Blender</span>3D</h2>

                <div className="blenderGallery">
                    <div className="twoCol">
                        <img src={Amg} alt="Amg GT3 Blender" />
                    </div>
                    <div className="oneCol">
                        <img src={Devalaya} alt="Devalaya Blender" />
                    </div>
                    <div className="oneCol">
                        <img src={SkullSalazar} alt="Skull of Salazar" />
                    </div>
                    <div className="twoRow">
                        <img src={DevalayaKitchen} alt="Devalaya Kitchen" />
                    </div>
                    <div className="twoCol">
                        <img src={DozzedOff} alt="Dozzed Off Man" />
                    </div>
                    <div className="twoRow">
                        <img src={ReserveTrees} alt="Reserve Trees" />
                    </div>
                    <div className="twoCol">
                        <img src={RoundTable} alt="Round Table" />
                    </div>
                    <div className="oneCol">
                        <img src={DevalayaKitchenTwo} alt="Devalaya Kitchen Two" />
                    </div>
                    <div className="oneCol">
                        <img src={SJP} alt="War Torn" />
                    </div>
                    <div className="twoCol">
                        <img src={AMGTwo} alt="Amg GT3 Two" />
                    </div>
                </div>
            </div>
        </BlenderBox>
    )
}


const BlenderBox = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 0px;

    h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 40px;
        color: #3E6265;
        margin-bottom: 40px;

        >span{
            font-weight: 700;
        }
    }
    .blenderContainer{
        width: 340px;
        height: auto;

        @media (min-width: 768px) {
            width: 680px;
        }
        @media (min-width: 1100px) {
            width: 1080px;
        }

        .blenderGallery {
            width: 340px;
            height: auto;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            row-gap: 10px;
            column-gap: 10px;
            padding: 5px;
            

            @media (min-width: 768px) {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                row-gap: 10px;
                column-gap: 15px;
                padding: 0px;
                width: 680px;
            }
            @media (min-width: 1100px) {
                gap: 20px;
                padding: 30px;
                width: 1080px;
            }
            

            .twoCol {
                width: 330px;
                height: 160px;

                @media (min-width: 768px) {
                    grid-column: span 2;
                }

                @media (min-width: 1100px) {
                    width: 500px;
                    height: 240px;
                }

                >img {
                    width: 330px;
                    height: 160px;
                    border-radius: 10px;
                    object-fit: cover;
                    box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.15);

                    @media (min-width: 1100px) {
                        width: 500px;
                        height: 240px;
                        border-radius: 20px;
                    }
                }
            }
            .oneCol {
                width: 160px;
                height: 160px;

                @media (min-width: 768px) {
                    grid-column: span 1;
                }

                @media (min-width: 1100px) {
                    width: 240px;
                    height: 240px;
                }

                >img {
                    width: 160px;
                    height: 160px;
                    border-radius: 10px;
                    object-fit: cover;
                    box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.15);

                    @media (min-width: 1100px) {
                        width: 240px;
                        height: 240px;
                        border-radius: 20px;
                    }
                }
            }
            .twoRow {
                width: 160px;
                height: 330px;

                @media (min-width: 768px) {
                    grid-row: span 2;
                }

                @media (min-width: 1100px) {
                    width: 240px;
                    height: 500px;
                }

                >img {
                    width: 160px;
                    height: 330px;
                    border-radius: 10px;
                    object-fit: cover;
                    box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.15);

                    @media (min-width: 1100px) {
                        width: 240px;
                        height: 500px;
                        border-radius: 20px;
                    }
                }
            }
        }
    }
`;

export default BlenderSection