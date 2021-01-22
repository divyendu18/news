import React from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";


const Ul=styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-around;

li{
    padding: 1.8rem 0.8rem;
    font-family: 'sans-serif';
    font-weight:600;
    font-size:1.6rem;
}
.link{
    text-decoration:none;
    color:white;
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
      padding-top:0.5rem;
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
        </Ul>
    )
}

export default NavContent;
