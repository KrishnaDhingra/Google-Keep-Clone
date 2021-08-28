import React from 'react'
import styled from 'styled-components'
import '../index.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoSettingsOutline } from 'react-icons/io5';



export const Header = styled.div`
    background-color: #202124;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0rem;
    color: rgb(232, 234, 237);
    min-height: 3.7rem;
    border-bottom: 1.5px solid grey;

    .hamburger_icon, .settings_icon{
        font-size: 1.6rem;
        border-radius: 50%;
        padding: 0.7rem 0.7rem;
    }
    .hamburger_icon:hover, .settings_icon:hover{
        background-color: #525355;
    }

    .center{
        display: grid;
        place-items: center;
        flex-basis: 60%;
        align-self: stretch;
    }
    .left, .right{
        flex-basis: 10%;
        align-self: stretch;
        display: flex;
        justify-content: space-around;
        gap: 0rem;
        align-items: center;
    }
`
const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    color: rgb(232, 234, 237);
    line-height: 20px;
    font-family: 'Poppins', sans-serif;
`
const Input = styled.input`
    border: none;
    border-radius: 10px;
    background-color: #525355;
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 1rem;
    outline: none;
    padding: 0rem 2rem; 
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    ::placeholder{
        color: white;
        font-size: 1rem;
        font-weight: 400;
    }
    `
const Logo =  styled.span`
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
`

export let Sidebar = () => {
    return(
        <Header>
            <div className="left">
                <GiHamburgerMenu className="hamburger_icon"/>
                <Logo>Keep</Logo>
            </div>
            <div className="center">
                <Input placeholder="Search"></Input>
            </div>
            <div className="right">
                <IoSettingsOutline className="settings_icon" />
            </div>
        </Header>
    )
}