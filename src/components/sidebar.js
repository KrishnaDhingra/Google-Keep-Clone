import React from 'react'
import styled from 'styled-components'
import '../index.css'
import { IoSettingsOutline } from 'react-icons/io5';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiBell } from 'react-icons/bi';
import { VscEdit } from 'react-icons/vsc';
import { FaRegLightbulb } from 'react-icons/fa';

const Body = styled.div`
    background-color: transparent;
    height: 90vh;
    top: 10vh;
    width: 4rem;
    gap: 0.7rem;
    overflow: hidden;
    position: fixed;

    &:hover{
        transition: all 0.2s;
        width: 20rem;
        box-shadow: 0px 0px 10px #232931;
    }
    
    .settings_icon{
        font-size: 1.5rem;
        color: whitesmoke;
        border-radius: 50%;
        padding: 0.8rem 0.8rem;
        margin-left: 2.4rem;
    }
    .settings_icon:hover{
        background-color: #525355;
    }
    
    ul{
        width: 100%;
        display: flex;
        gap: 0.4rem;
        flex-direction: column;
        justify-content: flex-start;
    }
    li{
        /* padding-right: 1rem; */
        border-top-right-radius: 28px;
        border-bottom-right-radius: 28px;
        display: flex;
        list-style: none;
        width: 107%;
        margin-left: -4rem;
    }
    li:hover{
        background-color: ${1-1 === 0 ? '#525355' : 'transparent'};
    }
    a{
        display: flex;
        gap: 1.4rem;
        justify-content: center;
        align-items: center;
    }
    span{
        font-size: 1rem;
        color: rgb(232, 234, 237);
        font-weight: 500;
        letter-spacing: 1px;
    }
    
    `

export let Sidebar = () =>{

    return(
        <Body>
            <ul>
                <li>
                    <a>
                        <FaRegLightbulb className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <RiDeleteBin6Line className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <BiBell className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <VscEdit className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <VscEdit className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <IoSettingsOutline className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a>
                        <IoSettingsOutline className="settings_icon"/>
                        <span>Home</span>
                    </a>
                </li>
            </ul>        
        </Body>
    )
}