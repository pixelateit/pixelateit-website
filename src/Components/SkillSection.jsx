import React from 'react'
import styled from 'styled-components'
import SkillSet from '../skillList'
import Skills from './Skills'
import SpiralW from '../assets/spiralW.png'
import Column from "../assets/column.png";


function SkillSection() {
    return (
        <SkillsSection id='skills'>
            <img id="column" src={Column} alt="Column" />
            <div className="skillContainer">

                <h2><span>My</span>Skills</h2>
                <div className="skillList">
                    {SkillSet.map((e) => {
                        return (
                            <Skills key={e.id} title={e.title} imgUrl={e.imgUrl} />
                        )
                    })}

                </div>
            </div>
            <img id='spiralW' src={SpiralW} alt="Spiral W" />
        </SkillsSection>
    )
}

const SkillsSection = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 180px;
    background: #86B1B4;
    position: relative;

    .skillContainer {
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
            line-height: 44px;
            color: #3E6265;
            margin-bottom: 60px;

            >span {
                font-weight: 700;
            }
        }

        .skillList{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    #spiralW {
        position: absolute;
        bottom: -250px;
        right: 110px;
        width: 400px;
        height: 400px;
        display: none;
        animation: upDown infinite ease 3s;

        @media (min-width: 1100px) {
            display: block;
        }
    }
    #column {
        position: absolute;
        top: -250px;
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
`;


export default SkillSection