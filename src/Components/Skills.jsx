import React from 'react'
import styled from 'styled-components'
import Astrix from '../assets/astrix.svg'


function Skills(props) {
    return (
        <SkillTab>
            <p>
                {props.title}
            </p>
            <img className='imageFloat' src={props.imgUrl} alt={props.title} />
            <img className='astrix' src={Astrix} alt="Imp" />
        </SkillTab>
    )
}


const SkillTab = styled.div`
    width: 340px;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px 40px;
    background: #86B1B4;
    border-bottom: 1px solid #798089;
    position: relative;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 680px;
    }
    @media (min-width: 1100px) {
        width: 1080px;
        padding: 40px 60px;
    }  

    p{
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;

        @media (min-width: 1100px) {
            font-size: 36px;
            line-height: 44px;
        }
    }

    .astrix {
        width: 24px;
        height: 24px;

        @media (min-width: 1100px) {
            width: 44px;
            height: 44px;
        }
    }

    .imageFloat{
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
        position: absolute;
        top: -40px;
        left: 30%;
        opacity: 0;
        z-index: 9;
        transition: opacity ease 1.2s;

        @media (min-width: 1100px) {
            width: 200px;
            height: 320px;
            left: 70%;
        }
    }

    &:hover .imageFloat{
        opacity: 1;
    }


`;

export default Skills