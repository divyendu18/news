import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
import  Search from '../search/Search';


const Ul=styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;

li{
    padding: 1.8rem 0.8rem;
    font-family: 'Roboto Slab', serif;
    font-weight:600;
}
.link{
    text-decoration:none;
    color:white;
}
input[type=text]{
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: black;
    background-image: url('searchicon.png');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    color:white;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    border:none;
    pointer:cursor;
    width:100px;
  } 
}
@media (max-width: 768px) {
      flex-flow: column nowrap;
      background-color: #0D2538;
      position: fixed;
      transform:${({open}) =>open ? 'translateX(0)':'translateX(100%)'};
      top: 0;
      right: 0;
      height: 100vh;
      jusitfy-content:space-around;
      width: 300px;
      padding-top: 3.5rem;
      transition:transform 0.3s ease-in-out;
    
    .link{
        color:white;
    }
}
`;

const NavContent=({open})=>{

   
    return(
        <Ul open={open}>
        <li ><Link to="/" className="link">New Stories</Link></li>
        <li><Link to="/topStories" className="link">Top Stories</Link></li>
        <li><Link to="/bestStories" className="link">Best Stories</Link></li>
        <li><Link to="/askStories" className="link">Ask Stories</Link></li>
        <li><Search/></li>
        </Ul>
    )
}

export default NavContent;
